import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { blogPosts, BlogPost } from '../../data/blogPosts';
import { ArrowLeftIcon } from '../Icons';
import { AuthorBio } from '../AuthorBio';
import { ContactForm } from '../ContactForm';
import { ShareButtons } from '../ShareButtons';
import { generateToc } from '../utils/toc';
import { TableOfContents } from '../TableOfContents';
import Ad from '../Ad';
import AdSenseAd from '../AdSenseAd';
import { allImages, getThumbnail } from './MyArtGallery';
import { RecipeRating } from '../RecipeRating';
import { PinItButton } from '../PinItButton';
import { PremiumPromo } from '../PremiumPromo';
import { AdUnit } from '../AdUnit';
import { getFoodBlurDataURL } from '../utils/imageBlur';
// ... (skipping lines)
{
    allImages.slice(0, 10).map((img, index) => (
        <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-sm hover:opacity-90 transition-opacity">
            <img src={getThumbnail(img, 400)} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
        </div>
    ))
}
import { updateSchema, getToolSeoData } from '../utils/seo';

interface BlogPostPageProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
    post: BlogPost;
    handleNavigate: (path: string) => void;
}

const NavCard: React.FC<{ post: BlogPost; handleNavigate: (path: string) => void; direction: 'Previous' | 'Next' }> = ({ post, handleNavigate, direction }) => {
    const href = post.type === 'recipe' ? `/recipes/${post.slug}` : `/blog/${post.slug}`;
    const cleanTitle = (title: string) => title.split('|')[0].trim();

    return (
        <a
            href={href}
            onClick={(e) => { e.preventDefault(); handleNavigate(href); }}
            className="p-4 border border-brand-border rounded-lg hover:bg-brand-pink-light/50 transition-colors group"
        >
            <div className="text-sm font-bold text-brand-pink">{direction} {post.type === 'recipe' ? 'Recipe' : 'Article'}</div>
            <div className="font-semibold text-brand-text-title group-hover:underline">{cleanTitle(post.title)}</div>
        </a>
    );
};


