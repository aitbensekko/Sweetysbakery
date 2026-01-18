import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    content: string;
}

const BLOG_POSTS_PATH = path.join(__dirname, '../data/blogPosts.ts');

// Helper to parse individual blog post string into a BlogPost object
const parseBlogPostString = (postString: string): BlogPost => {
    // Regex for fields, making the quote character dynamic
    // This looks for a string that starts with either ' or " or ` and ends with the same character
    const quoteChars = `"'\``; // Characters to match for quotes (single, double, backtick)
    
    const idMatch = postString.match(/id: (\d+),/);
    
    // Helper to get string values with dynamic quote matching
    function getStringValue(key: string, str: string): string | null {
        // Corrected backreference escaping for RegExp string literal: \1
        const match = str.match(new RegExp(`${key}: ([${quoteChars}])(.*?)\\1,`, 's'));
        return match ? match[2] : null;
    }

    const slug = getStringValue('slug', postString);
    const title = getStringValue('title', postString);
    const excerpt = getStringValue('excerpt', postString);
    const imageUrl = getStringValue('imageUrl', postString);
    const category = getStringValue('category', postString);
    const author = getStringValue('author', postString);
    const date = getStringValue('date', postString);
    const readTime = getStringValue('readTime', postString);
    const contentMatch = postString.match(/content: `([\s\S]*?)`/); // Content is always backtick

    // Ensure all matches are found, or handle error appropriately
    if (!idMatch || slug === null || title === null || excerpt === null || imageUrl === null || category === null || author === null || date === null || readTime === null || !contentMatch) {
        console.error('Failed to parse blog post string:', postString);
        throw new Error('Malformed blog post string encountered.');
    }

    return {
        id: parseInt(idMatch[1], 10),
        slug: slug,
        title: title,
        excerpt: excerpt,
        imageUrl: imageUrl,
        category: category,
        author: author,
        date: date,
        readTime: readTime,
        content: contentMatch[1].trim(), // Trim to remove leading/trailing newlines from template literal
    };
};

// Function to read blog posts directly from blogPosts.ts
const readBlogPosts = (): BlogPost[] => {
    const fileContent = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');
    
    // Extract just the array content - Corrected escaping for []
    const arrayContentMatch = fileContent.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);
    if (!arrayContentMatch || !arrayContentMatch[1]) {
        throw new Error('Could not find blogPosts array definition in blogPosts.ts');
    }
    const rawArrayContent = arrayContentMatch[1];

    const posts: BlogPost[] = [];
    // Split the raw array content by '},' followed by an optional newline and '{'
    // This is still a heuristic, but often works for well-formatted arrays of objects.
    // A more robust solution might involve AST parsing (ts-morph)
    const rawPostStrings = rawArrayContent.split(/},\s*{/);

    rawPostStrings.forEach((ps, index) => {
        let cleanPs = ps.trim();
        if (index === 0) { // First element starts with '{'
            cleanPs = cleanPs.startsWith('{') ? cleanPs : '{' + cleanPs;
        }
        if (index === rawPostStrings.length - 1) { // Last element ends with '}'
            cleanPs = cleanPs.endsWith('}') ? cleanPs : cleanPs + '}';
        } else { // Middle elements need to have both '{' and '}'
             cleanPs = cleanPs.startsWith('{') ? cleanPs : '{' + cleanPs;
             cleanPs = cleanPs.endsWith('}') ? cleanPs : cleanPs + '}';
        }
        // Remove trailing comma from the last property of an object if present
        cleanPs = cleanPs.replace(/,\s*}/g, '}');

        if (cleanPs) {
            posts.push(parseBlogPostString(cleanPs));
        }
    });

    return posts;
};

