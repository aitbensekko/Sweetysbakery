import React from 'react';
import { InstagramIcon, FacebookIcon, PinterestIcon, RedditIcon } from './Icons';
import { NewsletterSignup } from './NewsletterSignup';
import type { ToolId } from './utils/slugs';
import { toolIdToSlug } from './utils/slugs';

interface FooterProps {
    setActiveTool: (toolId: ToolId) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTool }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, toolId: ToolId) => {
        e.preventDefault();
        setActiveTool(toolId);
    }

    return (
        <footer className="text-center mt-16 border-t border-brand-border pt-10 text-sm text-brand-text-body/70">
            <div className="max-w-4xl mx-auto mb-16 px-4">
                <NewsletterSignup />
            </div>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-6">
                <a href={toolIdToSlug('privacy-policy')} onClick={(e) => handleNavClick(e, 'privacy-policy')} className="hover:text-brand-pink transition-colors">Privacy Policy</a>
                <a href={toolIdToSlug('terms-of-use')} onClick={(e) => handleNavClick(e, 'terms-of-use')} className="hover:text-brand-pink transition-colors">Terms of Use</a>
                <a href={toolIdToSlug('contact-us')} onClick={(e) => handleNavClick(e, 'contact-us')} className="hover:text-brand-pink transition-colors">Contact Us</a>
                <a href={toolIdToSlug('disclaimer')} onClick={(e) => handleNavClick(e, 'disclaimer')} className="hover:text-brand-pink transition-colors">Disclaimer</a>
                <a href={toolIdToSlug('about')} onClick={(e) => handleNavClick(e, 'about')} className="hover:text-brand-pink transition-colors">About Us</a>
                <a href={toolIdToSlug('baking-sources')} onClick={(e) => handleNavClick(e, 'baking-sources')} className="hover:text-brand-pink transition-colors">Sources</a>
            </div>
            <div className="flex justify-center gap-6 my-8">
                <a href="https://www.instagram.com/sweetys.bakery/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon className="w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity" /></a>
                <a href="https://www.pinterest.com/Sweetysbakerys/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><PinterestIcon className="w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity" /></a>
                <a href="https://web.facebook.com/SaPatissl/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FacebookIcon className="w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity" /></a>
                <a href="https://www.reddit.com/r/Baking/" target="_blank" rel="noopener noreferrer" aria-label="Reddit"><RedditIcon className="w-6 h-6 text-brand-text-body/50 hover:opacity-75 transition-opacity" /></a>
            </div>
            <address className="flex justify-center flex-wrap gap-x-8 gap-y-2 mb-6 text-xs text-brand-text-body/60 not-italic">
                <span className="flex items-center gap-1">📍 Marrakech, Morocco 40000</span>
                <a href="mailto:hello@sweetysbakery.com" className="hover:text-brand-pink transition-colors">hello@sweetysbakery.com</a>
            </address>
            <p>&copy; {new Date().getFullYear()} Sweety's Bakery Tools. All rights reserved.</p>
        </footer>
    );
};