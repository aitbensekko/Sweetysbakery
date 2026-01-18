'use client';

import { PlayIcon } from '../../../components/Icons';

export default function VideoLibraryPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="bg-brand-pink/10 p-2 rounded-lg text-brand-pink">
                            <PlayIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-brand-pink uppercase tracking-widest">Video Library</span>
                    </div>
                    <h1 className="font-serif text-4xl font-bold text-stone-900">Exclusive Tutorials</h1>
                    <p className="text-lg text-stone-500 mt-2 max-w-2xl">Watch high-quality, step-by-step video lessons to improve your technique.</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Placeholder Video Cards */}
                {[
                    { title: "Folding Techniques", duration: "12:05" },
                    { title: "Shaping a Batard", duration: "08:30" },
                    { title: "Scoring Patterns", duration: "15:20" },
                    { title: "Managing Fermentation", duration: "22:15" }
                ].map((video, i) => (
                    <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer group">
                        <div className="aspect-video bg-stone-900 relative flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <PlayIcon className="w-6 h-6 text-white ml-1" />
                            </div>
                            <span className="absolute bottom-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded-md">{video.duration}</span>
                        </div>
                        <div className="p-6">
                            <h3 className="font-serif text-xl font-bold text-stone-900 mb-2 group-hover:text-brand-pink transition-colors">{video.title}</h3>
                            <p className="text-sm text-stone-500">Master this skill with our detailed breakdown video lesson.</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
