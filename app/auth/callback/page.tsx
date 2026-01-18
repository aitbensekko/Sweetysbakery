'use client';

import { useEffect, useState, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '../../../utils/supabase/client';

function AuthCallbackContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('Verifying your login...');
    const verificationAttempted = useRef(false);

    useEffect(() => {
        const handleAuthCallback = async () => {
            if (verificationAttempted.current) return;
            verificationAttempted.current = true;

            const code = searchParams.get('code');
            const error = searchParams.get('error');

            if (error) {
                setStatus('Login failed. Redirecting...');
                setTimeout(() => router.push('/login?error=auth_failed'), 2000);
                return;
            }

            if (code) {
                const supabase = createClient();
                const { error: authError } = await supabase.auth.exchangeCodeForSession(code);

                if (authError) {
                    console.error('Auth error:', authError);
                    // Check if we actually have a session despite the error (sometimes happens with race conditions)
                    const { data: { session } } = await supabase.auth.getSession();

                    if (session) {
                        setStatus('Success! Redirecting to dashboard...');
                        router.push('/dashboard');
                        return;
                    }

                    setStatus('Verification failed. Use the link again if it expired.');
                    setTimeout(() => router.push('/login'), 3000);
                    return;
                }

                setStatus('Success! Redirecting to dashboard...');
                router.push('/dashboard');
            } else {
                // No code, check if we already have a session
                const supabase = createClient();
                const { data: { session } } = await supabase.auth.getSession();
                if (session) {
                    router.push('/dashboard');
                } else {
                    router.push('/login');
                }
            }
        };

        handleAuthCallback();
    }, [router, searchParams]);

    return (
        <div className="fixed inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full border border-stone-100">
                <div className="w-16 h-16 border-4 border-brand-pink border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                <h2 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    {status}
                </h2>
                <p className="text-stone-500 text-sm">
                    Please wait while we log you in.
                </p>
            </div>
        </div>
    );
}

export default function AuthCallbackPage() {
    return (
        <Suspense fallback={
            <div className="fixed inset-0 bg-[#FDFBF7] flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm w-full border border-stone-100">
                    <div className="w-16 h-16 border-4 border-brand-pink border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-xl font-serif font-bold text-stone-900 mb-2">
                        Loading...
                    </h2>
                </div>
            </div>
        }>
            <AuthCallbackContent />
        </Suspense>
    );
}
