import json
import re
import sys
import os

# Define the base project directory to resolve paths correctly
project_base_dir = r'C:\Users\Sara\Desktop\TEST\TEST3' # Current working directory

blog_posts_ts_path = os.path.join(project_base_dir, 'data', 'blogPosts.ts')
blog_posts_json_path = os.path.join(project_base_dir, 'data', 'blogPosts.json')

file_content = open(blog_posts_ts_path, 'r', encoding='utf-8').read()

# Extract the interface definition
interface_match = re.search(r'(export interface BlogPost \{.*?\})', file_content, re.DOTALL)
interface_definition = interface_match.group(1) if interface_match else ''

# Extract the blogPosts array content
match = re.search(r'export const blogPosts: BlogPost\[\] = \[(.*?)\];', file_content, re.DOTALL)
if not match:
    raise Exception('Could not find blogPosts array in blogPosts.ts')

blog_posts_array_content = match.group(1)

# Split content into individual post objects as strings
post_strings = []
balance = 0
current_object_lines = []

# This regex helps to correctly split based on object boundaries, respecting nested structures
# It looks for a '}' that is followed by a comma, but not if it's within quotes or comments (simplified for this context)
# This is still a heuristic, but better than simple splitlines() and hoping for the best
object_matches = re.finditer(r'(\{.*?\})(?=\s*,?\s*\{|\s*\])', blog_posts_array_content, re.DOTALL)

last_end = 0
for m in object_matches:
    obj_str = m.group(1)
    # Remove leading ',\n' if present from previous match
    # Find the start of the actual object string
    
    # Simple heuristic to find the start of the object
    start_curly = obj_str.find('{')
    if start_curly != -1:
        obj_str = obj_str[start_curly:]

    post_strings.append(obj_str)

# Fallback for splitting if regex is too complex
# Manual approach to split while tracking braces
temp_buffer = []
brace_level = 0
for line in blog_posts_array_content.splitlines():
    stripped_line = line.strip()

    if not stripped_line:
        continue

    # Simple comment removal
    if stripped_line.startswith('//') or stripped_line.startswith('/*'):
        continue

    brace_level += stripped_line.count('{')
    brace_level -= stripped_line.count('}')
    temp_buffer.append(stripped_line)

    if brace_level == 0 and stripped_line.endswith('}'):
        full_object_str = '\n'.join(temp_buffer)
        post_strings.append(full_object_str.strip().rstrip(','))
        temp_buffer = []

# If there's content left in temp_buffer, it's either part of the last object or malformed
if temp_buffer:
    final_obj_str = '\n'.join(temp_buffer).strip().rstrip(',')
    if final_obj_str: # Add if not empty
        post_strings.append(final_obj_str)

# Deduplicate in case both splitting methods yield similar results
# Or just use the more reliable one, let's stick to the manual brace tracking for now.
# The `object_matches` regex is good but needs careful handling of overlapping matches or non-standard formatting.

# Let's refine the post_strings generation with a focus on robustness
# A more reliable way is to find each object and then process its content
# This requires a more complex state machine or a proper parser.
# For this script, I'll go with a simpler split based on structure.

# Let's try to parse the content by iterating through each potential object
# This approach tries to find the start and end of each BlogPost object more reliably.

# Reset post_strings and use a more iterative approach
post_strings = []
current_obj_str = ""
open_braces = 0

for line in blog_posts_array_content.splitlines():
    stripped_line = line.strip()

    if not stripped_line:
        continue

    # Simple comment removal
    if stripped_line.startswith('//') or '/*' in stripped_line:
        if '/*' in stripped_line and '*/' not in stripped_line: # multi-line comment start
            while '*/' not in line: # consume lines until comment ends
                line = next(blog_posts_array_content_iter, '').strip()
            continue
        continue


    current_obj_str += stripped_line + '\n'

    open_braces += stripped_line.count('{')
    open_braces -= stripped_line.count('}')

    if open_braces == 0 and '}' in stripped_line: # End of an object
        post_strings.append(current_obj_str.strip().rstrip(','))
        current_obj_str = ""

# Final cleanup of post_strings (remove any empty strings)
post_strings = [s for s in post_strings if s]

json_posts = []
for ps in post_strings:
    
    # Replace TS property names with JSON quoted property names
    ps = re.sub(r'(\w+):', r'"\1":', ps)
    
    # Convert single-quoted string values to double-quoted strings
    # This might be tricky with `content` field.
    ps = re.sub(r'\'([^']*)\'', r'"\1"', ps) # General single quote replacement

    # Handle content: `...` template literals specifically
    def replace_content_template(m):
        content = m.group(1)
        # Escape double quotes and newlines for JSON
        escaped_content = content.replace('\\', '\\\\').replace('"', '\"').replace('\n', '\\n').replace('\r', '')
        return f'"content": "{escaped_content}"'

    # The regex needs to handle the fact that 'content' might already be double-quoted from previous step
    # or still be in backticks.
    ps = re.sub(r'"content":\s*`([^`]*)`', replace_content_template, ps, flags=re.DOTALL)
    ps = re.sub(r'"content":\s*"([^"]*)"', replace_content_template, ps, flags=re.DOTALL) # In case it's already double quoted

    # Remove any lingering commas before closing braces/brackets
    ps = re.sub(r',\s*\}', '}', ps)
    ps = re.sub(r',\s*\]', ']', ps)
    
    try:
        json_posts.append(json.loads(ps))
    except json.JSONDecodeError as e:
        print(f'Failed to parse JSON for post: {ps}', file=sys.stderr)
        raise e

with open(blog_posts_json_path, 'w', encoding='utf-8') as f:
    json.dump(json_posts, f, indent=4, ensure_ascii=False)

print(f'Successfully extracted blog posts to {blog_posts_json_path}')

# Modify the original blogPosts.ts file
new_ts_content = f'''{interface_definition}

import blogPostsData from "./blogPosts.json";

export const blogPosts = blogPostsData as BlogPost[];

export const findPostBySlug = (slug: string): BlogPost | undefined => {{
    return blogPosts.find(post => post.slug === slug);
}};
'''
with open(blog_posts_ts_path, 'w', encoding='utf-8') as f:
    f.write(new_ts_content)

print(f'Successfully updated {blog_posts_ts_path} to import from JSON.')
