
export interface Env {
    AI: any;
}

export default {
    async fetch(request: Request, env: Env) {
        // Handle CORS
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        try {
            const body = await request.json() as any;
            const { description, style, shape, colors } = body;

            // Construct a detailed prompt for the AI
            const prompt = `A professional, high-quality photograph of a ${shape} cake. 
      Style: ${style}. 
      Colors: ${colors.join(", ")}. 
      Description: ${description}. 
      The cake is beautifully decorated, photorealistic, 8k resolution, cinematic lighting, food photography.`;

            // Call Cloudflare Workers AI (Stable Diffusion XL)
            const response = await env.AI.run(
                "@cf/stabilityai/stable-diffusion-xl-base-1.0",
                {
                    prompt: prompt,
                }
            );

            // The response is a binary blob (PNG). Convert to base64 to send back easily to frontend.
            // Alternatively, we could return the binary directly. Let's return base64 JSON for easier frontend handling.
            const arrayBuffer = await new Response(response).arrayBuffer();
            const base64String = btoa(
                new Uint8Array(arrayBuffer).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    ""
                )
            );

            return new Response(JSON.stringify({ image: `data:image/png;base64,${base64String}` }), {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

        } catch (error) {
            return new Response(JSON.stringify({ error: "Failed to generate image" }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }
    },
};
