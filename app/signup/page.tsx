'use client';

import { useState } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';
import { SparklesIcon } from '../../components/Icons';
import Link from 'next/link';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });

        if (error) {
            setMessage({ type: 'error', text: error.message });
        } else {
            setMessage({ type: 'success', text: 'Magic link sent! Check your email to complete signup.' });
        }
        setLoading(false);
    };

    return (
        <div className="fixed inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 z-50">

            {/* Brand Header */}
            <Link href="/" className="mb-6 sm:mb-8 flex items-center gap-2 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-pink text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-stone-900">Sourdough Club</span>
            </Link>

            <div className="w-full max-w-md bg-white rounded-2xl sm:rounded-[2rem] shadow-xl border border-stone-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-brand-pink"></div>

                <div className="p-6 sm:p-8 md:p-10">
                    <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Join Sourdough Club</h1>
                    <p className="text-sm sm:text-base text-stone-500 mb-6 sm:mb-8">Enter your email to create your account.</p>

                    <form onSubmit={handleSignup} className="space-y-4 sm:space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-xs font-bold text-stone-900 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="baker@example.com"
                                className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:bg-white transition-all text-stone-900 placeholder:text-stone-400 text-sm sm:text-base"
                                required
                            />
                        </div>

                        {message && (
                            <div className={`p-3 sm:p-4 rounded-xl text-xs sm:text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                {message.text}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 sm:py-4 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                        >
                            {loading ? 'Sending Magic Link...' : 'Sign Up'}
                        </button>
                    </form>
                </div>

                <div className="bg-stone-50 p-4 sm:p-6 text-center text-xs sm:text-sm text-stone-400 border-t border-stone-100">
                    Already have an account? <Link href="/login" className="text-brand-pink font-bold hover:underline">Log In</Link>
                </div>
            </div>
        </div>
    );
}
