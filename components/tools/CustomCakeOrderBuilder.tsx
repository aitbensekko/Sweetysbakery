import React, { useState, useRef } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    CakePricingIcon,
    WeddingCakeIcon,
    BirthdayCakeIcon,
    DownloadIcon,
    PrintIcon,
    CheckCircleIcon,
    AlertTriangleIcon
} from '../Icons';

interface CustomCakeOrderBuilderProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

interface OrderState {
    size: string;
    layers: string;
    flavor: string;
    filling: string;
    frosting: string;
    designStyle: string;
    dietary: string[];
    deliveryDate: string;
    deliveryTime: string;
    contactName: string;
    contactPhone: string;
    notes: string;
}

const CAKE_SIZES = [
    { id: '6', name: '6" Round (12 servings)', basePrice: 45 },
    { id: '8', name: '8" Round (24 servings)', basePrice: 65 },
    { id: '10', name: '10" Round (38 servings)', basePrice: 95 },
    { id: '2tier', name: '2-Tier (6" + 8", 36 servings)', basePrice: 130 },
    { id: '3tier', name: '3-Tier (6" + 8" + 10", 74 servings)', basePrice: 250 },
];

const FLAVORS = ['Vanilla Bean', 'Double Chocolate', 'Red Velvet', 'Lemon', 'Carrot', 'Funfetti', 'Strawberry'];
const FILLINGS = ['Vanilla Buttercream', 'Chocolate Ganache', 'Cream Cheese', 'Lemon Curd', 'Strawberry Jam', 'Salted Caramel'];
const FROSTINGS = ['Vanilla Buttercream', 'Chocolate Buttercream', 'Swiss Meringue', 'Fondant (+$20)'];
const DESIGN_STYLES = [
    { id: 'minimalist', name: 'Minimalist/Naked', priceMod: 0 },
    { id: 'floral', name: 'Fresh Florals', priceMod: 25 },
    { id: 'piped', name: 'Vintage Piped', priceMod: 15 },
    { id: 'themed', name: 'Themed/Fondant Work', priceMod: 40 },
];

