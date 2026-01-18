export const dynamic = 'force-static';

export async function GET() {
    // Google AdSense verification
    const adsContent = 'google.com, pub-8209081290130316, DIRECT, f08c47fec0942fa0';

    return new Response(adsContent, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
