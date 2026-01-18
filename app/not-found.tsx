import Link from 'next/link';
import { HeartIcon } from '../components/Icons';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-brand-pink-light/30 p-12 rounded-3xl border border-brand-border shadow-sm max-w-lg mx-auto">
                <div className="text-8xl mb-4">🧁</div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-text-title mb-4">
                    Oops!
                </h1>
                <h2 className="font-serif text-2xl text-brand-pink mb-6">
                    Page Not Found
                </h2>
                <p className="text-brand-text-body/80 text-lg mb-8 leading-relaxed">
                    It looks like this page was either moved or eaten by a cookie monster. Don't worry, we have plenty of other treats!
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-pink to-brand-pink-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    <HeartIcon className="w-5 h-5" fill="currentColor" />
                    <span>Back to Home Bakery</span>
                </Link>
            </div>
        </div>
    );
}
