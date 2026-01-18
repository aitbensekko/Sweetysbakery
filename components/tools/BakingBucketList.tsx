import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for 'ToolId' type.
import type { ToolId } from '../utils/slugs';

interface BucketListProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const bucketListData = {
    'Beginner Bakes': ['Perfect Chocolate Chip Cookies', 'Classic Banana Bread', 'Fudgy Brownies', 'Simple Vanilla Cupcakes', 'Lemon Drizzle Cake', 'Blueberry Muffins'],
    'Bread & Dough': ['No-Knead Artisan Bread', 'Soft Pretzels', 'Cinnamon Rolls', 'Sourdough Starter & Loaf', 'Focaccia Art', 'Homemade Bagels', 'Challah Bread'],
    'Cakes & Pastries': ['Multi-Layer Celebration Cake', 'Classic Cheesecake', 'French Macarons', 'Pâte à Choux (Eclairs/Cream Puffs)', 'Laminated Croissants', 'Opera Cake', 'Tiramisu'],
    'Advanced Challenges': ['Soufflé', 'Baked Alaska', 'Mirror Glaze Cake', 'Handmade Puff Pastry', 'Croquembouche', 'Macaron Tower'],
};

export const BakingBucketList: React.FC<BucketListProps> = ({ setActiveTool, breadcrumbs }) => {
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

    const handleToggle = (item: string) => {
        const newCheckedItems = new Set(checkedItems);
        if (newCheckedItems.has(item)) {
            newCheckedItems.delete(item);
        } else {
            newCheckedItems.add(item);
        }
        setCheckedItems(newCheckedItems);
    };

    const totalItems = Object.values(bucketListData).flat().length;
    const completedItems = checkedItems.size;
    const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

    return (
        <ToolContainer
            title="The Ultimate Free Baking Bucket List"
            description="Challenge yourself with our curated list of free baking goals and projects. From simple cookies to advanced pastries, how many of these baking challenges can you check off?"
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="baking-bucket-list"
        >
            <div className="max-w-3xl mx-auto">
                <div className="mb-6">
                    <div className="flex justify-between items-center mb-1 font-semibold">
                        <span className="text-brand-text-title">Progress</span>
                        <span className="text-brand-pink">{completedItems} / {totalItems} Completed</span>
                    </div>
                    <div className="w-full bg-brand-pink-light rounded-full h-2.5">
                        <div className="bg-brand-pink h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className="space-y-6">
                    {Object.entries(bucketListData).map(([category, items]) => (
                        <div key={category} className="p-6 bg-white rounded-xl border border-brand-border">
                            <h3 className="font-serif text-2xl font-bold text-brand-text-title mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {items.map(item => (
                                    <li key={item}>
                                        <label className="flex items-center gap-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems.has(item)}
                                                onChange={() => handleToggle(item)}
                                                className="h-5 w-5 rounded border-gray-300 text-brand-pink focus:ring-brand-pink"
                                            />
                                            <span className={`font-medium ${checkedItems.has(item) ? 'line-through text-brand-text-body/60' : 'text-brand-text-body'}`}>
                                                {item}
                                            </span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t border-brand-border text-center">
                    <h3 className="font-serif font-bold text-2xl mb-2 text-brand-text-title">Your Baking Adventure Awaits</h3>
                    <p className="text-brand-text-body">Share your progress with us on social media using #SweetysBakingChallenge!</p>
                </div>
            </div>
        </ToolContainer>
    );
};
