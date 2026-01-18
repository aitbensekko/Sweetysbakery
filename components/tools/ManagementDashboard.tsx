import React, { useEffect, useRef } from 'react';
import { ToolContainer } from './ToolContainer';
// Fix: Corrected import path for the ToolId type.
import type { ToolId } from '../utils/slugs';
import { ClipboardIcon, CalendarIcon, DocumentIcon, ClockIcon, ChecklistIcon, MyArtIcon, InfoIcon } from '../Icons';
import { recipeDatabase } from '../../data/recipeDatabase';
import { allImages } from './MyArtGallery';
import { Chart, BarController, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';

interface ManagementDashboardProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const StatCard: React.FC<{ title: string, value: string, icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-xl border border-brand-border">
        <div className="flex items-center gap-4">
            <div className="bg-brand-pink-light text-brand-pink p-3 rounded-full">
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold text-brand-text-body">{title}</p>
                <p className="text-2xl font-bold text-brand-text-title">{value}</p>
            </div>
        </div>
    </div>
);

const ToolLinkCard: React.FC<{ title: string, description: string, icon: React.ReactNode, onClick: () => void }> = ({ title, description, icon, onClick }) => (
    <button onClick={onClick} className="bg-white p-6 rounded-xl border border-brand-border text-left w-full hover:shadow-lg hover:border-brand-pink/30 transition-all duration-300">
        <div className="flex items-start gap-4">
            <div className="bg-brand-pink-light text-brand-pink p-3 rounded-full flex-shrink-0 mt-1">
                {icon}
            </div>
            <div>
                <h3 className="text-lg font-bold text-brand-text-title">{title}</h3>
                <p className="text-sm text-brand-text-body/80 mt-1">{description}</p>
            </div>
        </div>
    </button>
);

const RecipeCategoryChart: React.FC = () => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);

    useEffect(() => {
        Chart.register(BarController, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

        if (chartRef.current) {
            const categories = Object.keys(recipeDatabase);
            const recipeCounts = categories.map(cat => recipeDatabase[cat].length);

            const data = {
                labels: categories,
                datasets: [{
                    label: 'Number of Recipes',
                    data: recipeCounts,
                    backgroundColor: 'rgba(230, 90, 136, 0.6)',
                    borderColor: 'rgba(230, 90, 136, 1)',
                    borderWidth: 1,
                    borderRadius: 4,
                }]
            };

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            chartInstanceRef.current = new Chart(chartRef.current, {
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Recipe Count per Category', font: { size: 16, family: "'Lato', sans-serif" } }
                    },
                    scales: {
                        y: { beginAtZero: true, grid: { color: '#EDE7E4' } },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, []);

    return <div className="bg-white p-4 rounded-xl border border-brand-border h-80"><canvas ref={chartRef}></canvas></div>;
};

export const ManagementDashboard: React.FC<ManagementDashboardProps> = ({ setActiveTool, breadcrumbs }) => {
    const totalRecipes = Object.values(recipeDatabase).reduce((sum, recipes) => sum + recipes.length, 0);
    const totalImages = allImages.length;

    return (
        <ToolContainer
            title="Free Home Bakery Management Dashboard"
            description="Your free home bakery dashboard to manage orders, schedules, and recipes. The perfect starting point for your cottage food business."
            setActiveTool={setActiveTool}
            breadcrumbs={breadcrumbs}
            toolId="management-dashboard"
        >
            <div className="space-y-8">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">Quick Stats</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <StatCard title="Active Orders" value="3" icon={<ClipboardIcon className="w-6 h-6" />} />
                        <StatCard title="Tasks for Today" value="5" icon={<CalendarIcon className="w-6 h-6" />} />
                        <StatCard title="Total Recipes" value={totalRecipes.toString()} icon={<ChecklistIcon className="w-6 h-6" />} />
                        <StatCard title="Saved Recipes" value="1" icon={<DocumentIcon className="w-6 h-6" />} />
                        <StatCard title="Gallery Images" value={totalImages.toString()} icon={<MyArtIcon className="w-6 h-6" />} />
                        <StatCard title="Running Timers" value="0" icon={<ClockIcon className="w-6 h-6" />} />
                    </div>
                </div>

                <div>
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">Content Overview</h2>
                    <RecipeCategoryChart />
                </div>

                <div>
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mb-4">Free Bakery Management Software Tools</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <ToolLinkCard
                            title="Order Management"
                            description="Track customer orders from placement to pickup."
                            icon={<ClipboardIcon className="w-6 h-6" />}
                            // Fix: Corrected toolId from 'orderManagement' to 'order-management' to match ToolId type.
                            onClick={() => setActiveTool('order-management')}
                        />
                        <ToolLinkCard
                            title="Baker's Schedule"
                            description="Organize your baking tasks and create efficient schedules."
                            icon={<CalendarIcon className="w-6 h-6" />}
                            // Fix: Corrected toolId from 'bakerSchedule' to 'baker-schedule' to match ToolId type.
                            onClick={() => setActiveTool('baker-schedule')}
                        />
                        <ToolLinkCard
                            title="Digital Notebook"
                            description="A digital space to save your recipes and notes."
                            icon={<DocumentIcon className="w-6 h-6" />}
                            // Fix: Corrected toolId from 'digitalNotebook' to 'digital-notebook' to match ToolId type.
                            onClick={() => setActiveTool('digital-notebook')}
                        />
                        <ToolLinkCard
                            title="Multiple Timers"
                            description="Keep track of multiple bakes at once."
                            icon={<ClockIcon className="w-6 h-6" />}
                            // Fix: Corrected toolId from 'multipleTimer' to 'multiple-timer' to match ToolId type.
                            onClick={() => setActiveTool('multiple-timer')}
                        />
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-brand-border">
                    <h3 className="font-serif font-bold text-2xl mb-4 text-brand-text-title">Tips for Effective Bakery Management</h3>
                    <ul className="list-disc pl-5 text-brand-text-body/90 leading-relaxed space-y-2">
                        <li><strong>Consistency is Key:</strong> Use tools like the Baker's Percentage and Recipe Scaler to ensure your products are consistent every single time. This builds customer trust.</li>
                        <li><strong>Know Your Numbers:</strong> Regularly use the Cake Pricing Calculator to ensure you're profitable. Keep track of rising ingredient costs and adjust your prices accordingly.</li>
                        <li><strong>Master Your Schedule:</strong> A well-planned schedule prevents chaos. Use the Baker's Schedule to work backwards from deadlines and find efficiencies in your workflow.</li>
                        <li><strong>Customer Service Matters:</strong> The Order Management tool helps you stay organized, preventing missed orders or mixed-up details. Clear communication and reliable service create loyal customers.</li>
                    </ul>
                </div>
            </div>
            <ManagementDashboardContent />
        </ToolContainer>
    );
};

const ManagementDashboardContent: React.FC = () => (
    <div className="mt-12 grid md:grid-cols-2 gap-8 pt-8 border-t border-brand-border">
        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title flex items-center gap-2">
                <InfoIcon className="w-6 h-6 text-brand-pink" />
                How to Use Your Bakery Dashboard
            </h3>
            <ol className="space-y-3 text-sm text-brand-text-body/80 list-decimal pl-4 marker:text-brand-pink marker:font-bold">
                <li><strong>Track Active Orders:</strong> See a quick snapshot of how many orders are currently in progress. Click "Order Management" to see details.</li>
                <li><strong>Monitor Daily Tasks:</strong> Check your "Tasks for Today" to stay on top of your production schedule.</li>
                <li><strong>Manage Recipes:</strong> View your total recipe count and access your "Digital Notebook" to save new creations.</li>
                <li><strong>Access Tools:</strong> Use the quick links to jump to essential tools like the "Baker's Schedule" or "Multiple Timers".</li>
            </ol>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Frequently Asked Questions</h3>
            <div className="space-y-4">
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is my data saved?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Currently, this dashboard provides a session-based overview. For persistent data storage, we recommend using the specific "Digital Notebook" or "Order Management" tools which may use local storage in future updates.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Can I customize the widgets?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        The current layout is fixed to provide a balanced overview of your bakery business. We are working on customizable widgets for future versions.
                    </p>
                </details>
                <details className="group">
                    <summary className="flex justify-between items-center font-bold text-brand-text-title cursor-pointer hover:text-brand-pink transition-colors">
                        Is this free for commercial use?
                        <span className="text-brand-pink group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="text-sm text-brand-text-body/80 mt-2 leading-relaxed">
                        Yes! This dashboard is designed to be a free resource for home bakers and small bakery owners to manage their business effectively.
                    </p>
                </details>
            </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-brand-border shadow-sm">
            <h3 className="font-serif font-bold text-xl mb-4 text-brand-text-title">Why Use a Bakery Management Dashboard?</h3>
            <p className="text-sm text-brand-text-body/80 leading-relaxed mb-4">
                Running a bakery, whether it's a home-based cottage food business or a storefront, requires juggling multiple tasks. From <strong>tracking bakery sales</strong> and managing <strong>customer orders</strong> to monitoring <strong>inventory</strong> and planning your <strong>production schedule</strong>, organization is the key to success.
            </p>
            <p className="text-sm text-brand-text-body/80 leading-relaxed">
                Our <strong>free bakery business dashboard</strong> brings all these elements together in one place. It serves as your central command center, giving you instant visibility into your <strong>bakery analytics</strong> and daily workflow. By streamlining your operations, you can focus less on paperwork and more on what you love—baking delicious treats.
            </p>
        </div>
    </div>
);