export const CustomCakeOrderBuilder: React.FC<CustomCakeOrderBuilderProps> = ({ setActiveTool, breadcrumbs }) => {
    const [order, setOrder] = useState<OrderState>({
        size: '8',
        layers: '2',
        flavor: 'Vanilla Bean',
        filling: 'Vanilla Buttercream',
        frosting: 'Vanilla Buttercream',
        designStyle: 'minimalist',
        dietary: [],
        deliveryDate: '',
        deliveryTime: '',
        contactName: '',
        contactPhone: '',
        notes: ''
    });

    const [uploadedImage, setUploadedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (field: keyof OrderState, value: any) => {
        setOrder(prev => ({ ...prev, [field]: value }));
    };

    const toggleDietary = (item: string) => {
        setOrder(prev => {
            const current = prev.dietary;
            if (current.includes(item)) {
                return { ...prev, dietary: current.filter(i => i !== item) };
            } else {
                return { ...prev, dietary: [...current, item] };
            }
        });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUploadedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const calculateEstimatedPrice = () => {
        const sizeObj = CAKE_SIZES.find(s => s.id === order.size);
        const styleObj = DESIGN_STYLES.find(s => s.id === order.designStyle);

        let price = sizeObj ? sizeObj.basePrice : 0;
        if (styleObj) price += styleObj.priceMod;
        if (order.frosting.includes('Fondant')) price += 20;

        // Simple dietary upcharge logic
        if (order.dietary.includes('Gluten-Free')) price += 10;
        if (order.dietary.includes('Vegan')) price += 10;

        return price;
    };

    const handlePrint = () => {
        window.print();
    };

    const estimatedPrice = calculateEstimatedPrice();

    return (
        <ToolContainer
            title="Custom Cake Order Builder"
            description="Design your dream cake and generate a professional order summary. Perfect for weddings, birthdays, and special events."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="custom-cake-order-builder"
        >
            <div className="grid lg:grid-cols-3 gap-8 print:block">
                {/* Form Section - Hidden when printing if desired, or styled to look like a form */}
                <div className="lg:col-span-2 space-y-8 print:hidden">

                    {/* 1. Cake Details */}
                    <section className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                            Cake Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-2">Size & Servings</label>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {CAKE_SIZES.map(size => (
                                        <button
                                            key={size.id}
                                            onClick={() => handleInputChange('size', size.id)}
                                            className={`p-3 rounded-lg border text-left transition-all ${order.size === size.id ? 'border-brand-pink bg-brand-pink/5 ring-1 ring-brand-pink' : 'border-gray-200 hover:border-brand-pink/50'}`}
                                        >
                                            <div className="font-bold text-brand-text-title">{size.name.split('(')[0]}</div>
                                            <div className="text-xs text-brand-text-body/70">{size.name.split('(')[1]?.replace(')', '')}</div>
                                            <div className="text-sm font-semibold text-brand-pink mt-1">${size.basePrice}+</div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-2">Flavor</label>
                                    <select
                                        value={order.flavor}
                                        onChange={(e) => handleInputChange('flavor', e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-pink/50 outline-none"
                                    >
                                        {FLAVORS.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-2">Filling</label>
                                    <select
                                        value={order.filling}
                                        onChange={(e) => handleInputChange('filling', e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-pink/50 outline-none"
                                    >
                                        {FILLINGS.map(f => <option key={f} value={f}>{f}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Design & Style */}
                    <section className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                            Design & Style
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-2">Design Style</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {DESIGN_STYLES.map(style => (
                                        <button
                                            key={style.id}
                                            onClick={() => handleInputChange('designStyle', style.id)}
                                            className={`p-3 rounded-lg border text-center transition-all ${order.designStyle === style.id ? 'border-brand-pink bg-brand-pink/5 ring-1 ring-brand-pink' : 'border-gray-200 hover:border-brand-pink/50'}`}
                                        >
                                            <div className="text-sm font-medium">{style.name}</div>
                                            {style.priceMod > 0 && <div className="text-xs text-brand-text-body/60 mt-1">+${style.priceMod}</div>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-2">Reference Photo</label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                                >
                                    {uploadedImage ? (
                                        <div className="relative h-48 w-full">
                                            <img src={uploadedImage} alt="Reference" className="h-full w-full object-contain" />
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setUploadedImage(null); }}
                                                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:text-red-500"
                                            >
                                                &times;
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                                                <DownloadIcon className="w-6 h-6 rotate-180" />
                                            </div>
                                            <p className="text-sm text-brand-text-body">Click to upload an inspiration photo</p>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 3. Logistics */}
                    <section className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                            <span className="bg-brand-pink text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                            Logistics & Details
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-2">Dietary Requirements</label>
                                <div className="space-y-2">
                                    {['Gluten-Free', 'Vegan', 'Nut-Free', 'Dairy-Free'].map(item => (
                                        <label key={item} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={order.dietary.includes(item)}
                                                onChange={() => toggleDietary(item)}
                                                className="rounded text-brand-pink focus:ring-brand-pink"
                                            />
                                            <span className="text-sm text-brand-text-body">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-1">Delivery Date</label>
                                    <input
                                        type="date"
                                        value={order.deliveryDate}
                                        onChange={(e) => handleInputChange('deliveryDate', e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-1">Contact Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={order.contactName}
                                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Additional Notes</label>
                                <textarea
                                    rows={3}
                                    placeholder="Any specific writing on the cake, color preferences, etc."
                                    value={order.notes}
                                    onChange={(e) => handleInputChange('notes', e.target.value)}
                                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Summary Card - Sticky on Desktop, Full view on Print */}
                <div className="lg:col-span-1">
                    <div className="sticky top-6 space-y-6">
                        <div className="bg-white p-6 rounded-2xl border-2 border-brand-pink/20 shadow-lg print:border-none print:shadow-none print:p-0">
                            <div className="text-center border-b border-gray-100 pb-4 mb-4">
                                <h2 className="font-serif font-bold text-2xl text-brand-text-title">Order Summary</h2>
                                <p className="text-sm text-brand-text-body/60">Draft Quote</p>
                            </div>

                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500">Size</span>
                                    <span className="font-bold text-brand-text-title text-right">
                                        {CAKE_SIZES.find(s => s.id === order.size)?.name}
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500">Flavor Profile</span>
                                    <div className="text-right">
                                        <div className="font-bold text-brand-text-title">{order.flavor}</div>
                                        <div className="text-xs text-gray-400">{order.filling}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-50">
                                    <span className="text-gray-500">Design</span>
                                    <span className="font-bold text-brand-text-title text-right">
                                        {DESIGN_STYLES.find(s => s.id === order.designStyle)?.name}
                                    </span>
                                </div>
                                {order.dietary.length > 0 && (
                                    <div className="flex justify-between py-2 border-b border-gray-50">
                                        <span className="text-gray-500">Dietary</span>
                                        <span className="font-bold text-brand-pink text-right">
                                            {order.dietary.join(', ')}
                                        </span>
                                    </div>
                                )}
                                {order.deliveryDate && (
                                    <div className="flex justify-between py-2 border-b border-gray-50">
                                        <span className="text-gray-500">Date</span>
                                        <span className="font-bold text-brand-text-title text-right">
                                            {order.deliveryDate}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {uploadedImage && (
                                <div className="mt-4 p-2 border border-gray-100 rounded-lg print:block hidden">
                                    <p className="text-xs text-gray-400 mb-1">Reference Image:</p>
                                    <img src={uploadedImage} alt="Reference" className="w-full h-32 object-contain" />
                                </div>
                            )}

                            <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200">
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-bold text-gray-500">Estimated Total</span>
                                    <span className="text-3xl font-serif font-bold text-brand-pink">
                                        ${estimatedPrice}
                                    </span>
                                </div>
                                <p className="text-xs text-center text-gray-400 mt-2">
                                    *Final price may vary based on specific design requirements.
                                </p>
                            </div>

                            <div className="mt-6 print:hidden">
                                <button
                                    onClick={handlePrint}
                                    className="w-full py-3 bg-brand-text-title text-white rounded-xl font-bold hover:bg-brand-pink transition-colors flex items-center justify-center gap-2"
                                >
                                    <PrintIcon className="w-5 h-5" />
                                    Print / Save as PDF
                                </button>
                            </div>
                        </div>

                        {/* Helper Tip - Hidden on Print */}
                        <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 print:hidden">
                            <div className="flex gap-3">
                                <div className="bg-blue-100 p-2 rounded-full h-fit">
                                    <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-900 text-sm">Baker's Tip</h4>
                                    <p className="text-xs text-blue-800 mt-1">
                                        Save this summary as a PDF and email it to us to start your order process!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
