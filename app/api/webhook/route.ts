import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;

        if (!secret) {
            return new NextResponse('Lemon Squeezy Secret not set', { status: 500 });
        }

        const text = await req.text();
        const hmac = crypto.createHmac('sha256', secret);
        const digest = Buffer.from(hmac.update(text).digest('hex'), 'utf8');
        const signature = Buffer.from(req.headers.get('x-signature') || '', 'utf8');

        if (!crypto.timingSafeEqual(digest, signature)) {
            return new NextResponse('Invalid signature', { status: 401 });
        }

        const payload = JSON.parse(text);
        const eventName = payload.meta.event_name;
        const customData = payload.meta.custom_data;
        // In Lemon Squeezy, you can pass custom data (like user_id) in the Checkout URL
        // e.g. ?checkout[custom][user_id]=...

        if (eventName === 'order_created' || eventName === 'subscription_created') {
            const userId = customData?.user_id;
            const userEmail = payload.data.attributes.user_email;
            const customerId = payload.data.attributes.customer_id;

            if (userId) {
                // Initialize Supabase Admin Client (using Service Role Key for permission bypass)
                const supabaseAdmin = createClient(
                    process.env.NEXT_PUBLIC_SUPABASE_URL!,
                    process.env.SUPABASE_SERVICE_ROLE_KEY!
                );

                const { error } = await supabaseAdmin
                    .from('profiles')
                    .update({
                        is_premium: true,
                        lemon_squeezy_customer_id: customerId.toString(),
                        subscription_status: 'active',
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', userId);

                if (error) {
                    console.error('Error updating user profile:', error);
                    return new NextResponse('Error updating database', { status: 500 });
                }
            } else {
                console.warn('No user_id found in custom_data. User matching by email logic could go here if needed.');
            }
        }

        return new NextResponse('Webhook processed', { status: 200 });

    } catch (error: any) {
        console.error('Webhook error:', error);
        return new NextResponse(`Webhook error: ${error.message}`, { status: 400 });
    }
}
