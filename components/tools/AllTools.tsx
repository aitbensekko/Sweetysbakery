import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import { navConfig } from '../Sidebar';
import { toolIdToSlug, ToolId } from '../utils/slugs';
import { SearchIcon } from '../Icons';

interface AllToolsProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
    categoryId?: string;
}

export const AllTools: React.FC<AllToolsProps> = ({ setActiveTool, breadcrumbs, categoryId }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredConfig = categoryId
        ? navConfig.filter(c => c.id === categoryId)
        : navConfig.map(category => ({
            ...category,
            tools: category.tools.filter(tool =>
                (tool.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
                category.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        })).filter(category => category.tools.length > 0);

    const pageTitle = categoryId && filteredConfig.length > 0
        ? filteredConfig[0].title
        : "All Tools & Calculators";

    const pageDescription = categoryId && filteredConfig.length > 0
        ? `Explore our collection of ${filteredConfig[0].title.toLowerCase()}. Free, accurate, and easy to use.`
        : "A complete directory of all our baking calculators, converters, and resources. Find exactly what you need for your next baking project.";

    return (
        <ToolContainer
            title={pageTitle}
            description={pageDescription}
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
        >
            {!categoryId && (
                <div className="max-w-xl mx-auto mb-12 relative">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-400 group-focus-within:text-brand-pink transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a calculator or tool..."
                            className="block w-full pl-11 pr-4 py-4 bg-white border border-brand-border rounded-full text-brand-text-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-pink/20 focus:border-brand-pink transition-all shadow-sm hover:shadow-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            )}

            <div className="space-y-16">
                {filteredConfig.length > 0 ? (
                    filteredConfig.map((category) => (
                        <div key={category.id} className="space-y-6 animate-fade-in-up">
                            <div className="flex items-center gap-3 border-b border-brand-border pb-4">
                                <div className="p-2 bg-brand-pink/5 rounded-lg text-brand-pink">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-serif font-bold text-brand-text-title">
                                    {category.title}
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {category.tools.map((tool) => (
                                    <a
                                        key={tool.id}
                                        href={toolIdToSlug(tool.id as ToolId)}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setActiveTool(tool.id as ToolId);
                                        }}
                                        className="group bg-white p-6 rounded-2xl shadow-sm border border-brand-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="p-3 bg-brand-pink/5 text-brand-pink rounded-xl group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                                {tool.icon}
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-pink">
                                                <svg className="w-5 h-5 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </div>
                                        </div>

                                        <h3 className="font-serif font-bold text-lg text-brand-text-title mb-2 group-hover:text-brand-pink transition-colors">
                                            {tool.title}
                                        </h3>

                                        <p className="text-sm text-brand-text-body/80 mt-auto">
                                            Explore this tool
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12">
                        <p className="text-lg text-brand-text-body/60">No tools found matching "{searchQuery}"</p>
                        <button
                            onClick={() => setSearchQuery('')}
                            className="mt-4 text-brand-pink font-bold hover:underline"
                        >
                            Clear search
                        </button>
                    </div>
                )}
            </div>
        </ToolContainer>
    );
};
