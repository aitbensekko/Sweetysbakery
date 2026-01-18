import React, { useState, useEffect, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { PlusCircleIcon, XIcon, EditIcon, Trash2Icon, SearchIcon, BoxIcon, InfoIcon } from '../Icons';

interface InventoryItem {
    id: number;
    name: string;
    stock: number;
    unit: string;
    lowStock: number;
}

const initialItems: InventoryItem[] = [
    { id: 1, name: 'All-Purpose Flour', stock: 5, unit: 'kg', lowStock: 2 },
    { id: 2, name: 'Granulated Sugar', stock: 10, unit: 'kg', lowStock: 5 },
    { id: 3, name: 'Unsalted Butter', stock: 4, unit: 'lbs', lowStock: 2 },
    { id: 4, name: 'Large Eggs', stock: 12, unit: 'units', lowStock: 6 },
    { id: 5, name: 'Semi-Sweet Chocolate Chips', stock: 1, unit: 'kg', lowStock: 0.5 },
];

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

const ItemModal: React.FC<{
    item: Omit<InventoryItem, 'id'> | InventoryItem | null;
    onSave: (itemData: Omit<InventoryItem, 'id'> | InventoryItem) => void;
    onClose: () => void;
}> = ({ item, onSave, onClose }) => {
    const [itemData, setItemData] = useState(item || { name: '', stock: 0, unit: '', lowStock: 0 });

    const handleSave = () => {
        if (!itemData.name || !itemData.unit) {
            alert("Please fill out at least the item name and unit.");
            return;
        }
        onSave(itemData);
    };

    const handleFieldChange = (field: keyof typeof itemData, value: string | number) => {
        setItemData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"><XIcon className="w-6 h-6" /></button>
                <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">
                    {item && 'id' in item ? 'Edit Item' : 'Add New Item'}
                </h2>
                <div className="space-y-4">
                    <input type="text" placeholder="Item Name" value={itemData.name} onChange={e => handleFieldChange('name', e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Current Stock" value={itemData.stock} onChange={e => handleFieldChange('stock', Number(e.target.value))} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                        <input type="text" placeholder="Unit (e.g., kg, lbs, bags)" value={itemData.unit} onChange={e => handleFieldChange('unit', e.target.value)} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                    </div>
                    <input type="number" placeholder="Low Stock Threshold" value={itemData.lowStock} onChange={e => handleFieldChange('lowStock', Number(e.target.value))} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                </div>
                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">Cancel</button>
                    <button onClick={handleSave} className="bg-brand-pink text-white font-bold py-2 px-4 rounded-lg">Save Item</button>
                </div>
            </div>
        </div>
    );
};

interface InventoryManagementProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const InventoryManagement: React.FC<InventoryManagementProps> = ({ setActiveTool, breadcrumbs }) => {
    const [items, setItems] = useLocalStorage<InventoryItem[]>('bakeryInventory', initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleOpenModal = (item?: InventoryItem) => {
        setEditingItem(item || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleSaveItem = (itemData: Omit<InventoryItem, 'id'> | InventoryItem) => {
        if ('id' in itemData && itemData.id) {
            setItems(items.map(i => i.id === itemData.id ? { ...i, ...itemData } : i));
        } else {
            const newItem: InventoryItem = { id: Date.now(), ...itemData };
            setItems([...items, newItem]);
        }
        handleCloseModal();
    };

    const handleDeleteItem = (id: number) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setItems(items.filter(i => i.id !== id));
        }
    };

    const handleStockChange = (id: number, amount: number) => {
        setItems(items.map(i => i.id === id ? { ...i, stock: Math.max(0, i.stock + amount) } : i));
    };

    const filteredItems = useMemo(() => {
        return items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).sort((a, b) => a.name.localeCompare(b.name));
    }, [items, searchTerm]);

    return (
        <ToolContainer
            title="Free Bakery Inventory Management"
            description="A free tool to track your baking supplies, set low-stock alerts, and manage your ingredient inventory to stay organized and prepared."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="inventory-management"
        >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="relative w-full sm:w-auto">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-text-body/40" />
                    <input
                        type="text"
                        placeholder="Search inventory..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full sm:w-64 bg-brand-pink-light border border-brand-border rounded-lg pl-10 pr-4 py-2"
                    />
                </div>
                <button onClick={() => handleOpenModal()} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-pink text-white font-bold py-2 px-4 rounded-full shadow-lg hover:opacity-90 transition-all">
                    <PlusCircleIcon className="w-5 h-5" /> Add New Item
                </button>
            </div>

            <div className="bg-white rounded-lg border border-brand-border overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-xs uppercase text-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Item Name</th>
                            <th scope="col" className="px-6 py-3 text-center">Current Stock</th>
                            <th scope="col" className="px-6 py-3">Low Stock At</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map(item => {
                            const isLowStock = item.stock <= item.lowStock;
                            return (
                                <tr key={item.id} className={`border-b hover:bg-gray-50 ${isLowStock ? 'bg-red-50' : ''}`}>
                                    <td className="px-6 py-4 font-bold text-brand-text-title">{item.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => handleStockChange(item.id, -1)} className="w-7 h-7 bg-gray-200 rounded-full font-bold">-</button>
                                            <span className={`font-bold text-lg w-16 text-center ${isLowStock ? 'text-red-600' : 'text-brand-text-body'}`}>
                                                {item.stock.toLocaleString()} <span className="text-xs">{item.unit}</span>
                                            </span>
                                            <button onClick={() => handleStockChange(item.id, 1)} className="w-7 h-7 bg-gray-200 rounded-full font-bold">+</button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-brand-text-body">{item.lowStock.toLocaleString()} {item.unit}</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex gap-2 justify-end">
                                            <button onClick={() => handleOpenModal(item)} className="text-blue-600 hover:text-blue-800"><EditIcon className="w-5 h-5" /></button>
                                            <button onClick={() => handleDeleteItem(item.id)} className="text-red-600 hover:text-red-800"><Trash2Icon className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {filteredItems.length === 0 && (
                    <div className="text-center py-16 text-brand-text-body/70">
                        <BoxIcon className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="font-bold text-lg text-brand-text-title">No Inventory Items Found</h3>
                        <p>Click "Add New Item" to start tracking your supplies.</p>
                    </div>
                )}
            </div>

            {isModalOpen && <ItemModal item={editingItem} onSave={handleSaveItem} onClose={handleCloseModal} />}

            <InventoryManagementContent />
        </ToolContainer>
    );
};

const InventoryManagementContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use Inventory Tracker
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Add Ingredients:</strong> Click "Add New Item" to input your baking supplies (e.g., Flour, Sugar, Chocolate).</li>
                <li><strong>Set Low Stock Alerts:</strong> Define a "Low Stock" number. The row will turn red when you dip below this amount, reminding you to reorder.</li>
                <li><strong>Update Levels:</strong> Use the (+) and (-) buttons to quickly adjust quantities as you bake.</li>
                <li><strong>Search & Filter:</strong> Use the search bar to quickly find specific ingredients in a crowded pantry.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Does this sync with my shopping list?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Not yet automatically. However, seeing the red "Low Stock" highlights makes it easy to manually add items to your Shopping List tool.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        What units should I use?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        You can use any unit you prefer (kg, lbs, bags, boxes). Just be consistent for each item so your tracking makes sense!
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is my data saved?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! This tool uses your browser's local storage, so your inventory list will be there when you come back (as long as you don't clear your cache).
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Master Your Bakery Inventory</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Running out of ingredients mid-bake is every baker's nightmare. Our <strong>free bakery inventory software</strong> helps you keep a close eye on your supplies. Whether you're tracking 50lb bags of flour or expensive vanilla beans, this <strong>ingredient tracking system</strong> ensures you're always prepared.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                Designed for <strong>stock management for bakers</strong>, this tool is simple yet effective. By setting custom low-stock thresholds, you'll know exactly when it's time to reorder, preventing last-minute grocery runs and keeping your production schedule on track.
            </p>
        </div>
    </div>
);
