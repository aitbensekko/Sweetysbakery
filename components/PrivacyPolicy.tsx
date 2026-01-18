import React from 'react';
import { Footer } from './Footer';
import type { ToolId } from './utils/slugs';
import { toolIdToSlug } from './utils/slugs';

interface PrivacyPolicyProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border">
                <div className="text-center mb-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Privacy Policy</h1>
                    <p className="mt-2 text-sm text-brand-text-body/60">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title">Introduction</h2>
                    <p>
                        Welcome to Sweety's Bakery Tools. We are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to it.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">Information We Collect</h2>
                    <p>
                        Our website is designed to be a free resource for the baking community. As such, we collect a minimal amount of information:
                    </p>
                    <ul>
                        <li><strong>Non-Personal Information:</strong> We do not use analytics tools, so we do not collect any personal or non-personal data about your visit. Your use of our tools is completely anonymous.</li>
                        <li><strong>User-Inputted Data:</strong> The data you enter into our calculators (e.g., ingredient costs, recipe quantities) is processed in your browser and is not stored, saved, or transmitted to our servers. Once you leave the page, this information is gone.</li>
                    </ul>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">How We Use Information</h2>
                    <p>
                        Since we do not collect or store any personal information, we do not use it for any purpose. The data you enter into the calculators is used solely to perform the calculation you requested at that moment.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">Third-Party Links</h2>
                    <p>
                        Our website may contain links to third-party websites, such as our Pinterest page. Please be aware that we are not responsible for the privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please feel free to <a href={toolIdToSlug('contact-us')} onClick={(e) => { e.preventDefault(); setActiveTool('contact-us'); }} className="font-bold text-brand-pink hover:underline">contact us</a>.
                    </p>
                </div>
            </div>


        </div>
    );
};