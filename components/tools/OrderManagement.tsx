import React, { useState } from 'react';
import { ToolContainer } from './ToolContainer';
import type { ToolId } from '../utils/slugs';
import { PlusCircleIcon, EditIcon, Trash2Icon, XIcon, InfoIcon } from '../Icons';
import { PremiumPromo } from '../PremiumPromo';

type Status = 'new' | 'inProgress' | 'ready' | 'completed';

interface Order {
    id: number;
    customer: string;
    details: string;
    dueDate: string;
    status: Status;
}

const initialOrders: Order[] = [
    { id: 1, customer: 'Jane Doe', details: '1x 8" Vanilla Cake with buttercream flowers', dueDate: '2024-08-15', status: 'new' },
    { id: 2, customer: 'John Smith', details: '2 dozen Chocolate Chip Cookies, 1 dozen Snickerdoodles', dueDate: '2024-08-14', status: 'inProgress' },
    { id: 3, customer: 'Emily White', details: '1x Sourdough Loaf, 6x Croissants', dueDate: '2024-08-13', status: 'ready' },
    { id: 4, customer: 'Michael Brown', details: 'Wedding Cake Tasting Box', dueDate: '2024-08-20', status: 'new' },
];

const statusConfig: { [key in Status]: { title: string, color: string } } = {
    new: { title: 'New Order', color: 'bg-blue-100 text-blue-800' },
    inProgress: { title: 'In Progress', color: 'bg-yellow-100 text-yellow-800' },
    ready: { title: 'Ready for Pickup', color: 'bg-green-100 text-green-800' },
    completed: { title: 'Completed', color: 'bg-gray-200 text-gray-600' },
};

const OrderModal: React.FC<{
    order: Omit<Order, 'id' | 'status'> | Order | null;
    onSave: (orderData: Omit<Order, 'id' | 'status'> | Order) => void;
    onClose: () => void;
}> = ({ order, onSave, onClose }) => {
    const [orderData, setOrderData] = useState(order || { customer: '', details: '', dueDate: new Date().toISOString().split('T')[0] });

    const handleSave = () => {
        if (!orderData.customer || !orderData.details || !orderData.dueDate) {
            alert("Please fill out all fields.");
            return;
        }
        onSave(orderData);
    };

    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-700">
                    <XIcon className="w-6 h-6" />
                </button>
                <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">
                    {order && 'id' in order ? 'Edit Order' : 'Add New Order'}
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1 text-brand-text-body">Customer Name</label>
                        <input type="text" value={orderData.customer} onChange={e => setOrderData({ ...orderData, customer: e.target.value })} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-brand-text-body">Order Details</label>
                        <textarea value={orderData.details} onChange={e => setOrderData({ ...orderData, details: e.target.value })} rows={3} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1 text-brand-text-body">Due Date</label>
                        <input type="date" value={orderData.dueDate} onChange={e => setOrderData({ ...orderData, dueDate: e.target.value })} className="w-full px-3 py-2 border border-brand-border rounded-md" />
                    </div>
                </div>
                <div className="mt-6 flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-lg">Cancel</button>
                    <button onClick={handleSave} className="bg-brand-pink text-white font-bold py-2 px-4 rounded-lg">Save Order</button>
                </div>
            </div>
        </div>
    );
};

