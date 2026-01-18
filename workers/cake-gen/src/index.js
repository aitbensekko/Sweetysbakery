/**
 * Cloudflare Worker for AI Cake Design Generation
 */
import { Ai } from '@cloudflare/ai';

export default {
    async fetch(request, env) {
        // 1. Handle CORS (Allow frontend to call this)
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== 'POST') {
            return new Response('Method Not Allowed', { status: 405 });
        }

        try {
            // 2. Parse User Input
            const { description, style, shape, colors } = await request.json();

            // 3. Construct Prompt
            const prompt = `A professional food photography shot of a ${style} wedding cake, ${shape} shape, ${colors.join(' and ')} color palette. ${description}. 
      High resolution, 8k, photorealistic, cinematic lighting, intricate details, masterpiece, trending on artstation, sharp focus.`;

            // 4. Run AI Model (Stable Diffusion XL)
            const ai = new Ai(env.AI);

            const response = await ai.run('@cf/stabilityai/stable-diffusion-xl-base-1.0', {
                prompt: prompt,
                num_steps: 20,
                height: 768,
                width: 768
            });

            // 5. Convert Binary result to Base64
            const reader = response.getReader();
            const chunks = [];
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                chunks.push(value);
            }

            const combined = new Uint8Array(chunks.reduce((acc, val) => acc + val.length, 0));
            let offset = 0;
            for (const chunk of chunks) {
                combined.set(chunk, offset);
                offset += chunk.length;
            }

            const base64String = btoa(
                new Uint8Array(combined)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );

            // 6. Return JSON response
            return new Response(JSON.stringify({
                image: `data:image/png;base64,${base64String}`,
                prompt: prompt
            }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

        } catch (e) {
            return new Response(JSON.stringify({ error: e.message }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                }
            });
        }
    },
};