// Function to write blog posts back to blogPosts.ts
const writeBlogPosts = (blogPosts: BlogPost[]): void => {
    // Extract the interface definition and any other code outside the blogPosts array
    const originalFileContent = fs.readFileSync(BLOG_POSTS_PATH, 'utf-8');
    // Corrected escaping for [] - use double backslashes in string literals for RegExp constructor
    const preArrayContentMatch = originalFileContent.match(/([\s\S]*?)(export const blogPosts: BlogPost\[\] = \[)/);
    const postArrayContentMatch = originalFileContent.match(/\];([\s\S]*)/);

    const preArrayContent = preArrayContentMatch ? preArrayContentMatch[1] + preArrayContentMatch[2] : '';
    const postArrayContent = postArrayContentMatch ? postArrayContentMatch[1] : '';

    const postsArrayString = blogPosts.map(post => {
        // Escape backticks within the content for the template literal
        const escapedContent = post.content.replace(/`/g, '\`');
        
        // Directly use JSON.stringify for all string values.
        // This will result in double-quoted strings in the output, which are universally valid
        // and handle all necessary escaping automatically for TypeScript/JavaScript.
        const slug = JSON.stringify(post.slug);
        const title = JSON.stringify(post.title);
        const excerpt = JSON.stringify(post.excerpt);
        const imageUrl = JSON.stringify(post.imageUrl);
        const category = JSON.stringify(post.category);
        const author = JSON.stringify(post.author);
        const date = JSON.stringify(post.date);
        const readTime = JSON.stringify(post.readTime);

        return `    {
        id: ${post.id},
        slug: ${slug},
        title: ${title},
        excerpt: ${excerpt},
        imageUrl: ${imageUrl},
        category: ${category},
        author: ${author},
        date: ${date},
        readTime: ${readTime},
        content: \
${escapedContent}
        \
    }`;
    }).join(',\n');

    const output = `${preArrayContent}${postsArrayString}
];${postArrayContent}`;
    fs.writeFileSync(BLOG_POSTS_PATH, output, 'utf-8');
};

// Simple tokenizer: converts text to lowercase, removes punctuation, and splits into words.
const tokenize = (text: string): string[] => {
    return text.toLowerCase().replace(/[^\w\s-]/g, '').split(/\s+/).filter(Boolean);
};

// Build an inverted index of keywords to blog post slugs
const buildKeywordIndex = (posts: BlogPost[]): Map<string, string[]> => {
    const index = new Map<string, string[]>();
    posts.forEach(post => {
        const text = `${post.title} ${post.excerpt} ${post.category}`;
        const keywords = tokenize(text);
        keywords.forEach(keyword => {
            if (keyword.length > 2 && !index.has(keyword)) { // Only consider keywords > 2 chars
                index.set(keyword, []);
            }
            if (keyword.length > 2 && !index.get(keyword)?.includes(post.slug)) {
                index.get(keyword)?.push(post.slug);
            }
        });
    });
    return index;
};

// Function to escape a string for use in a JavaScript RegExp constructor
function escapeRegExp(string: string): string {
    // Escape characters with special meaning in regular expressions
    // including the backtick for template literal safety in the regex construction
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/`/g, '\\`');
}

// Find and inject internal links
const injectInternalLinks = (posts: BlogPost[], keywordIndex: Map<string, string[]>): BlogPost[] => {
    const updatedPosts: BlogPost[] = [];
    const MAX_LINKS_PER_POST = 3; // Limit the number of links to inject per post

    posts.forEach(currentPost => {
        let newContent = currentPost.content;
        let linksInjected = 0;
        const linkedSlugs = new Set<string>(); // Keep track of slugs already linked in this post

        // Create a list of potential linkable keywords/phrases from other posts
        // Prioritize full titles and categories as phrases
        // Use a Set to avoid duplicate phrases and for faster lookups
        const allPotentialLinkPhrases: Set<string> = new Set();
        const phraseToSlugMap: Map<string, string> = new Map();

        posts.forEach(otherPost => {
            if (currentPost.slug !== otherPost.slug) {
                // Add full title as a phrase
                if (otherPost.title.length > 5) { // Only link reasonably long titles
                    allPotentialLinkPhrases.add(otherPost.title);
                    phraseToSlugMap.set(otherPost.title, otherPost.slug);
                }
                // Add category as a phrase
                if (otherPost.category.length > 3) { // Only link reasonably long categories
                     allPotentialLinkPhrases.add(otherPost.category);
                     phraseToSlugMap.set(otherPost.category, otherPost.slug);
                }
                // Also consider multi-word phrases from the excerpt of other posts
                const excerptWords = tokenize(otherPost.excerpt);
                for (let i = 0; i < excerptWords.length; i++) {
                    for (let j = i + 1; j <= excerptWords.length; j++) {
                        const phrase = excerptWords.slice(i, j).join(' ');
                        if (phrase.length > 5 && phrase.split(' ').length > 1) { // Multi-word phrases, reasonable length
                            allPotentialLinkPhrases.add(phrase);
                            phraseToSlugMap.set(phrase, otherPost.slug);
                        }
                    }
                }
            }
        });

        // Convert set to array and sort by length (longest first) to prioritize more specific matches
        const sortedPotentialLinkPhrases = Array.from(allPotentialLinkPhrases).sort((a, b) => b.length - a.length);

        for (const phrase of sortedPotentialLinkPhrases) {
            if (linksInjected >= MAX_LINKS_PER_POST) break;
            const targetSlug = phraseToSlugMap.get(phrase);
            if (!targetSlug || linkedSlugs.has(targetSlug)) continue; // Already linked to this article or no target

            // Simplified regex to avoid lookbehind issues, relying more on post-match checks
            // Use the new escapeRegExp function
            const safePhrase = escapeRegExp(phrase);
            const regex = new RegExp(`\b(${safePhrase})\b`, 'gi'); // Match whole word boundaries
            
            let tempContent = '';
            let lastIndex = 0;
            let match;

            // Use an iterable regex execution to prevent modifying the string in place which can
            // mess up regex.lastIndex for subsequent matches in the same iteration.
            // Instead, rebuild the string piece by piece.
            const newContentArray = [];
            let currentSearchContent = newContent; // Work on a copy of the content for matching

            // Ensure that `regex` is reset for each phrase search in the content
            regex.lastIndex = 0;

            while ((match = regex.exec(currentSearchContent)) !== null && linksInjected < MAX_LINKS_PER_POST) {
                const matchedText = match[1];
                const index = match.index;
                const endIndex = regex.lastIndex;

                const precedingContext = currentSearchContent.substring(0, index);
                const followingContext = currentSearchContent.substring(endIndex);

                // --- Robust checks to avoid injecting links inside existing HTML tags or attributes ---
                // 1. Check if the match is within an existing <a> tag
                const isInExistingLink = /<a\s[^>]*>.*?<\/a>/i.test(precedingContext + matchedText + followingContext.substring(0, 50)); // Check a small window

                // 2. Check if the match is within an HTML attribute (e.g., href="...", alt="...")
                // This is a heuristic: look for an unclosed attribute definition before the match, or an open attribute after.
                const isInAttribute = /<[^>]*?\s(\w+)=["'][^"']*?$/i.test(precedingContext) || /^\s*["']/.test(followingContext);

                // 3. Check if the match is part of a <button data-toolid="...">
                const isInToolButton = /<button[^>]*?data-toolid=["'][^"']*?$/i.test(precedingContext);


                if (!isInExistingLink && !isInAttribute && !isInToolButton) {
                    // Make sure it's not inside another tag or attribute value that the broader lookahead/lookbehind failed to catch
                    // This is a simplified check for being inside *any* tag
                    const lastOpenTagIndex = precedingContext.lastIndexOf('<');
                    const lastCloseTagIndex = precedingContext.lastIndexOf('>');
                    const isInTagBody = lastOpenTagIndex > lastCloseTagIndex;


                    if (!isInTagBody) {
                        const replacement = `<a href="/${targetSlug}" class="font-bold text-brand-pink hover:underline">${matchedText}</a>`;
                        newContentArray.push(currentSearchContent.substring(lastIndex, index));
                        newContentArray.push(replacement);
                        lastIndex = endIndex;
                        linksInjected++;
                        linkedSlugs.add(targetSlug);
                        // No need to adjust regex.lastIndex manually if we are rebuilding the string
                        // and restarting the search on the modified string later (implicitly by next iteration)
                    }
                }
            }
            newContent = newContentArray.join('') + currentSearchContent.substring(lastIndex);
        }
        updatedPosts.push({ ...currentPost, content: newContent });
    });
    return updatedPosts;
};


// Main execution
const main = () => {
    console.log('Starting internal link injection...');
    try {
        const blogPosts = readBlogPosts();
        console.log(`Read ${blogPosts.length} blog posts.`);

        const keywordIndex = buildKeywordIndex(blogPosts);
        console.log(`Built keyword index with ${keywordIndex.size} unique keywords.`);
        
        const updatedBlogPosts = injectInternalLinks(blogPosts, keywordIndex);
        writeBlogPosts(updatedBlogPosts);
        console.log('Successfully injected internal links and updated blogPosts.ts');
    } catch (error) {
        console.error('Error during internal link injection:', error);
        process.exit(1);
    }
};

main();