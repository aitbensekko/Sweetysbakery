import React from 'react';
import { FacebookIcon, InstagramIcon, PinterestIcon, TikTokIcon, YoutubeIcon } from './Icons';

interface AuthorBioProps {
    handleNavigate: (path: string) => void;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ handleNavigate }) => {
    return (
        <div className="p-8 bg-brand-pink-light/30 rounded-xl flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
                <img
                    src="/images/sarah-profile.jpg"
                    alt="Sarah Ait Dahan - Sweety's Bakery"
                    className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-white"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
            </div>
            <div className="text-center md:text-left flex-1">
                <h3 className="font-serif text-3xl font-bold text-brand-text-title mb-3">Sarah Aitdahan</h3>
                <p className="text-brand-text-body/90 mb-4 leading-relaxed">
                    Sarah Aitdahan is the founder of Sweety's Bakery and the creator of this website. A lifelong baker with a passion for perfecting the classics, she believes that baking should be accessible and joyful for everyone. This website is her way of giving back to the incredible baking community by providing free tools, resources, and recipes.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                    <button
                        onClick={() => handleNavigate('/tools/baking-blog')}
                        className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm tracking-wide hover:bg-gray-800 transition-colors flex items-center gap-2 group"
                    >
                        READ MORE
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>

                    <div className="flex items-center gap-4">
                        <a href="https://web.facebook.com/SaPatissl/" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors" aria-label="Facebook">
                            <FacebookIcon className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/sweetys.bakery/" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors" aria-label="Instagram">
                            <InstagramIcon className="w-5 h-5" />
                        </a>
                        <a href="https://www.pinterest.com/Sweetysbakerys/" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors" aria-label="Pinterest">
                            <PinterestIcon className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors" aria-label="TikTok">
                            <TikTokIcon className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-brand-pink text-white rounded-full hover:bg-brand-pink-dark transition-colors" aria-label="YouTube">
                            <YoutubeIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
