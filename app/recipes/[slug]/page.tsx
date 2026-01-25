import { Metadata } from 'next';
import { MainContentWrapper } from '../../../components/MainContentWrapper';
import { blogPosts, BlogPost } from '../../../data/blogPosts';
import Script from 'next/script';
import { generateRecipeSchema, generateBreadcrumbSchema } from '../../utils/schema';

import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug && p.type === 'recipe');

    if (!post) {
        return {};
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.imageUrl],
        },
        alternates: {
            canonical: `https://sweetysbakery.com/recipes/${slug}/`,
        },
    };
}

export async function generateStaticParams() {
    return blogPosts
        .filter((post) => post.type === 'recipe')
        .map((post) => ({
            slug: post.slug,
        }));
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug && p.type === 'recipe');

    if (!post) {
        notFound();
    }

    return (
        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(post.slug, post.title, 'recipe')) }}
            />
            {/* Main Recipe Schema */}
            <Script
                id="recipe-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateRecipeSchema(post)) }}
            />
            <MainContentWrapper activeTool="baking-blog" activePost={post} />
        </>
    );
}