interface OrderManagementProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const OrderManagement: React.FC<OrderManagementProps> = ({ setActiveTool, breadcrumbs }) => {
    const [orders, setOrders] = useState<Order[]>(initialOrders);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingOrder, setEditingOrder] = useState<Order | null>(null);

    const handleOpenModal = (order?: Order) => {
        setEditingOrder(order || null);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingOrder(null);
    };

    const handleSaveOrder = (orderData: Omit<Order, 'id' | 'status'> | Order) => {
        if ('id' in orderData && orderData.id) {
            // Editing existing order
            setOrders(orders.map(o => o.id === orderData.id ? { ...o, ...orderData } : o));
        } else {
            // Adding new order
            const newOrder: Order = {
                id: Date.now(),
                ...orderData,
                status: 'new',
            };
            setOrders([...orders, newOrder]);
        }
        handleCloseModal();
    };

    const handleDeleteOrder = (id: number) => {
        if (window.confirm("Are you sure you want to delete this order?")) {
            setOrders(orders.filter(o => o.id !== id));
        }
    };

    const handleStatusChange = (id: number, newStatus: Status) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
    };

    return (
        <ToolContainer
            title="Free Bakery Order Management System"
            description="A free and simple order management system for home bakers. Keep track of your custom cake and cookie orders from creation to completion."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="order-management"
        >
            <div className="flex justify-end mb-4">
                <button onClick={() => handleOpenModal()} className="inline-flex items-center gap-2 bg-brand-pink text-white font-bold py-2 px-4 rounded-full shadow-lg hover:opacity-90 transition-all">
                    <PlusCircleIcon className="w-5 h-5" /> Add New Order
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(Object.keys(statusConfig) as Status[]).map(status => (
                    <div key={status} className="bg-brand-pink-light/60 rounded-lg p-3">
                        <h3 className={`font-bold text-center p-2 rounded-md ${statusConfig[status].color} mb-4`}>
                            {statusConfig[status].title}
                        </h3>
                        <div className="space-y-3">
                            {orders.filter(o => o.status === status).map(order => (
                                <div key={order.id} className="bg-white p-4 rounded-lg shadow-sm border border-brand-border">
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-brand-text-title">{order.customer}</p>
                                        <div className="flex gap-1">
                                            <button onClick={() => handleOpenModal(order)} className="text-gray-400 hover:text-blue-500"><EditIcon className="w-4 h-4" /></button>
                                            <button onClick={() => handleDeleteOrder(order.id)} className="text-gray-400 hover:text-red-500"><Trash2Icon className="w-4 h-4" /></button>
                                        </div>
                                    </div>
                                    <p className="text-sm text-brand-text-body my-2">{order.details}</p>
                                    <p className="text-xs font-semibold text-brand-text-body/70">Due: {order.dueDate}</p>
                                    <select value={order.status} onChange={(e) => handleStatusChange(order.id, e.target.value as Status)} className={`w-full mt-3 p-1 text-xs font-bold rounded-md border-none appearance-none text-center ${statusConfig[order.status].color}`}>
                                        {Object.entries(statusConfig).map(([key, { title }]) => (
                                            <option key={key} value={key}>{title}</option>
                                        ))}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && <OrderModal order={editingOrder} onSave={handleSaveOrder} onClose={handleCloseModal} />}

            <div className="max-w-xl mx-auto mt-8">
                <PremiumPromo variant="inline-tool" />
            </div>

            <OrderManagementContent />
        </ToolContainer>
    );
};

const OrderManagementContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use the Order Tracker
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Add New Order:</strong> Click the "Add New Order" button and enter the customer name, details (e.g., "6-inch Vanilla Cake"), and due date.</li>
                <li><strong>Track Status:</strong> Move orders through the stages: "New", "In Progress", "Ready for Pickup", and "Completed" using the dropdown menu on each card.</li>
                <li><strong>Edit Details:</strong> Need to change a flavor or date? Click the pencil icon to update the order.</li>
                <li><strong>Stay Organized:</strong> Use this visual board to see exactly what needs to be baked this week.</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Can I export my orders?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Currently, this tool is a visual tracker for your browser session. We are working on export features (PDF/CSV) for future updates.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        How do I delete an order?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Simply click the trash can icon on the order card. You will be asked to confirm before it is permanently removed.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is there a limit to orders?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        No! You can add as many orders as you need to manage your busy bakery schedule.
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Streamline Your Bakery Orders</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Managing <strong>bakery orders</strong> can be chaotic, especially during busy holiday seasons. Our <strong>free order management system</strong> is designed specifically for home bakers and small businesses to keep everything organized.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                By using a visual <strong>Kanban-style board</strong>, you can easily see which <strong>custom cakes</strong> are in the oven, which orders are ready for pickup, and what's coming up next week. This simple yet powerful <strong>bakery order tracking tool</strong> ensures you never miss a deadline and keeps your customers happy.
            </p>
        </div>
    </div>
);
