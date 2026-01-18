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
            const { ingredients, type, difficulty } = body;

            const systemPrompt = `You are a professional pastry chef. Create a detailed baking recipe based on the user's request.
            Format the response in JSON with the following structure:
            {
                "title": "Recipe Title",
                "description": "Brief description",
                "prepTime": "XX mins",
                "bakeTime": "XX mins",
                "yields": "XX servings",
                "ingredients": ["1 cup flour", "2 eggs", ...],
                "instructions": ["Step 1...", "Step 2..."],
                "tips": ["Tip 1..."]
            }
            Do not include any conversational text outside the JSON.`;

            const userPrompt = `Create a ${difficulty || 'medium'} difficulty ${type || 'baked good'} recipe using these ingredients: ${ingredients}.`;

            const response = await env.AI.run(
                "@cf/meta/llama-3-8b-instruct",
                {
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: userPrompt }
                    ]
                }
            );

            // Accessing the response from Llama model directly
            // Note: The structure depends on the specific model output, usually 'response' key
            let recipeData = response.response;

            // Attempt to clean JSON if model added extra text
            let cleanJson = recipeData;
            const firstOpen = recipeData.indexOf('{');
            const lastClose = recipeData.lastIndexOf('}');

            if (firstOpen !== -1 && lastClose !== -1 && lastClose > firstOpen) {
                cleanJson = recipeData.substring(firstOpen, lastClose + 1);
            }

            // Verify it is valid JSON before sending
            JSON.parse(cleanJson); // Will throw if invalid, caught by catch block

            return new Response(cleanJson, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });

        } catch (error) {
            console.error(error);
            return new Response(JSON.stringify({ error: "Failed to generate recipe" }), {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }
    },
};