export const BlogPostPage: React.FC<BlogPostPageProps> = ({ setActiveTool, breadcrumbs, post, handleNavigate }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const tocRef = useRef<HTMLDivElement>(null);
    const { headings, contentWithIds } = generateToc(post.content);

    useEffect(() => {
        // Update Schema for SEO
        updateSchema('baking-blog', getToolSeoData('baking-blog'), post);

        const contentDiv = contentRef.current;
        if (!contentDiv) return;

        const handleToolClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON' && target.dataset.toolid) {
                e.preventDefault();
                setActiveTool(target.dataset.toolid as ToolId);
            }
        };

        const handleTocClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            if (target.tagName === 'A' && target.hash) {
                e.preventDefault(); // Prevent hash from appearing in URL
                const id = target.hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    // Calculate offset for sticky header
                    const headerOffset = 100;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        };

        contentDiv.addEventListener('click', handleToolClick);
        const tocDiv = tocRef.current;
        tocDiv?.addEventListener('click', handleTocClick);

        return () => {
            contentDiv.removeEventListener('click', handleToolClick);
            tocDiv?.removeEventListener('click', handleTocClick);
        };
    }, [post, setActiveTool]);

    const currentIndex = blogPosts.findIndex(p => p.id === post.id);
    const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

    const postUrl = post.type === 'recipe' ? `https://sweetysbakery.com/recipes/${post.slug}` : `https://sweetysbakery.com/blog/${post.slug}`;

    return (
        <ToolContainer title="" description="" setActiveTool={setActiveTool} breadcrumbs={breadcrumbs}>
            {/* Hero Header Section */}
            <div className="max-w-6xl mx-auto text-center px-4 mb-12">
                <button
                    onClick={() => handleNavigate(post.type === 'recipe' ? '/recipes' : '/blog')}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-pink uppercase tracking-widest hover:bg-brand-pink/5 px-4 py-2 rounded-full transition-colors mb-8"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    {post.type === 'recipe' ? 'Back to Recipes' : 'Back to Blog'}
                </button>

                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text-title leading-relaxed mb-6 max-w-5xl mx-auto break-words hyphens-auto whitespace-normal">
                    {post.title}
                </h1>

                <div className="flex items-center justify-center gap-4 text-sm text-brand-text-body/60 font-medium tracking-wide uppercase">
                    <span className="flex items-center gap-2">
                        <span className="w-8 h-px bg-brand-pink/50"></span>
                        {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-pink/30"></span>
                    <span>{post.readTime} read</span>
                    <span className="w-8 h-px bg-brand-pink/50"></span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4">
                {/* Main Content Column */}
                <main className="flex-1 min-w-0">

                    {/* Ads handled globally by ClientLayout - Removed duplicate top banner */}

                    {/* Featured Image */}
                    {post.imageUrl && (
                        <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl shadow-brand-pink/10 relative group">
                            <PinItButton
                                url={postUrl}
                                media={`https://sweetysbakery.com${post.imageUrl}`}
                                description={post.title}
                                className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60 z-[1]"></div>
                            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                                    placeholder="blur"
                                    blurDataURL={getFoodBlurDataURL()}
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {/* Recipe Rating - High Visibility Placement */}
                    {post.type === 'recipe' && (
                        <div className="mb-8">
                            <RecipeRating
                                slug={post.slug}
                                initialRating={post.recipeData?.rating?.ratingValue || 5}
                                initialCount={post.recipeData?.rating?.ratingCount || 1}
                            />
                        </div>
                    )}

                    {/* High-Priority Ad After Hero Image (Recipe Pages Only) */}
                    {post.imageUrl && post.type === 'recipe' && (
                        <div className="my-8 flex justify-center w-full">
                            {/* Mobile Banner 320x100 */}
                            <div className="sm:hidden">
                                <AdSenseAd slotId="6260723727" width={320} height={100} style={{ width: '320px', height: '100px' }} />
                            </div>
                            {/* Desktop Leaderboard 728x90 */}
                            <div className="hidden sm:block">
                                <AdSenseAd slotId="1376752077" width={728} height={90} style={{ width: '728px', height: '90px' }} />
                            </div>
                        </div>
                    )}

                    {/* Editorial Excerpt */}
                    <div className="mb-12 relative px-8 py-6 bg-brand-pink-light/10 rounded-2xl border-l-4 border-brand-pink">
                        <span className="absolute top-0 left-0 -mt-4 -ml-2 text-6xl text-brand-pink/20 font-serif leading-none">“</span>
                        <p className="text-xl md:text-2xl font-serif text-brand-text-title/90 italic leading-relaxed">
                            {post.excerpt}
                        </p>
                    </div>

                    <div className="mb-12 flex justify-between items-center py-6 border-t border-b border-brand-border/50">
                        <span className="font-bold text-sm text-brand-text-title uppercase tracking-wider">Share this article</span>
                        <ShareButtons
                            url={postUrl}
                            imageUrl={`https://sweetysbakery.com${post.imageUrl}`}
                            description={post.excerpt}
                        />
                    </div>

                    {/* Mobile TOC */}
                    <div className="lg:hidden mb-12 bg-white rounded-xl p-6 border border-brand-border shadow-sm" ref={tocRef}>
                        <h3 className="font-serif text-xl font-bold text-brand-text-title mb-4 flex items-center gap-2">
                            <span className="text-brand-pink">📑</span> Table of Contents
                        </h3>
                        <TableOfContents headings={headings} />
                    </div>

                    {/* Article Content */}
                    <div ref={contentRef} className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-serif prose-headings:font-bold prose-headings:text-brand-text-title prose-headings:tracking-tight
                        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-brand-pink/20 prose-h2:pb-2
                        prose-h3:text-2xl prose-h3:mt-8 prose-h3:text-brand-pink-dark
                        prose-p:leading-8 prose-p:text-brand-text-body/90 prose-p:mb-6
                        prose-a:text-brand-pink prose-a:font-semibold prose-a:no-underline prose-a:border-b-2 prose-a:border-brand-pink/30 hover:prose-a:border-brand-pink hover:prose-a:text-brand-pink-dark transition-colors
                        prose-blockquote:border-l-brand-pink prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic
                        prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
                        prose-li:marker:text-brand-pink
                        ">
                        {(() => {
                            // Calculate insertion points - use contentWithIds instead of post.content
                            const paragraphs = contentWithIds.split('</p>');
                            const totalParagraphs = paragraphs.length;
                            const middleIndex = Math.floor(totalParagraphs / 2);
                            const promoIndex = Math.floor(2 * totalParagraphs / 3);

                            return paragraphs.map((paragraph, index) => {
                                if (index === paragraphs.length - 1 && !paragraph.trim()) return null;

                                const contentChunk = paragraph + (index < paragraphs.length - 1 ? '</p>' : '');
                                return (
                                    <React.Fragment key={index}>
                                        <div dangerouslySetInnerHTML={{ __html: contentChunk }} />

                                        {/* Smart In-Content Ads - Every 3 Paragraphs for Recipes, Middle for Articles */}
                                        {(post.type === 'recipe' ? (index > 0 && index % 3 === 0) : index === middleIndex) && (
                                            <div className="my-8 flex justify-center w-full">
                                                <div className="p-1 bg-white border border-gray-100 rounded-lg shadow-sm">
                                                    <span className="block text-[10px] text-gray-400 text-center uppercase tracking-widest mb-1">Ad</span>
                                                    {/* In-Article: Large Rectangle 336x280 */}
                                                    <AdSenseAd slotId="4784663984" width={336} height={280} style={{ display: 'inline-block', width: '336px', height: '280px' }} />
                                                </div>
                                            </div>
                                        )}

                                        {/* Premium Tool CTA (2/3 way) */}
                                        {index === promoIndex && (
                                            <div className="lg:hidden my-10 w-full">
                                                <PremiumPromo variant="inline-tool" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            });
                        })()}

                        {/* Footer AdSense Ad (End of Article) - Leaderboard 728x90 */}
                        <div className="mt-12 mb-8 flex justify-center w-full">
                            <div className="relative">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-[10px] text-gray-400 uppercase tracking-widest z-10">Advertisement</span>
                                <div className="border-t border-gray-100 pt-4">
                                    <AdSenseAd slotId="1376752077" width={728} height={90} style={{ display: 'block', width: '728px', height: '90px' }} className="hidden sm:block" />
                                    {/* Fallback for Mobile in same slot area if needed, or hide */}
                                    <AdSenseAd slotId="6260723727" width={320} height={100} style={{ display: 'block', width: '320px', height: '100px' }} className="sm:hidden" />
                                </div>
                            </div>
                        </div>

                    </div>
                </main>

                {/* Sticky Sidebar (Desktop Only) */}
                <aside className="hidden lg:block w-[320px] xl:w-[350px] flex-shrink-0 pt-0">
                    <div className="sticky top-28 space-y-8">
                        {/* TOC for Desktop */}
                        <div className="bg-white p-6 rounded-2xl border border-brand-border/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-h-[50vh] overflow-y-auto custom-scrollbar">
                            <h3 className="font-serif text-lg font-bold text-brand-text-title mb-4 pb-3 border-b border-brand-border flex items-center gap-2">
                                <span className="text-xl">📑</span> Contents
                            </h3>
                            <TableOfContents headings={headings} />
                        </div>

                        {/* Premium Tool Promo - Sidebar */}
                        <div className="transform hover:scale-[1.02] transition-transform duration-300">
                            <PremiumPromo variant="sidebar" />
                        </div>

                        {/* Primary Sticky Ad - Enhanced */}
                        <div className="bg-gradient-to-br from-brand-cream to-white rounded-2xl overflow-hidden border-2 border-brand-gold/20 shadow-lg group hover:shadow-xl transition-all">
                            <div className="bg-gradient-to-r from-brand-gold/10 to-brand-pink/10 px-4 py-2 border-b border-brand-gold/20 flex justify-between items-center">
                                <span className="text-[10px] uppercase font-bold text-brand-gold tracking-wider">Advertisement</span>
                            </div>
                            <div className="flex justify-center p-4 bg-gray-50/30">
                                {/* Skyscraper 300x600 */}
                                <AdSenseAd slotId="3105168656" width={300} height={600} style={{ width: 300, height: 600 }} />
                            </div>
                        </div>

                        {/* Newsletter Mini-Signup */}
                        <div className="bg-gradient-to-br from-brand-pink-light/40 to-white p-8 rounded-3xl text-center border border-brand-pink/10 shadow-lg shadow-brand-pink/5 relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl group-hover:bg-brand-pink/20 transition-colors"></div>
                            <h3 className="font-serif font-bold text-2xl text-brand-text-title mb-2 relative z-10">Join the Club! 🍰</h3>
                            <p className="text-sm text-brand-text-body/80 mb-6 relative z-10 leading-relaxed">
                                Join 5,000+ bakers getting sweet tips & free tools.
                            </p>
                            <button onClick={() => document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-brand-pink text-white font-bold py-3.5 px-6 rounded-xl hover:bg-brand-pink-dark hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-sm shadow-md relative z-10">
                                Subscribe Free
                            </button>
                        </div>

                        {/* Second Ad */}
                        <div className="bg-white rounded-xl overflow-hidden border border-brand-border shadow-sm">
                            <div className="flex justify-center p-4">
                                <AdUnit
                                    slot="9928505998"
                                    width={300}
                                    height={250}
                                    format="rectangle"
                                    style={{ width: 300, height: 250 }}
                                    responsive={false}
                                />
                            </div>
                        </div>
                    </div>
                </aside>
            </div>

            {/* Footer Content Sections (Full Width) */}
            <div className="max-w-4xl mx-auto px-4 mt-24 pt-12 border-t border-brand-border/40 space-y-20">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-brand-border shadow-sm">
                    <AuthorBio handleNavigate={handleNavigate} />
                </div>

                <div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-center mb-8 relative">
                        <span className="relative z-10 bg-brand-background px-6">From My Gallery</span>
                        <div className="hidden sm:block absolute top-1/2 left-0 w-full h-px bg-brand-border/60 -z-0"></div>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {allImages.slice(0, 10).map((img, index) => (
                            <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 relative group cursor-pointer" onClick={() => setActiveTool('my-art')}>
                                <PinItButton
                                    url={postUrl}
                                    media={img}
                                    description={`Creation by Sweety's Bakery - ${post.title}`}
                                    className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 scale-75 origin-top-left z-20"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                                <img src={getThumbnail(img, 400)} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <button onClick={() => setActiveTool('my-art')} className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pink-dark transition-colors border-b-2 border-transparent hover:border-brand-pink">
                            View Full Gallery <ArrowLeftIcon className="w-4 h-4 rotate-180" />
                        </button>
                    </div>
                </div>

                <div>
                    <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-8">Get in Touch</h2>
                    <ContactForm />
                </div>

                {(prevPost || nextPost) && (
                    <div className="pt-10 border-t border-brand-border/40">
                        <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-8">Continue Reading</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {prevPost && <NavCard post={prevPost} handleNavigate={handleNavigate} direction="Previous" />}
                            {nextPost && <NavCard post={nextPost} handleNavigate={handleNavigate} direction="Next" />}
                        </div>
                    </div>
                )}
            </div>
        </ToolContainer>
    );
};
