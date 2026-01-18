import { ToolId, slugToToolId } from './slugs';
import { findPostBySlug, type BlogPost } from '../../data/blogPosts';

/**
 * Parses the window pathname to determine the active tool and blog post.
 * @param pathname The pathname from window.location.
 * @returns An object containing the toolId and an optional post.
 */
export const parsePathname = (pathname: string): { toolId: ToolId, post: BlogPost | null } => {
    // First, try to match a known tool or page slug
    const toolId = slugToToolId(pathname);
    if (toolId) {
        return { toolId, post: null };
    }

    // If no tool matches, try to match a blog post slug from the root
    const slug = pathname.startsWith('/') ? pathname.substring(1) : pathname;
    const post = findPostBySlug(slug);
    if (post) {
        // If a post is found, we know the active tool is the blog
        return { toolId: 'baking-blog', post };
    }

    // Fallback to home for any unknown paths
    return { toolId: 'home', post: null };
};
