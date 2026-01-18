import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ContactForm } from '../../components/ContactForm';
import { FooterWrapper } from './FooterWrapper';
import { ArrowLeftIcon } from '../../components/Icons';

export const metadata: Metadata = {
    title: "Best Custom Cakes in Marrakech | Sweety's Bakery - Order Online",
    description: "Looking for the best custom cakes in Marrakech? Sweety's Bakery offers delicious, handcrafted wedding cakes, birthday cakes, and pastries. Order online today!",
    alternates: {
        canonical: 'https://sweetysbakery.com/marrakech-custom-cakes/',
    },
    openGraph: {
        title: "Best Custom Cakes in Marrakech | Sweety's Bakery",
        description: "Handcrafted wedding & birthday cakes in Marrakech. Order now!",
        images: ['https://sweetysbakery.com/images/about-hero.png'],
        url: 'https://sweetysbakery.com/marrakech-custom-cakes',
        type: 'website',
    }
};

const galleryImages = [
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(5).JPG',
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(15).JPG',
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(25).JPG',
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(35).JPG',
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(45).JPG',
    'https://sweetysbakery.com/images/Sweeetys%20Bakery%20IMG%20(55).JPG',
];

export default function MarrakechCustomCakesPage() {
    // Schema definition
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Bakery",
        "name": "Sweety's Bakery",
        "image": "https://sweetysbakery.com/images/about-hero.png",
        "priceRange": "$$",
        "telephone": "+212 600-000000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Marrakech",
            "addressLocality": "Marrakech",
            "addressRegion": "Marrakech-Safi",
            "addressCountry": "MA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 31.6295,
            "longitude": -7.9811
        },
        "url": "https://sweetysbakery.com/marrakech-custom-cakes",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "20:00"
            }
        ],
        "servesCuisine": "Bakery, Cakes, Pastries",
        "areaServed": "Marrakech"
    };

    return (
        <div className="bg-brand-background min-h-screen flex flex-col font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="flex-grow">
                {/* Nav */}
                <nav className="p-4 md:p-6 max-w-7xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-brand-pink font-bold hover:underline">
                        <ArrowLeftIcon className="w-5 h-5" />
                        Back to Home
                    </Link>
                </nav>

                <main className="max-w-5xl mx-auto px-4 py-8 md:py-12">
                    {/* Hero */}
                    <header className="text-center mb-16 fade-in">
                        <span className="text-brand-pink font-bold tracking-wider uppercase text-sm mb-4 block">Authentic & Delicious</span>
                        <h1 className="font-serif text-4xl md:text-6xl font-bold text-brand-text-title mb-6 leading-tight">
                            Custom Cakes in <span className="text-brand-pink">Marrakech</span>
                        </h1>
                        <p className="text-lg md:text-xl text-brand-text-body/80 max-w-2xl mx-auto mb-8">
                            Make your celebration unforgettable with a bespoke cake from Sweety's Bakery.
                            From elegant wedding tiers to whimsical birthday creations, we bake your dreams into reality.
                        </p>
                        <a href="#contact" className="inline-block bg-brand-pink text-white font-bold py-4 px-10 rounded-full shadow-lg hover:bg-brand-pink-dark hover:scale-105 transition-all transform">
                            Request a Quote
                        </a>
                    </header>

                    {/* Gallery grid */}
                    <section className="mb-20">
                        <h2 className="font-serif text-3xl font-bold text-brand-text-title text-center mb-10">Our Latest Creations</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {galleryImages.map((img, idx) => (
                                <div key={idx} className="aspect-square rounded-2xl overflow-hidden shadow-md group relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                    <img
                                        src={img}
                                        alt={`Custom cake design Marrakech ${idx + 1}`}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/?tool=my-art" className="text-brand-pink font-bold underline hover:text-brand-pink-dark">View Full Gallery</Link>
                        </div>
                    </section>

                    {/* Content Split */}
                    <section className="mb-20 grid md:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand-border">
                        <div className="prose prose-lg text-brand-text-body/90">
                            <h2 className="font-serif text-3xl font-bold text-brand-text-title text-brand-pink mb-6">Why Choose Sweety's?</h2>
                            <p>
                                At Sweety's Bakery, we believe a cake should taste even better than it looks.
                                Located in the heart of Marrakech, we combine traditional French pastry techniques with local flavors.
                            </p>
                            <ul className="space-y-4 list-none pl-0">
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-pink text-xl">✓</span>
                                    <span><strong>Premium Ingredients:</strong> Real butter, Belgian chocolate, and fresh local fruits.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-pink text-xl">✓</span>
                                    <span><strong>Custom Design:</strong> tailored to your theme, colors, and style.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-brand-pink text-xl">✓</span>
                                    <span><strong>Reliable Delivery:</strong> We deliver safely across Marrakech.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                            <img src="https://sweetysbakery.com/images/about-hero.png" alt="Sweety's Bakery Marrakech" className="w-full h-full object-cover" />
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="max-w-2xl mx-auto text-center">
                        <h2 className="font-serif text-4xl font-bold text-brand-text-title mb-4">Order Your Cake</h2>
                        <p className="text-brand-text-body/70 mb-10 text-lg">
                            Ready to make your event sweeter? Fill out the form below or contact us via WhatsApp to discuss your custom order.
                        </p>

                        <div className="bg-white p-6 md:p-10 rounded-2xl border border-brand-border shadow-xl text-left">
                            <ContactForm />
                        </div>
                    </section>
                </main>
            </div>


        </div>
    );
}
