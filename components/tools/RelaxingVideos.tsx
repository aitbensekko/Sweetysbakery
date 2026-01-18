import React, { useState, useMemo } from 'react';
import type { ToolId } from '../utils/slugs';
import { Footer } from '../Footer';
import { PlayIcon, YoutubeIcon, MusicIcon, SearchIcon } from '../Icons';

interface RelaxingVideosProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const videos = [
    { title: 'Japanese Bakery Cafe Ambience', id: 'SWf_60VTHFU', creator: 'Cafe Music BGM channel' },
    { title: 'Korean Bakery Cafe', id: '4f9TzWImz90', creator: 'N\'s Kitchen' },
    { title: 'Making French Crème Brûlée', id: 'g7jJrJULNPc', creator: 'Food52' },
    { title: 'Classic French Croissants, Made Simple', id: 'PSCFIZa4b3I', creator: 'The Plain Kitchen' },
    { title: 'How to Make The Best New York Cheesecake', id: 'n2EUaJnFF-M', creator: 'Bigger Bolder Baking' },
    { title: 'Making Perfect Milk Bread', id: 'Vh30tZeWtyk', creator: 'Peaceful Cuisine' },
    { title: 'Apple Cheesecake Brioche Bread', id: 'OdJ_d38vlYo', creator: 'Cooking Tree' },
    { title: '2 Hours No Music Baking Compilation', id: 'm_y6d4t1tW8', creator: 'Cooking Tree' },
];

const VideoCard: React.FC<{ title: string, id: string, creator: string }> = ({ title, id, creator }) => {
    const [isClicked, setIsClicked] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsClicked(true);
    };

    return (
        <div className="bg-white rounded-xl border border-brand-border overflow-hidden flex flex-col shadow-sm">
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

export const RelaxingVideos: React.FC<RelaxingVideosProps> = ({ setActiveTool, breadcrumbs }) => {
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
                    <MusicIcon className="w-8 h-8" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Free Relaxing Bakery Videos</h1>
                <p className="mt-4 text-lg text-brand-text-body/80 max-w-2xl mx-auto">
                    Unwind with a collection of satisfying and calming videos from the world of baking. Perfect for a peaceful break.
                </p>
            </header>

            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search videos (e.g., 'cafe', 'croissants')..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200"
                        aria-label="Search relaxing videos"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filteredVideos.map(vid => <VideoCard key={vid.id} {...vid} />)}
            </div>
            {filteredVideos.length === 0 && searchTerm && (<div className="text-center py-16 text-brand-text-body/70"><p className="font-bold text-lg text-brand-text-title">No videos found for "{searchTerm}"</p><p>Try a different search term.</p></div>)}

            <div className="mt-12 bg-white p-8 rounded-2xl border border-brand-border shadow-sm max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-4">The Therapy of Baking</h2>
                <div className="prose max-w-none text-brand-text-body/90 text-center mx-auto">
                    <p>
                        There's something inherently peaceful about the methodical process of baking. The gentle shaping of dough, the smooth glide of a spatula over frosting—these simple acts can be a form of meditation. We hope this collection of videos brings you a moment of calm and inspiration.
                    </p>
                </div>
            </div>


        </div>
    );
};
