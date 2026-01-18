import React from 'react';
import { Footer } from './Footer';
import { ToolId } from './utils/slugs';
import Ad from './Ad';

interface DisclaimerProps {
    setActiveTool: (toolId: ToolId) => void;
    breadcrumbs: React.ReactNode;
}

export const Disclaimer: React.FC<DisclaimerProps> = ({ setActiveTool, breadcrumbs }) => {
    return (
        <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 fade-in">
            {breadcrumbs}
            <div className="bg-white rounded-2xl shadow-xl border border-brand-border overflow-hidden mb-12">
                <div className="bg-brand-pink p-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Disclaimer</h1>
                    <p className="text-white/90">Last Updated: December 2024</p>
                </div>

                <div className="p-8 sm:p-10 space-y-8 text-brand-text-body leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4">1. General Information</h2>
                        <p>
                            The information provided by Sweety's Bakery ("we," "us," or "our") on https://sweetysbakery.com (the "Site") and our mobile application is for general informational purposes only. All information on the Site and our mobile application is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site or our mobile application.
                        </p>
                    </section>

                    <div className="my-8 flex justify-center w-full bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <Ad slotId={process.env.NEXT_PUBLIC_ADSENSE_SLOT_DISCLAIMER} />
                    </div>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4">2. Affiliate Disclaimer</h2>
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                            <p className="font-medium text-yellow-800">
                                Sweety's Bakery is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                            </p>
                        </div>
                        <p className="mt-4">
                            As an Amazon Associate, we earn from qualifying purchases. This means that if you click on an affiliate link on this website and make a purchase, we may receive a small commission at no extra cost to you. We only recommend products and services that we believe will add value to our readers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4">3. External Links Disclaimer</h2>
                        <p>
                            The Site and our mobile application may contain (or you may be sent through the Site or our mobile application) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4">4. Professional Advice Disclaimer</h2>
                        <p>
                            The Site cannot and does not contain medical, legal, or financial advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of medical, legal, or financial advice. The use or reliance of any information contained on the Site or our mobile application is solely at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-serif font-bold text-brand-text-title mb-4">5. Errors and Omissions</h2>
                        <p>
                            While we strive to ensure that the information contained in this site is accurate, we are not responsible for any errors or omissions, or for the results obtained from the use of this information. All information in this site is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.
                        </p>
                    </section>
                </div>
            </div>


        </div>
    );
};
