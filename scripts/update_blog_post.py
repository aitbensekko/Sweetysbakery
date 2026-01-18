import re
import sys
import os

def update_blog_post_content(file_path, slug, content_file_path):
    """
    Updates the content of a specific blog post in the TSX file,
    reading the new content from a separate file.

    Args:
        file_path (str): The path to the blogPosts.tsx file.
        slug (str): The slug of the post to update.
        content_file_path (str): The path to the file containing the new HTML content.
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            original_file_content = f.read()

        with open(content_file_path, 'r', encoding='utf-8') as f:
            new_content = f.read()

        # Safely escape backticks and dollar signs in the new content
        # The content in TSX template literals needs these escaped.
        escaped_new_content = new_content.replace('`', r'`').replace('$', r'$')

        # Pattern to find the entire blog post entry.
        # It matches an object that starts with '{' (non-greedy),
        # contains the specific slug line,
        # then matches any characters (including newlines due to re.DOTALL) non-greedily,
        # until it finds 'content: `...`'
        # The capture groups ensure we preserve the parts before and after the content string.
        post_regex = re.compile(
            r"({\s*id:\s*\d+,\s*slug:\s*'" + re.escape(slug) + r"',[\s\S]*?content:\s*)`[\s\S]*?`(\s*},?\s*)", 
            re.MULTILINE | re.DOTALL
        )

        match = post_regex.search(original_file_content)

        if match:
            # Construct the replacement string using the captured groups and the new content
            replacement_string = f"{match.group(1)}\`{escaped_new_content}\`{match.group(2)}"
            
            # Replace the entire matched block with the new block
            updated_file_content = original_file_content[:match.start()] + replacement_string + original_file_content[match.end():]

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(updated_file_content)
            print(f"Successfully updated blog post with slug '{slug}'.")
        else:
            print(f"Error: Blog post with slug '{slug}' not found.")
            sys.exit(1)

    except Exception as e:
        print(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == '__main__':
    if len(sys.argv) != 4:
        print("Usage: py update_blog_post.py <file_path> <slug> <content_file_path>")
        sys.exit(1)
    
    file_path_arg = sys.argv[1]
    slug_arg = sys.argv[2]
    content_file_path_arg = sys.argv[3]
    
    update_blog_post_content(file_path_arg, slug_arg, content_file_path_arg)
