import React from 'react';
import { ChevronRightIcon } from './Icons';

interface ViewAllButtonProps {
    href: string;
    onClick?: (e: React.MouseEvent) => void;
    label?: string;
    className?: string;
}

export const ViewAllButton: React.FC<ViewAllButtonProps> = ({
    href,
    onClick,
    label = "View All",
    className = ""
}) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`inline-flex items-center gap-1.5 bg-brand-pink-light/30 text-brand-pink text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full hover:bg-brand-pink hover:text-white transition-all duration-300 ${className}`}
        >
            {label}
            <ChevronRightIcon className="w-3 h-3 sm:w-4 sm:h-4 stroke-[3]" />
        </a>
    );
};
