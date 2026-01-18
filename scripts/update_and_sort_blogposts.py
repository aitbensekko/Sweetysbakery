
import json
from datetime import datetime
import re

def parse_blog_posts_tsx(file_content):
    # Extract the blogPosts array string using regex
    match = re.search(r'export const blogPosts: BlogPost\[\] = (\\\[.*?\\\\]);', file_content, re.DOTALL)
    if not match:
        raise ValueError("Could not find blogPosts array in the file.")
    
    blog_posts_str = match.group(1)
    
    # Replace content template literals with a placeholder for safe JSON parsing
    # This is a bit tricky. We need to preserve the content but make it parseable as JSON.
    # We'll temporarily replace HTML content with a unique placeholder and restore it later.
    content_placeholders = []
    
    def replace_content(m):
        content_html = m.group(1)
        placeholder = f"__CONTENT_PLACEHOLDER_{len(content_placeholders)}__"
        content_placeholders.append(content_html)
        return f'"content": "{placeholder}"'

    # The regex needs to be careful to match the content field
    blog_posts_str = re.sub(r'"content": `(.*?)`', replace_content, blog_posts_str, flags=re.DOTALL)
    blog_posts_str = re.sub(r'"content": "(.*?)"', replace_content, blog_posts_str, flags=re.DOTALL)


    # Convert the string to valid JSON by replacing single quotes with double quotes
    # and handling true/false/null. This is a very basic conversion and might break on complex JS.
    json_compatible_str = blog_posts_str.replace("'", '"').replace('`', '').replace('\\n', '\n').replace('\\r', '\r') # Handle template literals
    # Manual fixes for boolean/null if they existed (not in this specific data)
    json_compatible_str = re.sub(r'(\w+):', r'"\1":', json_compatible_str) # Add quotes to keys

    # Now, parse as JSON
    # This step will fail if the string still contains unquoted keys or other JS syntax not valid in JSON
    # For a simple structure like BlogPost[], ast.literal_eval is safer but might still require cleanup
    
    # Using a safer approach with regex to split and parse each object individually
    # This is a simplification; a full JS parser would be ideal but is outside this env.
    
    # Fallback to a simpler, less error-prone way: manually constructing JSON strings for each object
    
    # Simplified approach: rely on the assumption that the structure is consistently JSON-like after initial cleanup
    try:
        blog_posts_list = json.loads(json_compatible_str)
    except json.JSONDecodeError as e:
        print(f"JSON Decode Error: {e}")
        print("Attempting to fix and retry parsing...")
        # Attempt to fix common issues for json.loads:
        # 1. Ensure string literals are double-quoted, not single-quoted.
        # 2. Ensure keys are double-quoted.
        # 3. Handle unescaped characters within content if not already handled.
        
        # A more robust fix would involve a proper JavaScript parser, but given the constraints,
        # we'll try to use regex more aggressively to clean.
        
        # This part is highly dependent on the exact structure. For now, assume previous regex were sufficient.
        raise # Re-raise if initial fixes weren't enough.

    # Restore content placeholders
    for i, post in enumerate(blog_posts_list):
        if isinstance(post, dict) and 'content' in post and post['content'].startswith('__CONTENT_PLACEHOLDER__'):
            # The placeholder format needs to match what replace_content outputs
            idx = int(post['content'].replace('__CONTENT_PLACEHOLDER_', '').replace('__', ''))
            post['content'] = content_placeholders[idx]


    return blog_posts_list, content_placeholders # Return placeholders for re-insertion

def format_date_for_google(date_str):
    # Parses 'Month Day, Year' and returns 'YYYY-MM-DD'
    try:
        # Handle cases like 'August 21, 2022'
        dt_object = datetime.strptime(date_str, '%B %d, %Y')
    except ValueError:
        # Handle cases like 'March 22, 2024' (if no day provided, this might need adjustment)
        try:
            dt_object = datetime.strptime(date_str, '%B %d, %Y')
        except ValueError:
            return date_str # Return original if cannot parse
    return dt_object.strftime('%Y-%m-%d')


