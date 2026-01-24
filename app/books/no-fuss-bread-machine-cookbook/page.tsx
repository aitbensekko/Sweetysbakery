import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';

export const metadata: Metadata = {
    title: 'No-Fuss Bread Machine Cookbook Review | Hands-Off Baking Guide',
    description: 'Looking for the best bread machine cookbook? Read our review of Michelle Anderson\'s "The No-Fuss Bread Machine Cookbook". Perfect for beginners, hands-off recipes for 1lb, 1.5lb, and 2lb loaves.',
    keywords: ['bread machine cookbook', 'no fuss bread machine cookbook', 'best bread machine recipes', 'Michelle Anderson cookbook', 'bread machine troubleshooting'],
    openGraph: {
        title: 'The No-Fuss Bread Machine Cookbook Review',
        description: 'Finally, a bread machine cookbook that actually makes baking easy. Check out our in-depth review of this kitchen essential.',
        images: ['/images/books/no-fuss-bread-machine-cookbook.png'],
        type: 'book',
    },
};

const affiliateLink = "https://www.amazon.com/No-Fuss-Bread-Machine-Cookbook-Hands-Off/dp/1623157536?crid=1F9LQ8SI8I09F&dib=eyJ2IjoiMSJ9.gBerr9lVTuq8HqyCyxPtfw3PAl1WeSQIgTC3wN-RGRNsec-niU3Qbm0ejS4QJfPumzdbWgFRv0YyGRE7Szdi0154JqwY9YV2tliYZ4memDfmkdIGCLufZEZrRY5Lx4VTU001OoNHIMVYs57dLMksFNs7K_Um1Eg5HibM3Chd6I94_BxkXojh0YSHBdkSezOzxazIaLIPKsG39Os2JPUTNJPxdqyAvCLl7wGrAsWQUpxUD0AYkW1J1NI7zLWyl_V8iowlu4Kp4FPHBlnsXC_UWnKUj17TWCgOWqhmcggTtz0.b7XJYMqtKvzSiD_UqDuTXXbKvLUNuMbL-Iy10cVlUaM&dib_tag=se&keywords=recipe+baking+book&qid=1769254703&sprefix=recipe+baking%2Caps%2C294&sr=8-1&linkCode=ll1&tag=lahcenaitbens-20&linkId=f015f14a08fb577608d8b8ed93687ee6&language=en_US&ref_=as_li_ss_tl";

