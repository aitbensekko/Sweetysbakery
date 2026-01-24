import { Metadata } from 'next';
import ProductDetailPage from '../../../components/ProductDetailPage';
import { affiliateProducts } from '../../../data/affiliateProducts';
import { blogPosts } from '../../../data/blogPosts';

function getRelatedRecipes(product: typeof affiliateProducts[0]) {
    const searchTerms = [product.name, ...product.name.split(' ').filter(w => w.length > 4)]; // Use full name and significant words

    return blogPosts.filter(post => {
        // 1. Check ingredients if it's a recipe
        if (post.type === 'recipe' && post.recipeData?.ingredients) {
            const hasIngredient = post.recipeData.ingredients.some(ing =>
                searchTerms.some(term => ing.toLowerCase().includes(term.toLowerCase()))
            );
            if (hasIngredient) return true;
        }

        // 2. Check content/context for mentions
        const mentionsProduct = searchTerms.some(term =>
            post.content.toLowerCase().includes(term.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(term.toLowerCase())
        );

        return mentionsProduct;
    })
        .map(post => ({
            slug: post.slug,
            title: post.title,
            imageUrl: post.imageUrl,
            type: post.type || 'article'
        }))
        .slice(0, 3); // Limit to 3 related recipes
}

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = affiliateProducts.find(p => p.slug === slug);
    if (!product) return {};

    return {
        title: product.seoTitle || `${product.name} Review | Sweety's Bakery`,
        description: product.seoDescription || product.excerpt,
        keywords: product.seoKeywords,
        alternates: {
            canonical: `https://sweetysbakery.com/products/${slug}/`,
        },
    };
}

export async function generateStaticParams() {
    return affiliateProducts.map((product) => ({
        slug: product.slug,
    }));
}

export default async function ProductDetail({ params }: Props) {
    const { slug } = await params;
    const product = affiliateProducts.find(p => p.slug === slug);

    if (!product) {
        return <ProductDetailPage slug={slug} />;
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.imageUrl,
        description: product.seoDescription || product.excerpt,
        brand: {
            '@type': 'Brand',
            name: 'Generic' // Ideally this should be dynamic if available
        },
        review: {
            '@type': 'Review',
            reviewRating: {
                '@type': 'Rating',
                ratingValue: product.rating || 5,
                bestRating: 5,
            },
            author: {
                '@type': 'Person',
                name: 'Sweety\'s Bakery Team',
            },
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating || 4.5,
            reviewCount: 1, // Placeholder, ideally should be real data
        },
        offers: {
            '@type': 'Offer',
            url: product.affiliateLink,
            priceCurrency: 'USD',
            price: '0.00', // Placeholder as we don't track live prices
            availability: 'https://schema.org/InStock',
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'US',
                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                merchantReturnDays: 30,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFees: 'https://schema.org/FreeReturn'
            },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                    '@type': 'MonetaryAmount',
                    value: 0,
                    currency: 'USD'
                },
                shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: 'US'
                }
            }
        },
    };

    let faqSchema = null;
    if (product.faq && product.faq.length > 0) {
        faqSchema = {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: product.faq.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.answer,
                },
            })),
        };
    }

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://sweetysbakery.com/'
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://sweetysbakery.com/products'
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: product.category,
                // item: `https://sweetysbakery.com/products/category/${product.category.toLowerCase()}` // Optional if category pages exist
            },
            {
                '@type': 'ListItem',
                position: 4,
                name: product.name,
                item: `https://sweetysbakery.com/products/${slug}`
            }
        ]
    };

    const relatedRecipes = getRelatedRecipes(product);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <ProductDetailPage slug={slug} relatedRecipes={relatedRecipes} />
        </>
    );
}
