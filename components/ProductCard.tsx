import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AffiliateProduct } from '../data/affiliateProducts';

interface ProductCardProps {
  product: AffiliateProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (

    <Link
      href={`/products/${product.slug}`}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col h-full border border-transparent hover:border-brand-pink/20"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 flex-shrink-0" style={{ height: '250px' }}>
        <Image
          src={product.imageUrl}
          alt={product.imageAlt || product.name}
          fill
          className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient for text readability if needed, or just a nice touch */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-brand-pink text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold text-brand-text-title mb-2 group-hover:text-brand-pink transition-colors line-clamp-2">
          {product.name}
        </h3>

        {product.rating && (
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-gray-200 fill-current'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs text-gray-500 font-medium">({product.rating.toFixed(1)})</span>
          </div>
        )}

        <p className="text-brand-text-body text-sm line-clamp-3 mb-4 flex-grow">
          {product.excerpt}
        </p>

        {product.lastUpdated && (
          <div className="text-xs text-gray-400 mb-3 font-medium">
            Last Updated: {new Date(product.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </div>
        )}

        {/* Action */}
        <div className="mt-auto pt-4 flex items-center justify-between text-brand-pink font-bold text-xs tracking-wider uppercase group-hover:underline decoration-2 underline-offset-4 transition-all">
          <span>View Details</span>
          <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300">
            <svg className="w-4 h-4 transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

