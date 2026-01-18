import Link from 'next/link';
import { BookOpenIcon, ScaleIcon, DollarSignIcon, ArrowRightIcon } from './Icons';

interface RelatedItem {
    title: string;
    description: string;
    href: string;
    icon: any;
    color: string;
}

interface RelatedContentProps {
    items?: RelatedItem[];
}

const defaultItems: RelatedItem[] = [
    {
        title: 'Recipe Scaler',
        description: 'Scale any recipe up or down perfectly',
        href: '/tools/recipe-scaler',
        icon: ScaleIcon,
        color: 'bg-blue-50 text-blue-600'
    },
    {
        title: 'Cost Calculator',
        description: 'Calculate pricing for your baked goods',
        href: '/tools/cake-pricing-calculator',
        icon: DollarSignIcon,
        color: 'bg-green-50 text-green-600'
    },
    {
        title: 'Master Guide',
        description: 'Complete sourdough mastery framework',
        href: '/dashboard/guide',
        icon: BookOpenIcon,
        color: 'bg-orange-50 text-orange-600'
    }
];

export default function RelatedContent({ items = defaultItems }: RelatedContentProps) {
    return (
        <section className="mt-16 pt-12 border-t border-stone-200 print:hidden">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900 mb-1">You Might Also Like</h3>
                    <p className="text-stone-500 text-sm">Continue your baking journey</p>
                </div>
                <Link href="/tools" className="text-sm font-bold text-brand-pink hover:underline flex items-center gap-1">
                    View all <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <Link key={index} href={item.href} className="group">
                        <div className="bg-white p-6 rounded-[2rem] border border-stone-100 hover:border-brand-pink/30 hover:shadow-lg transition-all">
                            <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg text-stone-900 mb-2">{item.title}</h4>
                            <p className="text-sm text-stone-500">{item.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
