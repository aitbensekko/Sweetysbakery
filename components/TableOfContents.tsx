import React from 'react';
import type { Heading } from './utils/toc';

interface TableOfContentsProps {
    headings: Heading[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
    if (headings.length === 0) {
        return null;
    }

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // Prevent hash from appearing in URL
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
    };

    return (
        <ul className="space-y-3 text-sm">
            {headings.map((heading) => (
                <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}>
                    <a
                        href={`#${heading.id}`}
                        onClick={(e) => handleClick(e, heading.id)}
                        className="block text-brand-text-body/80 hover:text-brand-pink hover:font-medium transition-all duration-200 py-1 border-l-2 border-transparent hover:border-brand-pink pl-3"
                    >
                        {heading.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};
