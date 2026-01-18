import React, { useState, useEffect } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { ShoppingCartIcon, PlusCircleIcon, Trash2Icon, CheckCircleIcon, InfoIcon, XIcon } from '../Icons';

interface ShoppingItem {
    id: number;
    name: string;
    checked: boolean;
    category: string;
}

const CATEGORIES = ['Produce', 'Dairy', 'Baking Aisle', 'Spices', 'Other'];

const useLocalStorage = <T,>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };
    return [storedValue, setValue];
};

interface ShoppingListProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const ShoppingList: React.FC<ShoppingListProps> = ({ setActiveTool, breadcrumbs }) => {
    const [items, setItems] = useLocalStorage<ShoppingItem[]>('bakeryShoppingList', []);
    const [newItemName, setNewItemName] = useState('');
    const [newItemCategory, setNewItemCategory] = useState('Baking Aisle');

    const handleAddItem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItemName.trim()) return;

        const newItem: ShoppingItem = {
            id: Date.now(),
            name: newItemName.trim(),
            checked: false,
            category: newItemCategory
        };

        setItems([...items, newItem]);
        setNewItemName('');
    };

    const toggleCheck = (id: number) => {
        setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
    };

    const deleteItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    const clearCompleted = () => {
        if (window.confirm('Remove all checked items?')) {
            setItems(items.filter(item => !item.checked));
        }
    };

    // Group items by category
    const groupedItems = CATEGORIES.reduce((acc, category) => {
        acc[category] = items.filter(item => item.category === category);
        return acc;
    }, {} as Record<string, ShoppingItem[]>);

    return (
        <ToolContainer
            title="Free Baking Shopping List Generator"
            description="Create, manage, and organize your shopping lists for all your baking ingredients for free. Never forget an item at the store again."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="shopping-list"
        >
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    {/* Input Area */}
                    <form onSubmit={handleAddItem} className="bg-white p-4 rounded-xl border border-brand-border shadow-sm flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="Add item (e.g., 5lbs Flour)"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                            className="flex-1 px-4 py-2 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 outline-none"
                        />
                        <select
                            value={newItemCategory}
                            onChange={(e) => setNewItemCategory(e.target.value)}
                            className="px-4 py-2 border border-brand-border rounded-lg bg-gray-50"
                        >
                            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                        <button type="submit" className="bg-brand-pink text-white font-bold px-6 py-2 rounded-lg hover:bg-brand-pink/90 transition-colors flex items-center justify-center gap-2">
                            <PlusCircleIcon className="w-5 h-5" /> Add
                        </button>
                    </form>

                    {/* List Area */}
                    <div className="space-y-6">
                        {items.length === 0 ? (
                            <div className="text-center py-12 bg-brand-pink-light/30 rounded-xl border-2 border-dashed border-brand-pink/20">
                                <ShoppingCartIcon className="w-12 h-12 mx-auto text-brand-pink/40 mb-3" />
                                <p className="text-brand-text-body/60 font-medium">Your list is empty. Start adding ingredients!</p>
                            </div>
                        ) : (
                            Object.entries(groupedItems).map(([category, categoryItems]) => (
                                categoryItems.length > 0 && (
                                    <div key={category} className="bg-white rounded-xl border border-brand-border overflow-hidden">
                                        <h3 className="bg-gray-50 px-4 py-2 font-bold text-brand-text-title text-sm uppercase tracking-wide border-b border-brand-border">
                                            {category}
                                        </h3>
                                        <div className="divide-y divide-gray-100">
                                            {categoryItems.map(item => (
                                                <div key={item.id} className={`flex items-center justify-between p-3 hover:bg-gray-50 transition-colors ${item.checked ? 'bg-gray-50/50' : ''}`}>
                                                    <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => toggleCheck(item.id)}>
                                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${item.checked ? 'bg-brand-pink border-brand-pink text-white' : 'border-gray-300 bg-white'}`}>
                                                            {item.checked && <CheckCircleIcon className="w-3.5 h-3.5" />}
                                                        </div>
                                                        <span className={`font-medium ${item.checked ? 'text-gray-400 line-through' : 'text-brand-text-title'}`}>
                                                            {item.name}
                                                        </span>
                                                    </div>
                                                    <button onClick={() => deleteItem(item.id)} className="text-gray-400 hover:text-red-500 p-1">
                                                        <XIcon className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))
                        )}
                    </div>

                    {items.some(i => i.checked) && (
                        <div className="flex justify-end">
                            <button onClick={clearCompleted} className="text-sm text-red-500 hover:text-red-700 font-semibold flex items-center gap-1">
                                <Trash2Icon className="w-4 h-4" /> Clear Checked Items
                            </button>
                        </div>
                    )}
                </div>

                {/* Sidebar Content */}
                <div className="space-y-6">
                    <div className="bg-brand-pink text-white p-6 rounded-xl shadow-lg">
                        <h3 className="font-serif font-bold text-xl mb-2">Shopping Tips</h3>
                        <p className="text-sm opacity-90 mb-4">Group items by aisle to save time at the store. Check your pantry before you leave!</p>
                        <div className="text-center">
                            <span className="text-4xl font-bold">{items.filter(i => !i.checked).length}</span>
                            <p className="text-xs uppercase tracking-wider opacity-80 mt-1">Items Remaining</p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-lg mb-4 text-brand-text-title flex items-center gap-2">
                            <InfoIcon className="w-5 h-5 text-brand-pink" />
                            How to Use
                        </h3>
                        <ul className="space-y-3 text-sm text-brand-text-body/80 list-disc pl-4">
                            <li><strong>Add Items:</strong> Type an ingredient and select a category (e.g., Dairy).</li>
                            <li><strong>Shop Efficiently:</strong> The list automatically sorts by category to match grocery store aisles.</li>
                            <li><strong>Check Off:</strong> Tap an item to mark it as found.</li>
                            <li><strong>Clean Up:</strong> Use "Clear Checked Items" to remove purchased goods.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-lg mb-4 text-brand-text-title">FAQ</h3>
                        <div className="space-y-3">
                            <details className="group">
                                <summary className="font-semibold text-sm cursor-pointer hover:text-brand-pink">Does this save?</summary>
                                <p className="text-xs text-brand-text-body/70 mt-1 pl-2">Yes, your list is saved to your browser automatically.</p>
                            </details>
                            <details className="group">
                                <summary className="font-semibold text-sm cursor-pointer hover:text-brand-pink">Can I print this?</summary>
                                <p className="text-xs text-brand-text-body/70 mt-1 pl-2">You can use your browser's print function (Ctrl+P) for a clean list view.</p>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-border">
                <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">Why Use a Digital Bakery Shopping List?</h2>
                <div className="grid md:grid-cols-2 gap-6 text-sm text-brand-text-body/80 leading-relaxed">
                    <p>
                        Forgetting a key ingredient like <strong>unsalted butter</strong> or <strong>heavy cream</strong> can ruin a baking day. Our <strong>free bakery shopping list app</strong> helps you plan your <strong>ingredient procurement</strong> with precision.
                    </p>
                    <p>
                        By organizing your <strong>baking supply list</strong> by aisle, you save time and avoid backtracking in the store. Whether you're stocking up on <strong>cake flour</strong> or specialty <strong>sprinkles</strong>, this tool ensures you have everything you need for your next big order.
                    </p>
                </div>
            </div>
        </ToolContainer>
    );
};
