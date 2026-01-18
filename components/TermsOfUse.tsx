
import React from 'react';
import { Footer } from './Footer';
import type { ToolId } from './utils/slugs';

interface TermsOfUseProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="p-4 sm:p-6 md:p-10 fade-in">
            {breadcrumbs}
            <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-brand-border">
                <div className="text-center mb-10">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title">Terms of Use</h1>
                    <p className="mt-2 text-sm text-brand-text-body/60">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose max-w-none text-brand-text-body/90 leading-relaxed space-y-4">
                    <h2 className="font-serif text-2xl font-bold text-brand-text-title">1. Agreement to Terms</h2>
                    <p>
                        By accessing and using Sweety's Bakery Tools (the "Website"), you agree to be bound by these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the Website.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">2. Use of Tools</h2>
                    <p>
                        All tools, calculators, and content provided on this Website are for informational and educational purposes only. They are provided free of charge and are intended to assist home bakers and professionals.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">3. No Warranty</h2>
                    <p>
                        The Website and its tools are provided on an "as is" and "as available" basis. While we strive for accuracy, we make no warranties, express or implied, regarding the accuracy, reliability, or completeness of any information or calculations. Ingredient prices, measurements, and conversions can vary. You should always double-check your calculations and results. Your use of the Website is at your own risk.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">4. Limitation of Liability</h2>
                    <p>
                        In no event shall Sweety's Bakery Tools, its owners, or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Website or its tools. This includes, but is not limited to, any financial loss, loss of profits, or errors in baking resulting from reliance on the information provided.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">5. Intellectual Property</h2>
                    <p>
                        The content, design, and branding of the Website are the property of Sweety's Bakery Tools and are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any part of the Website without our express written permission.
                    </p>

                    <h2 className="font-serif text-2xl font-bold text-brand-text-title mt-8">6. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. We will post the revised Terms on this page. By continuing to use the Website after such changes have been made, you agree to be bound by the revised Terms.
                    </p>
                </div>
            </div>


        </div>
    );
};