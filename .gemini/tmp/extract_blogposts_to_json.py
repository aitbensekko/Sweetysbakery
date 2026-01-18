import json
import re
import sys
import os

# Define the base project directory to resolve paths correctly
# project_base_dir = r'C:\Users\Sara\Desktop\TEST\TEST3' # Current working directory
# Using os.getcwd() to make it more flexible
project_base_dir = os.getcwd()

blog_posts_ts_path = os.path.join(project_base_dir, 'data', 'blogPosts.ts')
temp_blog_posts_json_path = os.path.join(os.environ.get('GEMINI_TEMP_DIR', project_base_dir), 'blogPosts.json')


def extract_ts_to_json(ts_file_path, json_file_path):
    file_content = open(ts_file_path, 'r', encoding='utf-8').read()

    # Extract the blogPosts array content
    match = re.search(r'export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];', file_content)
    if not match:
        raise Exception('Could not find blogPosts array in blogPosts.ts')

    blog_posts_array_content = match.group(1)

    # Process each blog post string to make it JSON compliant
    processed_posts = []
    
    # Heuristic split by objects, trying to be careful with nested structures
    # This is a robust way to split based on top-level object boundaries
    level = 0
    start = 0
    for i, char in enumerate(blog_posts_array_content):
        if char == '{':
            level += 1
        elif char == '}':
            level -= 1
            if level == 0:
                # Found a top-level object
                obj_str = blog_posts_array_content[start : i+1]
                processed_posts.append(obj_str.strip())
                start = i + 1
                # Skip comma and whitespace to next object
                while start < len(blog_posts_array_content) and blog_posts_array_content[start] in [',', ' ', '\n', '\r', '\t']:
                    start += 1

    json_compatible_posts = []
    for ps in processed_posts:
        # Step 1: Replace TS property names with JSON quoted property names
        ps = re.sub(r'(\w+):', r'"\1":', ps)

        # Step 2: Handle string literals - convert single quotes and backticks to double quotes
        # This regex attempts to find string values and replace their delimiters
        # It's a tricky one to get right for all cases
        def replace_quotes_and_escape_content(m):
            # m.group(1) is the opening quote (', ", or `)
            # m.group(2) is the string content
            quote_type = m.group(1)
            content = m.group(2)
            
            # Escape double quotes and backslashes within the content for JSON
            escaped_content = content.replace('\\', '\\\\').replace('"', '\"').replace('\n', '\\n').replace('\r', '')
            
            # Special handling for already escaped characters that JSON.stringify might double-escape
            # Not strictly necessary if JSON.stringify is the final step, but good for intermediate
            # escaped_content = escaped_content.replace('\`', '`') # Unescape escaped backticks for JSON if they were meant to be literal

            return f'"{escaped_content}"'

        # This regex targets string values and content template literals
        ps = re.sub(r"(['`])(.*?)\1", replace_quotes_and_escape_content, ps, flags=re.DOTALL)
        # Handle existing double quotes, in case some were already double-quoted
        ps = re.sub(r'"(.*?)"', replace_quotes_and_escape_content, ps, flags=re.DOTALL)


        # Remove any trailing commas that might break JSON parsing
        ps = re.sub(r',\s*\}', '}', ps)
        ps = re.sub(r',\s*\]', ']', ps)
        
        try:
            json_posts_obj = json.loads(ps)
            json_compatible_posts.append(json_posts_obj)
        except json.JSONDecodeError as e:
            print(f"Error parsing post string to JSON: {e}\nProblematic string:\n{ps}", file=sys.stderr)
            raise

    with open(json_file_path, 'w', encoding='utf-8') as f:
        json.dump(json_compatible_posts, f, indent=4, ensure_ascii=False)
    
    print(f"Successfully extracted and converted blog posts to JSON: {json_file_path}")

# Main execution for extraction
if __name__ == "__main__":
    try:
        extract_ts_to_json(blog_posts_ts_path, temp_blog_posts_json_path)
    except Exception as e:
        print(f"An error occurred during extraction: {e}", file=sys.stderr)
        sys.exit(1)
