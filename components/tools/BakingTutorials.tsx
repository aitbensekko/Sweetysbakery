import React, { useState, useMemo } from 'react';
import type { ToolId } from '../utils/slugs';
import { Footer } from '../Footer';
import { PlayIcon, YoutubeIcon, SearchIcon } from '../Icons';

interface BakingTutorialsProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const tutorials = [
    { title: 'My Best-Ever Chocolate Cake Recipe', id: 'mcbej7umoqE', creator: 'Bigger Bolder Baking' },
    { title: 'The Perfect Loaf Of Sourdough (For Total Beginners)', id: 'vI5w-fK25w4', creator: 'Joshua Weissman' },
    { title: 'The Easiest No-Knead Bread', id: '3xtj9X1jDc0', creator: 'Brian Lagerstrom' },
    { title: 'How to Make The Perfect Cookies', id: 'lJ7Ec3bKrxM', creator: 'Tasty' },
    { title: 'New York-Style Pizza Recipe', id: 'SDpCzJw2xm4', creator: 'Adam Ragusea' },
    { title: 'How To Make Perfect French Macarons', id: 'jC8Hc5aHtVM', creator: 'Rosanna Pansino' },
    { title: 'Baker\'s Guide To Brown Butter', id: 'HRcdbvFEEWE', creator: 'Sally\'s Baking Addiction' },
    { title: 'Brad Makes Sourdough Bread | It\'s Alive', id: '7Un6mV2YQ54', creator: 'Bon Appétit' },
    { title: 'The Only Carrot Cake Recipe You\'ll Ever Need!', id: 'bstOsDXrRUs', creator: 'The Cooking Foodie' },
    { title: 'Claire Saffitz Makes Fudgy Brownies', id: 'kPa8crk-NEI', creator: 'Claire Saffitz' },
    { title: 'Claire Saffitz Makes Perfect Croissants', id: 'VJ6LPXxJL_w', creator: 'Claire Saffitz' },
    { title: 'How To Make Perfect Choux Pastry', id: 'ROxNWaF9Ltc', creator: 'Bon Appétit' },
    { title: 'How to Make The Best Apple Pie', id: 'KbyahTnzbKA', creator: 'Food52' },
    { title: 'Pro Baker Teaches You How To Make THE BEST Brownies', id: 'nux4jTlJGks', creator: 'Joshua Weissman' },
    { title: 'The BEST Banana Bread Recipe', id: '2RoUoMnDHlc', creator: 'The Stay At Home Chef' },
    { title: 'How to Make The Best New York Cheesecake', id: 'n2EUaJnFF-M', creator: 'Bigger Bolder Baking' },
    { title: 'How to Make French Crème Brûlée', id: 'g7jJrJULNPc', creator: 'Food52' },
    { title: 'Classic French Croissants, Made Simple', id: 'PSCFIZa4b3I', creator: 'The Plain Kitchen' },
    { title: 'How to Make Tiramisu Cake', id: 'cOK3nS4t7_Y', creator: 'The Cooking Foodie' },
    { title: 'Japan\'s UNIQUE Cream Buns', id: 'dn3z6IaODQE', creator: 'Paolo fromTOKYO' },
    { title: 'How To Make The Creamiest Custard', id: '-Dz3LbpFOpw', creator: 'Preppy Kitchen' },
    { title: 'How To Make Perfect Pastry Cream', id: '3-uoq5dFK0U', creator: 'Bruno Albouze' },
    { title: 'Making Perfect Milk Bread', id: 'Vh30tZeWtyk', creator: 'Peaceful Cuisine' },
    { title: 'The Best Homemade Cinnamon Rolls', id: 'x6wFh1w2u2k', creator: 'Joshua Weissman' },
    { title: 'How to Make Perfect New York-Style Bagels', id: 'zhKKm5RSMSs', creator: 'Joshua Weissman' },
    { title: 'How To Make The Best Lemon Meringue Pie', id: 'nCaTGutcTVg', creator: 'Preppy Kitchen' },
    { title: 'Professional Baker\'s Best Chocolate Chip Cookie', id: '6tdm8gcQCaY', creator: 'The Mindful Baker' },
    { title: 'Basque Burnt Cheesecake', id: '5lqotmZa-xc', creator: 'Bon Appétit' },
    { title: 'How To Make Panettone', id: 'dixz2fa5o6I', creator: 'The Pastry Channel' },
    { title: 'How To Make Kouign Amann', id: 'giCEDYodM98', creator: 'Bruno Albouze' },
    { title: 'Classic Baklava Recipe', id: 'IhYAdIStHSw', creator: 'Natasha\'s Kitchen' },
    { title: 'How to Make the Ultimate Sticky Buns', id: 'EaljSnLrJW8', creator: 'Food52' },
    { title: 'The Ultimate Guide To Lamination', id: 'J0n78QfuJtU', creator: 'The Boy Who Bakes' },
];
tutorials.push({ title: 'The Perfect Birthday Cake Recipe', id: 'qtlhdIfojmc', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'How To Make The Most Amazing Chocolate Cake', id: 'KInXa3_DXd8', creator: 'Joshua Weissman' });
tutorials.push({ title: 'The Best Vanilla Cake Recipe', id: 'EYXQmbZNhy8', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'The Best Chocolate Cake I\'ve Ever Had', id: '0cV8C8ybZUY', creator: 'Brian Lagerstrom' });
tutorials.push({ title: 'The Best Vanilla Cake You\'ll Ever Make', id: 'FYjNz4xmLAk', creator: 'The Scran Line' });
tutorials.push({ title: 'The Best Chocolate Cake Recipe', id: 'jSxS2eQzT04', creator: 'The Cooking Foodie' });
tutorials.push({ title: 'The Only Chocolate Cake Recipe You\'ll Ever Need', id: 'bT1Qnk1B8Oo', creator: 'Cupcake Jemma' });
tutorials.push({ title: 'The Best Vanilla Cake Recipe EVER', id: '7d8c_-L_Sdo', creator: 'The Stay At Home Chef' });
tutorials.push({ title: 'The Best Carrot Cake Recipe', id: 'uH6oC5bcpho', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'The Best Lemon Cake Recipe', id: 'Ww1fkpiW3O8', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'The Best Coconut Cake You\'ll Ever Make', id: 'RaLzxZryEoA', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'The Best Pound Cake Recipe', id: '840D3AcTmcM', creator: 'Preppy Kitchen' });
tutorials.push({ title: 'The Most Amazing Red Velvet Cake Recipe', id: 'KvlAjbfv20M', creator: 'Preppy Kitchen' });