def modify_and_sort_blog_posts(file_content, target_year=2025):
    blog_posts_list, content_placeholders = parse_blog_posts_tsx(file_content)

    updated_posts = []
    current_content_idx = 0

    for post in blog_posts_list:
        # Restore content from placeholders
        if post['content'] and post['content'].startswith('__CONTENT_PLACEHOLDER_'):
            idx = int(post['content'].replace('__CONTENT_PLACEHOLDER_', '').replace('__', ''))
            post['content'] = content_placeholders[idx]
        
        # Date modification logic
        original_date_str = post['date']
        try:
            # Handle mixed date formats, try to parse to datetime object
            # First, try 'Month Day, Year'
            try:
                dt_object = datetime.strptime(original_date_str, '%B %d, %Y')
            except ValueError:
                # If that fails, try a different common format or just use current
                dt_object = None # Indicate it couldn't be parsed easily
                
            if dt_object and dt_object.year == target_year:
                # Change month to November, keep day
                day = dt_object.day
                post['date'] = datetime(target_year, 11, day).strftime('%B %d, %Y')
            elif post['id'] not in [1, 2]: # Only modify if not the special articles
                 # If it's not ID 1 or 2 and not already in November 2025
                 # Default to November for other generated articles if their year is 2025
                if dt_object and dt_object.year == target_year and dt_object.month != 11:
                    day = dt_object.day
                    post['date'] = datetime(target_year, 11, day).strftime('%B %d, %Y')
                elif not dt_object: # If date couldn't be parsed, use a default November 2025 date
                    # For newly generated articles that had 'October XX, 2025' or similar,
                    # we need to be careful. The earlier generated content already has 'November'.
                    # We only want to ensure 2025 dates are November, if they were October.
                    pass # Already done in previous steps implicitly by generation
        except Exception as e:
            # Log error but don't stop processing, keep original date if error
            print(f"Error parsing date '{original_date_str}' for post {post['id']}: {e}")
            pass # Keep original date if parsing fails or logic doesn't apply

        updated_posts.append(post)

    # Sort the posts by date (most recent first)
    def get_sort_key(post):
        try:
            return datetime.strptime(post['date'], '%B %d, %Y')
        except ValueError:
            # For unparseable dates (like 'August 21, 2022' for ID 1), assign a very old date
            # so they sort to the end if not explicitly handled
            if post['id'] == 1:
                return datetime(2022, 8, 21)
            elif post['id'] == 2:
                return datetime(2024, 3, 22)
            return datetime(1900, 1, 1) # Default to very old date for unknown format
            

    updated_posts.sort(key=get_sort_key, reverse=True) # Sort descending

    # Reconstruct the TSX file content
    reconstructed_posts_str = ""
    for post in updated_posts:
        # Use template literals for content strings
        content_html_escaped = post['content'].replace('\\', '\\\\').replace('`', '\`').replace('${', '$\{') # Escape backticks and ${ for template literals
        reconstructed_posts_str += f"""
    {{
        id: {post['id']},
        slug: '{post['slug']}',
        title: '{post['title'].replace("'", "\'")}',
        excerpt: '{post['excerpt'].replace("'", "\'")}',
        imageUrl: '{post['imageUrl']}',
        category: '{post['category'].replace("'", "\'")}',
        author: '{post['author'].replace("'", "\'")}',
        date: '{post['date']}',
        readTime: '{post['readTime']}',
        content: `{content_html_escaped}`,
    }},
"""
    # Remove the last comma and add closing bracket for the array
    reconstructed_posts_str = reconstructed_posts_str.rstrip(',\n') + '\n]'

    # Combine with interface and findPostBySlug function
    full_content = f"""export interface BlogPost {{
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
}}

export const blogPosts: BlogPost[] = {reconstructed_posts_str};

export const findPostBySlug = (slug: string): BlogPost | undefined => {{
    return blogPosts.find(post => post.slug === slug);
}};
"""
    return full_content

if __name__ == '__main__':
    file_path = "data/blogPosts.tsx" # Assuming this is run from root

    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            tsx_content = f.read()
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
        sys.exit(1)
    except Exception as e:
        print(f"Error reading file: {e}")
        sys.exit(1)

    updated_tsx_content = modify_and_sort_blog_posts(tsx_content)

    try:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_tsx_content)
        print(f"Successfully updated and sorted '{file_path}' with November 2025 dates.")
    except Exception as e:
        print(f"Error writing to file: {e}")
        sys.exit(1)
