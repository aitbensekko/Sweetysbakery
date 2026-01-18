'use client';

import React, { useState } from 'react';

const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";

export const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center p-12 bg-brand-pink-light rounded-xl border border-brand-border">
                <h3 className="font-serif text-2xl font-bold text-brand-text-title">Thank you!</h3>
                <p className="mt-2 text-brand-text-body/90">Your message has been sent. We'll get back to you as soon as we can.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-bold text-brand-text-title mb-2">Your Name</label>
                <input type="text" id="name" name="name" required className={inputStyles} />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-bold text-brand-text-title mb-2">Your Email</label>
                <input type="email" id="email" name="email" required className={inputStyles} />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-bold text-brand-text-title mb-2">Message</label>
                <textarea id="message" name="message" rows={6} required className={inputStyles}></textarea>
            </div>
            <div className="text-center pt-2">
                <button type="submit" className="bg-brand-pink text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                    Send Message
                </button>
            </div>
        </form>
    );
};
