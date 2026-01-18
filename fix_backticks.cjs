const fs = require('fs');
const path = 'data/blogPosts.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace </ul>`< with </ul><
// We need to be careful with escaping backtick in the regex
// The backtick is a special character in JS template literals too if we used them, but here we use single quotes for the string.
// Regex: /<\/ul>`</g
// Replacement: '</ul><'

const newContent = content.replace(/<\/ul>`</g, '</ul><');

// Also check for other patterns if any.
// The previous error showed </ul>` followed by space or text?
// "</ul>` caramel confection"
// So we should probably replace </ul>` with </ul> globally, BUT we must preserve the final one.
// The final one is likely `content: `...</ul>`
// So it is followed by comma or newline.
// Stray ones are followed by something else.

// Let's try a safer approach:
// Replace `</ul>` ` followed by anything that is NOT (comma, newline, whitespace followed by comma/brace)
// But regex lookahead might be complex.

// Simpler: The stray ones seem to be inside the content string.
// The content string starts with `content: \``
// We can iterate through the file line by line? No, it's multiline strings.

// Let's stick to the specific pattern `</ul>`<` first, as that covers the build errors we saw.
// And also `</ul>` ` followed by text.
// Maybe just replace `</ul>` ` with `</ul>` everywhere, and then check if we broke the valid endings.
// Valid endings: `content: `...</ul>`
// If we replace `</ul>` ` with `</ul>`, then `content: `...</ul>` becomes `content: `...</ul>` (missing backtick).
// So we would break the valid ones.

// However, looking at the file structure, most posts seem to end with `</p>` or `</ul>`.
// If we replace `</ul>` ` with `</ul>`, we break the ones where `</ul>` is the end of the content.
// But we can restore them!
// If a line ends with `content: ...</ul>,` (after replacement), it's wrong. It should be `content: ...</ul>`,`.
// Wait, the `content` field usually spans multiple lines.
// The closing backtick is usually at the end of the content.

// Let's try replacing `</ul>`<` with `</ul><`. This handles the nested list case.
// And `</ul>` ` followed by a word character?
// The "caramel confection" case: `</ul>` caramel`
// Regex: /<\/ul>`(?=[^,}\s])/g  <-- lookahead: followed by something that is not comma, closing brace, or whitespace.
// But whitespace includes newlines.
// If the content ends with `</ul>`, the next char is likely `,` or `}` or newline.
// So `[^,}\s]` might work.

const fixedContent = content.replace(/<\/ul>`(?=[^,}\s])/g, '</ul>');
// Also handle the case where it is followed by `<` which might be caught by above if `<` is not whitespace.
// `<` is not comma, brace or whitespace. So it should be caught.

fs.writeFileSync(path, fixedContent);
console.log('Fixed stray backticks.');
