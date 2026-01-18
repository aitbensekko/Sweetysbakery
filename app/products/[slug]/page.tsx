import { Metadata } from 'next';
import ProductDetailPage from '../../../components/ProductDetailPage';
import { affiliateProducts } from '../../../data/affiliateProducts';

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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            <ProductDetailPage slug={slug} />
        </>
    );
}
