import React from 'react';
import { AffiliateProduct } from '../data/affiliateProducts';
import { StarIcon, CheckCircleIcon } from './Icons';

interface ComparisonTableProps {
    title?: string;
    products: AffiliateProduct[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, products }) => {
    if (!products || products.length === 0) return null;

    return (
        <div className="my-12 overflow-hidden rounded-xl border border-brand-border shadow-sm bg-white">
            {title && (
                <div className="bg-brand-pink/10 px-6 py-4 border-b border-brand-border">
                    <h3 className="font-serif text-2xl font-bold text-brand-text-title text-center">{title}</h3>
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b border-brand-border text-sm uppercase tracking-wide text-brand-text-body/70">
                            <th className="p-4 font-semibold text-center w-24">Image</th>
                            <th className="p-4 font-semibold">Product Name</th>
                            <th className="p-4 font-semibold text-center hidden md:table-cell">Rating</th>
                            <th className="p-4 font-semibold hidden sm:table-cell">Key Feature</th>
                            <th className="p-4 font-semibold text-center w-40">Price</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-brand-border">
                        {products.map((product, index) => (
                            <tr key={product.id} className="hover:bg-brand-pink/5 transition-colors group">
                                <td className="p-4 text-center">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-lg border border-brand-border overflow-hidden flex items-center justify-center p-1">
                                        <img
                                            src={product.imageUrl}
                                            alt={product.imageAlt || product.name}
                                            className="max-w-full max-h-full object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                    {index === 0 && (
                                        <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-100 text-yellow-800 text-[10px] uppercase font-bold rounded-full border border-yellow-200">
                                            Best Overall
                                        </span>
                                    )}
                                </td>
                                <td className="p-4">
                                    <h4 className="font-bold text-brand-text-title text-lg leading-tight group-hover:text-brand-pink transition-colors">
                                        <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer sponsored nofollow">
                                            {product.name}
                                        </a>
                                    </h4>
                                    <p className="text-sm text-brand-text-body/70 mt-1 md:hidden">{product.rating} ★</p>
                                </td>
                                <td className="p-4 text-center hidden md:table-cell">
                                    <div className="flex items-center justify-center gap-1 font-bold text-brand-text-title">
                                        <span className="text-yellow-400 fill-current"><StarIcon className="w-5 h-5 fill-current" /></span>
                                        <span>{product.rating}</span>
                                    </div>
                                    <div className="text-xs text-brand-text-body/50 mt-1">Review Score</div>
                                </td>
                                <td className="p-4 hidden sm:table-cell text-sm text-brand-text-body">
                                    {product.features && product.features[0] ? (
                                        <div className="flex items-start gap-2">
                                            <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                                            <span>{product.features[0]}</span>
                                        </div>
                                    ) : (
                                        <span className="italic text-gray-400">--</span>
                                    )}
                                </td>
                                <td className="p-4 text-center">
                                    <a
                                        href={product.affiliateLink}
                                        target="_blank"
                                        rel="noopener noreferrer sponsored nofollow"
                                        className="inline-block bg-brand-pink text-white font-bold py-2 px-6 rounded-full shadow-md hover:bg-brand-pink-dark hover:shadow-lg transition-all transform hover:-translate-y-0.5 whitespace-nowrap text-sm"
                                    >
                                        Check Price
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="bg-gray-50 px-6 py-3 text-xs text-center text-gray-500 border-t border-brand-border">
                * We earn a commission if you click this link and make a purchase at no additional cost to you.
            </div>
        </div>
    );
};
