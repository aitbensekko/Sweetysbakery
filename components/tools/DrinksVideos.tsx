import React, { useState, useMemo } from 'react';
import type { ToolId } from '../utils/slugs';
import { Footer } from '../Footer';
import { PlayIcon, YoutubeIcon, CocktailIcon, SearchIcon } from '../Icons';

interface DrinksVideosProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const videos = [
    { title: '10 Classic Cocktails for Beginners', id: '7gqN96qD4B0', creator: 'Steve the Bartender' },
    { title: '10 Easy Cocktails to Make at Home', id: 'BC6uOm9PtxY', creator: 'The Educated Barfly' },
    { title: 'Top 10 Most Popular Cocktails In The World', id: 'gPiGDycfOH0', creator: 'Cocktail Chemistry' },
    { title: '5 Easy Cocktails to Make in 5 Minutes', id: 'c6GV_vRlIIA', creator: 'Tipsy Bartender' },
    { title: 'The Only 3 Coffee Drinks You Need To Know', id: 'vXbFEIrTpg8', creator: 'Joshua Weissman' },
    { title: 'How to Make the Perfect Iced Coffee (3 Ways)', id: 'IRkM8jsG-hY', creator: 'Pro Home Cooks' },
    { title: 'How To Make Boba And Bubble Tea At Home', id: 'n0vX2l77ymM', creator: 'Emmymade' },
];

const VideoCard: React.FC<{ title: string, id: string, creator: string }> = ({ title, id, creator }) => {
    const [isClicked, setIsClicked] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    // SEO Improvement: Add VideoObject structured data
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": title,
        "description": `A video tutorial by ${creator} on how to make ${title}.`,
        "thumbnailUrl": thumbnailUrl,
        "uploadDate": "2023-01-01T08:00:00+08:00", // Using a generic date. Consider making this dynamic if you have the data.
        "duration": "PT5M", // Placeholder duration. PTxM stands for "period time x minutes".
        "embedUrl": videoUrl,
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsClicked(true);
    };

    return (
        <div className="bg-white rounded-xl border border-brand-border overflow-hidden flex flex-col shadow-sm">
            {/* SEO: Inject JSON-LD structured data into the head of the document for each video */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

            <div className="aspect-video relative bg-black">
                {isClicked ? (
                    <iframe
                        className="w-full h-full"
                        src={videoUrl}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                ) : (
                    <button onClick={handleClick} className="block w-full h-full group">
                        <img src={thumbnailUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
                            <div className="w-16 h-16 bg-brand-pink/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-pink group-hover:scale-110">
                                <PlayIcon className="w-8 h-8 text-white ml-1" />
                            </div>
                        </div>
                    </button>
                )}
            </div>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-bold font-serif text-lg text-brand-text-title">{title}</h3>
                <p className="text-sm text-brand-text-body/80 mt-1 mb-4">by {creator}</p>
                <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer" className="mt-auto flex items-center gap-2 text-sm font-bold text-brand-pink hover:underline">
                    Watch on YouTube <YoutubeIcon className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};

export const DrinksVideos: React.FC<DrinksVideosProps> = ({ setActiveTool, breadcrumbs }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredVideos = useMemo(() => {
        if (!searchTerm) return videos;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return videos.filter(vid =>
            vid.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            vid.creator.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <header className="mb-10 mt-4 text-center mx-auto">
                <div className="inline-block bg-brand-pink text-white p-3 rounded-full mb-4 shadow-md">
                    <CocktailIcon className="w-8 h-8" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Best Drink Recipe Videos</h1>
                <p className="mt-4 text-lg text-brand-text-body/80 max-w-2xl mx-auto">
                    A curated collection of video tutorials for classic cocktails, coffee drinks, and refreshing beverages.
                </p>
            </header>

            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search drink recipes (e.g., 'coffee', 'cocktails')..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200"
                        aria-label="Search drink recipes"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filteredVideos.map(vid => <VideoCard key={vid.id} {...vid} />)}
            </div>{filteredVideos.length === 0 && searchTerm && (
                <div className="text-center py-16 text-brand-text-body/70"><p className="font-bold text-lg text-brand-text-title">No videos found for "{searchTerm}"</p><p>Try a different search term.</p></div>
            )}

            <div className="mt-12 bg-white p-8 rounded-2xl border border-brand-border shadow-sm max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-4">Expand Your Beverage Menu</h2>
                <div className="prose max-w-none text-brand-text-body/90 text-center mx-auto">
                    <p>
                        Whether you're hosting a party, perfecting your morning coffee, or just want to try something new, these videos will guide you. Learn the basics of mixology or master the art of the perfect latte.
                    </p>
                </div>
            </div>


        </div>
    );
};
