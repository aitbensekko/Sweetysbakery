
import React, { useState } from 'react';
import { Footer } from './Footer';
import type { ToolId } from './utils/slugs';
import { MailIcon, MapPinIcon, WhatsAppIcon } from './Icons';

const inputStyles = "w-full px-4 py-2.5 bg-white border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200 text-brand-text-body";

interface ContactUsProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

const HeaderMailIcon: React.FC = () => (
    <svg className="w-16 h-16 text-brand-pink mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);


export const ContactUs: React.FC<ContactUsProps> = ({ setActiveTool, breadcrumbs }) => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border">
                <div className="text-center mb-10">
                    <HeaderMailIcon />
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title mt-4">Get in Touch</h1>
                    <p className="mt-4 text-lg text-brand-text-body/80 max-w-2xl mx-auto">
                        Have a question, a suggestion for a new tool, or just want to say hello? We'd love to hear from you!
                    </p>
                </div>

                <div className="mb-10 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-center text-sm">
                    <a href="mailto:contact.sbakery@gmail.com" className="group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors">
                        <MailIcon className="w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors" />
                        <div>
                            <h3 className="font-bold text-brand-text-title">Email Us Directly</h3>
                            <span className="text-brand-text-body">contact.sbakery@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://wa.me/212719432824" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors">
                        <WhatsAppIcon className="w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors" />
                        <div>
                            <h3 className="font-bold text-brand-text-title">Chat on WhatsApp</h3>
                            <span className="text-brand-text-body">0719-432824</span>
                        </div>
                    </a>
                    <a href="https://share.google/DDxukMXDhbdgC97mE" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-brand-text-body hover:text-brand-pink transition-colors">
                        <MapPinIcon className="w-8 h-8 text-brand-pink/80 group-hover:text-brand-pink transition-colors" />
                        <div>
                            <h3 className="font-bold text-brand-text-title">Our Location</h3>
                            <span className="text-brand-text-body">View on Google Maps</span>
                        </div>
                    </a>
                </div>

                <div className="text-center mb-10 border-t border-brand-border pt-8">
                    <p className="text-brand-text-body/80">Or fill out the form below:</p>
                </div>

                {submitted ? (
                    <div className="text-center p-12 bg-brand-pink-light rounded-xl">
                        <h3 className="font-serif text-2xl font-bold text-brand-text-title">Thank you!</h3>
                        <p className="mt-2 text-brand-text-body/90">Your message has been sent. We'll get back to you as soon as we can.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-brand-text-title mb-2">Your Name</label>
                            <input type="text" id="name" required className={inputStyles} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-brand-text-title mb-2">Your Email</label>
                            <input type="email" id="email" required className={inputStyles} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-brand-text-title mb-2">Message</label>
                            <textarea id="message" rows={6} required className={inputStyles}></textarea>
                        </div>
                        <div className="text-center pt-2">
                            <button type="submit" className="bg-brand-pink text-white font-bold py-3 px-10 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </button>
                        </div>
                    </form>
                )}

            </div>


        </div>
    );
};