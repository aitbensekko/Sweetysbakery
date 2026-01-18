import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    // Fallback values for build time/static generation if env vars are missing
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://zxkppakkvxolojxrjjso.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_qy6IBnLAVr7tZTWoVnZVVA_zgKEE8J4';

    return createBrowserClient(supabaseUrl, supabaseKey)
}
