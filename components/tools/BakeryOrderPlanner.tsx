import React, { useState, useEffect, useMemo } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import {
    CalendarIcon,
    PlusCircleIcon,
    Trash2Icon,
    AlertTriangleIcon,
    CheckCircleIcon,
    ClockIcon,
    SettingsIcon,
    ChevronLeftIcon,
    ChevronRightIcon
} from '../Icons';

interface BakeryOrderPlannerProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

type Complexity = 'Simple' | 'Standard' | 'Elaborate' | 'Custom';
type OrderStatus = 'Pending' | 'In Progress' | 'Completed';

interface Order {
    id: string;
    customerName: string;
    description: string;
    dueDate: string;
    complexity: Complexity;
    estimatedHours: number;
    status: OrderStatus;
}

interface Settings {
    maxHoursPerDay: number;
}

const COMPLEXITY_HOURS: Record<Complexity, number> = {
    'Simple': 2,
    'Standard': 4,
    'Elaborate': 8,
    'Custom': 0
};

export const BakeryOrderPlanner: React.FC<BakeryOrderPlannerProps> = ({ setActiveTool, breadcrumbs }) => {
    // State
    const [orders, setOrders] = useState<Order[]>([]);
    const [settings, setSettings] = useState<Settings>({ maxHoursPerDay: 8 });
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showSettings, setShowSettings] = useState(false);

    // Form State
    const [customerName, setCustomerName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [complexity, setComplexity] = useState<Complexity>('Standard');
    const [customHours, setCustomHours] = useState(0);

    // Load/Save Data
    useEffect(() => {
        const savedOrders = localStorage.getItem('bakeryOrders');
        const savedSettings = localStorage.getItem('bakeryPlannerSettings');
        if (savedOrders) setOrders(JSON.parse(savedOrders));
        if (savedSettings) setSettings(JSON.parse(savedSettings));
    }, []);

    useEffect(() => {
        localStorage.setItem('bakeryOrders', JSON.stringify(orders));
        localStorage.setItem('bakeryPlannerSettings', JSON.stringify(settings));
    }, [orders, settings]);

    // Helpers
    const handleAddOrder = () => {
        if (!customerName || !dueDate) return;

        const hours = complexity === 'Custom' ? customHours : COMPLEXITY_HOURS[complexity];

        const newOrder: Order = {
            id: Date.now().toString(),
            customerName,
            description,
            dueDate,
            complexity,
            estimatedHours: hours,
            status: 'Pending'
        };

        setOrders([...orders, newOrder]);

        // Reset form
        setCustomerName('');
        setDescription('');
        setDueDate('');
        setComplexity('Standard');
        setCustomHours(0);
    };

    const handleDeleteOrder = (id: string) => {
        if (window.confirm('Delete this order?')) {
            setOrders(orders.filter(o => o.id !== id));
        }
    };

    const toggleStatus = (id: string) => {
        setOrders(orders.map(o => {
            if (o.id !== id) return o;
            const nextStatus: Record<OrderStatus, OrderStatus> = {
                'Pending': 'In Progress',
                'In Progress': 'Completed',
                'Completed': 'Pending'
            };
            return { ...o, status: nextStatus[o.status] };
        }));
    };

    const getDailyLoad = (dateStr: string) => {
        return orders
            .filter(o => o.dueDate === dateStr && o.status !== 'Completed')
            .reduce((sum, o) => sum + o.estimatedHours, 0);
    };

    const getLoadStatus = (hours: number) => {
        if (hours === 0) return 'empty';
        if (hours <= settings.maxHoursPerDay * 0.5) return 'light';
        if (hours <= settings.maxHoursPerDay) return 'moderate';
        return 'heavy';
    };

    // Calendar Logic
    const getCalendarDays = () => {
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);

        const days = [];
        const startPadding = firstDay.getDay(); // 0 = Sunday

        // Previous month padding
        for (let i = 0; i < startPadding; i++) {
            days.push(null);
        }

        // Current month days
        for (let i = 1; i <= lastDay.getDate(); i++) {
            days.push(new Date(year, month, i));
        }

        return days;
    };

    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));

    return (
        <ToolContainer
            title="Bakery Order Planner & Calendar"
            description="Manage your orders, track deadlines, and prevent overbooking with intelligent capacity planning."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="bakery-order-planner"
        >
            <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column: Input & Settings */}
                <div className="space-y-6">
                    {/* Settings Toggle */}
                    <div className="flex justify-end">
                        <button
                            onClick={() => setShowSettings(!showSettings)}
                            className="text-sm text-brand-text-body flex items-center gap-1 hover:text-brand-pink"
                        >
                            <SettingsIcon className="w-4 h-4" />
                            {showSettings ? 'Hide Settings' : 'Capacity Settings'}
                        </button>
                    </div>

                    {showSettings && (
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 animate-in fade-in slide-in-from-top-2">
                            <label className="block text-sm font-bold text-brand-text-body mb-2">
                                Max Baking Hours per Day
                            </label>
                            <input
                                type="number"
                                value={settings.maxHoursPerDay}
                                onChange={e => setSettings({ ...settings, maxHoursPerDay: Number(e.target.value) })}
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                We'll warn you if your orders exceed this limit on any given day.
                            </p>
                        </div>
                    )}

                    {/* Add Order Form */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-xl text-brand-text-title mb-4 flex items-center gap-2">
                            <PlusCircleIcon className="w-6 h-6 text-brand-pink" />
                            New Order
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Customer Name</label>
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={e => setCustomerName(e.target.value)}
                                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-pink/50"
                                    placeholder="e.g. Sarah Smith"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-brand-text-body mb-1">Order Details</label>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg h-20"
                                    placeholder="e.g. 2 dozen cupcakes, 1 birthday cake"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-1">Due Date</label>
                                    <input
                                        type="date"
                                        value={dueDate}
                                        onChange={e => setDueDate(e.target.value)}
                                        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-1">Complexity</label>
                                    <select
                                        value={complexity}
                                        onChange={e => setComplexity(e.target.value as Complexity)}
                                        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg"
                                    >
                                        <option value="Simple">Simple (2h)</option>
                                        <option value="Standard">Standard (4h)</option>
                                        <option value="Elaborate">Elaborate (8h)</option>
                                        <option value="Custom">Custom</option>
                                    </select>
                                </div>
                            </div>

                            {complexity === 'Custom' && (
                                <div>
                                    <label className="block text-sm font-bold text-brand-text-body mb-1">Estimated Hours</label>
                                    <input
                                        type="number"
                                        value={customHours}
                                        onChange={e => setCustomHours(Number(e.target.value))}
                                        className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg"
                                    />
                                </div>
                            )}

                            <button
                                onClick={handleAddOrder}
                                disabled={!customerName || !dueDate}
                                className="w-full bg-brand-pink text-white font-bold py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Add to Schedule
                            </button>
                        </div>
                    </div>

                    {/* Upcoming List (Mini) */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <h3 className="font-serif font-bold text-lg text-brand-text-title mb-4">Upcoming Deadlines</h3>
                        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                            {orders
                                .filter(o => o.status !== 'Completed')
                                .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                                .slice(0, 5)
                                .map(order => (
                                    <div key={order.id} className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-sm">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="font-bold text-brand-text-title">{order.customerName}</span>
                                            <span className="text-xs font-mono bg-white px-2 py-0.5 rounded border border-gray-200">
                                                {new Date(order.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                                            </span>
                                        </div>
                                        <p className="text-brand-text-body/80 text-xs truncate mb-2">{order.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {order.status}
                                            </span>
                                            <button
                                                onClick={() => toggleStatus(order.id)}
                                                className="text-xs text-brand-pink hover:underline"
                                            >
                                                Mark {order.status === 'Pending' ? 'In Progress' : 'Completed'}
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                            {orders.length === 0 && (
                                <p className="text-sm text-gray-400 text-center py-4">No upcoming orders.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column: Calendar & Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-brand-border shadow-sm">
                        <button onClick={prevMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronLeftIcon className="w-5 h-5" /></button>
                        <h2 className="font-serif text-2xl font-bold text-brand-text-title">
                            {currentMonth.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
                        </h2>
                        <button onClick={nextMonth} className="p-2 hover:bg-gray-100 rounded-full"><ChevronRightIcon className="w-5 h-5" /></button>
                    </div>

                    {/* Calendar Grid */}
                    <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
                        <div className="grid grid-cols-7 gap-2 mb-2 text-center text-sm font-bold text-gray-400">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                            {getCalendarDays().map((date, idx) => {
                                if (!date) return <div key={idx} className="aspect-square bg-gray-50/50 rounded-lg" />;

                                const dateStr = date.toISOString().split('T')[0];
                                const dailyHours = getDailyLoad(dateStr);
                                const loadStatus = getLoadStatus(dailyHours);
                                const isToday = new Date().toDateString() === date.toDateString();

                                const bgColors = {
                                    'empty': 'bg-white hover:bg-gray-50',
                                    'light': 'bg-green-50 border-green-200 hover:bg-green-100',
                                    'moderate': 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100',
                                    'heavy': 'bg-red-50 border-red-200 hover:bg-red-100'
                                };

                                return (
                                    <div
                                        key={idx}
                                        className={`aspect-square p-2 rounded-lg border transition-colors relative group cursor-pointer ${bgColors[loadStatus]} ${isToday ? 'ring-2 ring-brand-pink ring-offset-1' : 'border-gray-100'}`}
                                        title={`${dailyHours} hours scheduled`}
                                    >
                                        <span className={`text-sm font-bold ${isToday ? 'text-brand-pink' : 'text-gray-700'}`}>
                                            {date.getDate()}
                                        </span>

                                        {dailyHours > 0 && (
                                            <div className="mt-1">
                                                <div className="flex items-center gap-1 text-xs font-bold text-gray-600">
                                                    <ClockIcon className="w-3 h-3" />
                                                    {dailyHours}h
                                                </div>
                                                {loadStatus === 'heavy' && (
                                                    <AlertTriangleIcon className="w-4 h-4 text-red-500 absolute top-2 right-2" />
                                                )}
                                            </div>
                                        )}

                                        {/* Hover Tooltip for Orders */}
                                        {dailyHours > 0 && (
                                            <div className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white shadow-xl rounded-lg p-3 border border-gray-200 text-xs hidden group-hover:block animate-in fade-in zoom-in-95">
                                                <p className="font-bold mb-1 border-b pb-1">Orders Due:</p>
                                                {orders.filter(o => o.dueDate === dateStr).map(o => (
                                                    <div key={o.id} className="flex justify-between py-0.5">
                                                        <span className="truncate max-w-[70%]">{o.customerName}</span>
                                                        <span className="text-gray-500">{o.estimatedHours}h</span>
                                                    </div>
                                                ))}
                                                {dailyHours > settings.maxHoursPerDay && (
                                                    <p className="text-red-600 font-bold mt-2 flex items-center gap-1">
                                                        <AlertTriangleIcon className="w-3 h-3" />
                                                        Overbooked!
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-green-100 border border-green-200"></div>
                                <span>Light Load</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-yellow-100 border border-yellow-200"></div>
                                <span>Moderate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded bg-red-100 border border-red-200"></div>
                                <span>Heavy / Overbooked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ToolContainer>
    );
};
