
import { slugify } from './slugify';

export interface Heading {
    id: string;
    text: string;
    level: number;
}

export const generateToc = (htmlContent: string): { headings: Heading[], contentWithIds: string } => {
    const headings: Heading[] = [];
    const contentWithIds = htmlContent.replace(/<h([2-3])[^>]*>(.*?)<\/h\1>/gi, (match, levelStr, innerText) => {
        const level = parseInt(levelStr, 10);
        const text = innerText.replace(/<[^>]+>/g, ''); // Strip any inner HTML tags from the heading
        if (!text) return match;

        let id = slugify(text);
        let count = 1;
        // Ensure the ID is unique
        while (headings.some(h => h.id === id)) {
            id = `${slugify(text)}-${count}`;
            count++;
        }

        headings.push({ id, text, level });
        return `<h${level} id="${id}">${innerText}</h${level}>`;
    });

    return { headings, contentWithIds };
};