const VideoCard: React.FC<{ title: string, id: string, creator: string }> = ({ title, id, creator }) => {
    const [isClicked, setIsClicked] = useState(false);
    const thumbnailUrl = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    const videoUrl = `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

    // SEO Improvement: Add VideoObject structured data
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": title,
        "description": `A baking tutorial by ${creator} on how to make ${title}.`,
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

export const BakingTutorials: React.FC<BakingTutorialsProps> = ({ setActiveTool, breadcrumbs }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredTutorials = useMemo(() => {
        if (!searchTerm) return tutorials;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return tutorials.filter(tut =>
            tut.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            tut.creator.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);


    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <header className="mb-10 mt-4 text-center mx-auto">
                <div className="inline-block bg-brand-pink text-white p-3 rounded-full mb-4 shadow-md">
                    <PlayIcon className="w-8 h-8" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Free Baking Video Tutorials</h1>
                <p className="mt-4 text-lg text-brand-text-body/80 max-w-2xl mx-auto">
                    Learn how to bake from the pros. We've curated a collection of the best free baking tutorials for sourdough, cakes, cookies, and more from our favorite creators on YouTube.
                </p>
            </header>

            <div className="mb-8 max-w-xl mx-auto">
                <div className="relative">
                    <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search tutorials (e.g., 'sourdough', 'Claire Saffitz')..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200"
                        aria-label="Search baking tutorials"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filteredTutorials.map(tut => <VideoCard key={tut.id} {...tut} />)}
            </div>
            {filteredTutorials.length === 0 && searchTerm && (
                <div className="text-center py-16 text-brand-text-body/70"><p className="font-bold text-lg text-brand-text-title">No tutorials found for "{searchTerm}"</p><p>Try a different search term.</p></div>
            )}

            <div className="mt-12 bg-white p-8 rounded-2xl border border-brand-border shadow-sm max-w-4xl mx-auto">
                <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-4">Learn by Watching</h2>
                <div className="prose max-w-none text-brand-text-body/90 text-center mx-auto">
                    <p>
                        Sometimes the best way to learn a new baking technique is to see it in action. Whether it's the proper way to fold a delicate meringue, or the art of frosting a smooth cake, these videos provide a visual guide to help you master the craft.
                    </p>
                    <p>
                        We've selected these tutorials for their clarity, reliability, and the expertise of their creators. We hope they inspire you to try something new and build your confidence in the kitchen. Happy watching!
                    </p>
                </div>
            </div>


        </div>
    );
};