export default function NoFussBreadMachineBookPage() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Book',
                '@id': 'https://sweetysbakery.com/books/no-fuss-bread-machine-cookbook/#book',
                name: 'The No-Fuss Bread Machine Cookbook: Hands-Off Recipes for Perfect Homemade Loaves',
                headline: 'The No-Fuss Bread Machine Cookbook',
                description: 'A cookbook designed to simplify homemade bread baking with hands-off recipes suitable for various loaf sizes.',
                image: 'https://sweetysbakery.com/images/books/no-fuss-bread-machine-cookbook.png',
                author: {
                    '@type': 'Person',
                    name: 'Michelle Anderson'
                },
                isbn: '1623157536',
                publisher: {
                    '@type': 'Organization',
                    name: 'Rockridge Press'
                },
                datePublished: '2016-08-30',
                inLanguage: 'en',
                workExample: {
                    '@type': 'Book',
                    isbn: '1623157536',
                    bookEdition: '1st Edition',
                    bookFormat: 'https://schema.org/Paperback',
                    potentialAction: {
                        '@type': 'ReadAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate: affiliateLink,
                            actionPlatform: [
                                'http://schema.org/DesktopWebPlatform',
                                'http://schema.org/IOSPlatform',
                                'http://schema.org/AndroidPlatform'
                            ]
                        },
                        expectsAcceptanceOf: {
                            '@type': 'Offer',
                            category: 'purchase',
                            availability: 'https://schema.org/InStock',
                            price: '14.99',
                            priceCurrency: 'USD',
                            seller: {
                                '@type': 'Organization',
                                name: 'Amazon'
                            }
                        }
                    }
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.4',
                    reviewCount: '750',
                    bestRating: '5',
                    worstRating: '1'
                }
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: 'https://sweetysbakery.com'
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Books',
                        item: 'https://sweetysbakery.com/books'
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: 'No-Fuss Bread Machine Cookbook',
                        item: 'https://sweetysbakery.com/books/no-fuss-bread-machine-cookbook'
                    }
                ]
            },
            {
                '@type': 'Review',
                itemReviewed: {
                    '@id': 'https://sweetysbakery.com/books/no-fuss-bread-machine-cookbook/#book'
                },
                reviewRating: {
                    '@type': 'Rating',
                    ratingValue: '5',
                    bestRating: '5'
                },
                author: {
                    '@type': 'Person',
                    name: "Sweety's Bakery Team"
                },
                reviewBody: 'Finally, a bread machine cookbook that actually makes baking easy. The recipes are perfectly calibrated for 1lb, 1.5lb, and 2lb loaves.'
            }
        ]
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-brand-text-body">
            <Script
                id="book-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />


            {/* Hero Section */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        {/* Image Column */}
                        <div className="relative mb-10 lg:mb-0 transform hover:scale-105 transition-transform duration-500">
                            <div className="absolute inset-0 bg-brand-pink/20 rounded-3xl blur-3xl transform rotate-3"></div>
                            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
                                <Image
                                    src="/images/books/no-fuss-bread-machine-cookbook.png"
                                    alt="The No-Fuss Bread Machine Cookbook Cover"
                                    width={600}
                                    height={800}
                                    priority
                                    className="w-full h-auto"
                                />
                            </div>
                            {/* Trust Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-brand-text-title font-bold px-6 py-4 rounded-full shadow-lg transform rotate-12 border-4 border-white">
                                <div className="text-xs uppercase tracking-wider mb-1">Amazon Rating</div>
                                <div className="text-2xl flex items-center">
                                    4.4 <span className="ml-1 text-base">★</span>
                                </div>
                            </div>
                        </div>

                        {/* Content Column */}
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-bold text-sm uppercase tracking-wide mb-6">
                                Best Selling Baking Book
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-brand-text-title mb-6 leading-tight">
                                Finally, a Bread Machine Cookbook That Actually Is <span className="text-brand-pink">"No Fuss"</span>
                            </h1>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Unlock the full potential of your bread machine with Michelle Anderson's hands-off guide. Whether you have a <b>1lb, 1.5lb, or 2lb machine</b>, this book ensures perfect, fluffy loaves every time without the guesswork.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={affiliateLink}
                                    target="_blank"
                                    rel="noopener noreferrer sponsored"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-brand-pink hover:bg-brand-pink/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    Check Price on Amazon
                                    <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </a>
                                <Link href="/blog" className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-text-title/10 text-lg font-bold rounded-full text-brand-text-title bg-transparent hover:bg-brand-text-title/5 transition-all">
                                    Read Blog Reviews
                                </Link>
                            </div>

                            <p className="mt-6 text-sm text-gray-400 italic">
                                *As an Amazon Associate, we earn from qualifying purchases. This helps support our bakery!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Features Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Dark Banner */}
                    <div className="bg-slate-700 rounded-3xl overflow-hidden shadow-xl mb-20">
                        <div className="flex flex-col md:flex-row items-stretch">
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative min-h-[300px]">
                                <Image
                                    src="/images/blog/bread.png"
                                    alt="Stack of fresh bread slices"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <div className="w-full md:w-3/5 p-8 md:p-12 text-center md:text-left">
                                <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed">
                                    Whether you own a <span className="font-bold text-brand-pink">1-pound</span>, <span className="font-bold text-brand-pink">1.5-pound</span>, or <span className="font-bold text-brand-pink">2-pound</span> bread machine, all you'll need are a few basic ingredients to create delicious breads with these fail-proof, set-and-forget recipes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div>
                        <h2 className="text-2xl font-bold text-brand-text-title mb-8">Master your bread machine with:</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="group cursor-pointer">
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src="/images/blog/moist-banana-bread-recipe.png"
                                        alt="Variety of bread recipes"
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-bold text-brand-text-title mb-2">A range of flavorful recipes</h3>
                                <p className="text-gray-600">Explore a variety of sweet and savory breads, from classic white to cinnamon raisin.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="group cursor-pointer">
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src="/images/blog/easy-no-knead-bread.png"
                                        alt="Bread machine essentials"
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-bold text-brand-text-title mb-2">Bread machine essentials</h3>
                                <p className="text-gray-600">Get the most out of your bread machine with tips on cycles, settings, and ingredients.</p>
                            </div>

                            {/* Card 3 */}
                            <div className="group cursor-pointer">
                                <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                                    <Image
                                        src="/images/blog/sourdough_boule.png"
                                        alt="Troubleshooting advice"
                                        fill
                                        className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <h3 className="text-xl font-bold text-brand-text-title mb-2">Troubleshooting advice</h3>
                                <p className="text-gray-600">Learn how to solve common bread-making problems like sunken tops or dense loaves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sneak Peek Section */}
            <div className="py-16 bg-brand-pink/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="lg:w-1/2 pr-8 mb-10 lg:mb-0">
                            <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-6">What You'll Be Baking</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Beyond just basic white bread (though it does that perfectly!), here are some of the mouth-watering categories included:
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Classic Sourdough (Yes, in a machine!)",
                                    "Rich & Sweet Holiday Loaves",
                                    "Savory Cheese & Herb Breads",
                                    "Vegetable-Infused Breads (Spinach, Tomato)",
                                    "Fruit & Nut Breakfast Loaves"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-gray-700 font-medium">
                                        <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-10">
                                <a href={affiliateLink} target="_blank" rel="noopener noreferrer sponsored" className="text-brand-pink font-bold hover:underline text-lg">
                                    See full table of contents on Amazon &rarr;
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative h-96 rounded-2xl overflow-hidden shadow-xl">
                            {/* Placeholder for recipe collage or just a nice bread image */}
                            <Image
                                src="/images/blog/bread.png" // Reusing an existing bread asset for now
                                alt="Freshly baked bread collection"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <div className="text-sm font-bold uppercase tracking-wider mb-2">Featured Recipe</div>
                                    <div className="text-2xl font-serif font-bold">Try the "Eggnog Bread"</div>
                                    <p className="text-white/80 mt-2">A fan favorite for the holiday season included in the book.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials/Review Summary */}
            <div className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-serif font-bold text-brand-text-title mb-12">What Bakers Are Saying</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-4">"Finally I can use my bread machine for something other than just dough! The recipes actually work and taste homemade, not like cardboard."</p>
                            <div className="text-sm font-bold text-brand-text-title">— Verified Amazon Purchaser</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <div className="flex text-yellow-400 mb-4">★★★★★</div>
                            <p className="text-gray-700 italic mb-4">"I love that it gives measurements for my small 1lb machine. It's so hard to find recipes that don't overflow my pan. This book is a life saver."</p>
                            <div className="text-sm font-bold text-brand-text-title">— Verified Amazon Purchaser</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 overflow-hidden">
                {/* Background with Gradient and Texture */}
                <div className="absolute inset-0 bg-brand-text-title">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-text-title via-gray-900 to-black opacity-90"></div>
                    <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-pink rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="relative inline-block mb-8">
                        <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brand-pink to-orange-400 opacity-70 blur opacity-40 animate-tilt"></span>
                        <span className="relative inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm uppercase tracking-widest shadow-lg">
                            Limited Time Offer
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
                        Start Baking <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-orange-400">Better Bread</span> Today
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Stop letting your bread machine gather dust. Turn it into your bakery's best employee with recipes that actually work.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href={affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white transition-all duration-200 bg-brand-pink rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-pink hover:bg-brand-pink/90 hover:scale-105 shadow-2xl shadow-brand-pink/30 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                            <span className="relative flex items-center gap-3">
                                Get Your Copy Now
                                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </a>
                        <span className="text-gray-400 text-sm italic">
                            Available on Amazon Prime
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
