module.exports = [
"[project]/components/tools/EssentialRecipes.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EssentialRecipes",
    ()=>EssentialRecipes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/tools/ToolContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Icons.tsx [app-ssr] (ecmascript)");
;
;
;
;
const recipeDatabase = {
    'Cookies & Bars': [
        {
            id: 'cookie-chocolate-chip',
            title: 'Classic Chocolate Chip Cookies',
            description: 'The ultimate chewy and soft chocolate chip cookie.',
            prepTime: '20 min',
            cookTime: '12 min',
            servings: '24 cookies',
            ingredients: [
                '2 1/4 cups (270g) All-Purpose Flour',
                '1 tsp Baking Soda',
                '1 tsp Salt',
                '1 cup (227g) Unsalted Butter, softened',
                '3/4 cup (150g) Granulated Sugar',
                '3/4 cup (165g) Brown Sugar, packed',
                '2 large Eggs',
                '2 tsp Vanilla Extract',
                '2 cups (340g) Semi-Sweet Chocolate Chips'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C).',
                'Whisk together flour, baking soda, and salt.',
                'Cream butter and sugars until light and fluffy.',
                'Beat in eggs one at a time, then stir in vanilla.',
                'Gradually add dry ingredients to wet ingredients.',
                'Stir in chocolate chips.',
                'Drop by rounded tablespoons onto ungreased baking sheets.',
                'Bake for 10-12 minutes or until golden brown.'
            ]
        },
        {
            id: 'cookie-oatmeal-raisin',
            title: 'Chewy Oatmeal Raisin Cookies',
            description: 'A comforting classic, perfectly spiced and chewy.',
            prepTime: '15 min',
            cookTime: '15 min',
            servings: '30 cookies',
            ingredients: [
                '1 1/2 cups (180g) All-Purpose Flour',
                '1 tsp Baking Soda',
                '1 tsp Cinnamon',
                '1/2 tsp Salt',
                '1 cup (227g) Unsalted Butter, softened',
                '1 cup (220g) Brown Sugar, packed',
                '1/2 cup (100g) Granulated Sugar',
                '2 large Eggs',
                '1 tsp Vanilla Extract',
                '3 cups (240g) Rolled Oats',
                '1 cup (150g) Raisins'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C).',
                'Combine flour, baking soda, cinnamon, and salt.',
                'Cream butter and sugars. Beat in eggs and vanilla.',
                'Gradually add flour mixture. Stir in oats and raisins.',
                'Drop onto baking sheets and bake for 12-15 minutes.'
            ]
        },
        {
            id: 'bar-fudgy-brownies',
            title: 'Ultimate Fudgy Brownies',
            description: 'Rich, dense, and intensely chocolatey brownies with a crinkly top.',
            prepTime: '15 min',
            cookTime: '30 min',
            servings: '16 brownies',
            ingredients: [
                '1/2 cup (113g) Unsalted Butter, melted',
                '1 cup (200g) Granulated Sugar',
                '2 large Eggs',
                '1 tsp Vanilla Extract',
                '1/2 cup (60g) All-Purpose Flour',
                '1/2 cup (45g) Unsweetened Cocoa Powder',
                '1/4 tsp Baking Powder',
                '1/4 tsp Salt',
                '1/2 cup (85g) Chocolate Chips'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease an 8x8 inch pan.',
                'Combine melted butter, sugar, eggs, and vanilla.',
                'In a separate bowl, whisk flour, cocoa powder, baking powder, and salt.',
                'Gently fold dry ingredients into wet ingredients until just combined.',
                'Stir in chocolate chips. Pour into prepared pan.',
                'Bake for 25-30 minutes. Let cool completely before cutting.'
            ]
        },
        {
            id: 'cookie-snickerdoodle',
            title: 'Soft Snickerdoodles',
            description: 'Classic tangy and chewy cookies rolled in cinnamon-sugar.',
            prepTime: '15 min',
            cookTime: '10 min',
            servings: '36 cookies',
            ingredients: [
                '2 3/4 cups (330g) All-Purpose Flour',
                '2 tsp Cream of Tartar',
                '1 tsp Baking Soda',
                '1/2 tsp Salt',
                '1 cup (227g) Unsalted Butter, softened',
                '1 1/2 cups (300g) Granulated Sugar',
                '2 large Eggs',
                'Topping: 1/4 cup Sugar, 2 tbsp Cinnamon'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'Whisk flour, cream of tartar, baking soda, and salt.',
                'Cream butter and sugar. Beat in eggs.',
                'Combine wet and dry ingredients. Chill dough for 30 minutes.',
                'Mix topping ingredients. Roll dough into balls and coat in cinnamon-sugar.',
                'Bake for 8-10 minutes.'
            ]
        },
        {
            id: 'cookie-peanut-butter',
            title: 'Classic Peanut Butter Cookies',
            description: 'Simple, soft, and crumbly cookies with the iconic fork pattern.',
            prepTime: '10 min',
            cookTime: '12 min',
            servings: '24 cookies',
            ingredients: [
                '1/2 cup (113g) Unsalted Butter, softened',
                '1/2 cup (125g) Creamy Peanut Butter',
                '1/2 cup (100g) Granulated Sugar',
                '1/2 cup (110g) Brown Sugar, packed',
                '1 large Egg',
                '1 1/4 cups (150g) All-Purpose Flour',
                '3/4 tsp Baking Soda',
                '1/2 tsp Baking Powder'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C).',
                'Cream butter, peanut butter, and sugars. Beat in egg.',
                'Whisk dry ingredients and add to wet mixture.',
                'Roll into balls, place on baking sheet, and press with a fork in a crisscross pattern.',
                'Bake for 10-12 minutes.'
            ]
        },
        {
            id: 'cookie-shortbread',
            title: 'Buttery Shortbread Cookies',
            description: 'Melt-in-your-mouth cookies with just three ingredients.',
            prepTime: '10 min',
            cookTime: '20 min',
            servings: '16 cookies',
            ingredients: [
                '1 cup (227g) Unsalted Butter, softened',
                '1/2 cup (60g) Powdered Sugar',
                '2 cups (240g) All-Purpose Flour',
                '1/4 tsp Salt'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C).',
                'Cream butter and powdered sugar until smooth.',
                'Gradually add flour and salt, mixing until just combined.',
                'Press dough into an 8x8 inch pan or roll and cut into shapes.',
                'Bake for 18-20 minutes, until edges are lightly golden.'
            ]
        },
        {
            id: 'bar-lemon',
            title: 'Tangy Lemon Bars',
            description: 'A sweet and tangy lemon filling on a buttery shortbread crust.',
            prepTime: '20 min',
            cookTime: '40 min',
            servings: '16 bars',
            ingredients: [
                'Crust: 1 cup (227g) Butter, 1/2 cup (60g) Powdered Sugar, 2 cups (240g) Flour',
                'Filling: 4 large Eggs, 1 1/2 cups (300g) Sugar, 1/4 cup (30g) Flour, 1 cup (240ml) Fresh Lemon Juice'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C).',
                'For crust, combine ingredients and press into a 9x13 inch pan. Bake for 20 minutes.',
                'For filling, whisk all ingredients together until smooth.',
                'Pour filling over hot crust and bake for another 20-25 minutes, until set.',
                'Let cool completely and dust with powdered sugar.'
            ]
        },
        {
            id: 'bar-rice-krispie',
            title: 'Gooey Rice Krispie Treats',
            description: 'The classic no-bake treat, made extra gooey and delicious.',
            prepTime: '10 min',
            cookTime: '5 min',
            servings: '12 treats',
            ingredients: [
                '6 cups Rice Krispies Cereal',
                '1 (10 oz) package Marshmallows',
                '1/4 cup (57g) Unsalted Butter'
            ],
            instructions: [
                'Grease a 9x13 inch pan.',
                'In a large pot, melt butter over low heat. Add marshmallows and stir until completely melted.',
                'Remove from heat and stir in Rice Krispies cereal until well coated.',
                'Press mixture evenly into the prepared pan. Let cool before cutting.'
            ]
        }
    ],
    'Cakes & Cupcakes': [
        {
            id: 'cake-vanilla',
            title: 'Classic Vanilla Cake',
            description: 'A moist, fluffy, and versatile vanilla cake for any occasion.',
            prepTime: '20 min',
            cookTime: '35 min',
            servings: '12 servings',
            ingredients: [
                '2 1/2 cups (300g) All-Purpose Flour',
                '2 1/2 tsp Baking Powder',
                '1/2 tsp Salt',
                '3/4 cup (170g) Unsalted Butter, softened',
                '1 1/2 cups (300g) Granulated Sugar',
                '3 large Eggs',
                '2 tsp Vanilla Extract',
                '1 1/4 cups (300ml) Milk'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
                'Whisk flour, baking powder, and salt.',
                'Cream butter and sugar. Beat in eggs one at a time, then vanilla.',
                'Alternate adding flour mixture and milk, beginning and ending with flour.',
                'Divide batter between pans and bake for 30-35 minutes.'
            ]
        },
        {
            id: 'cake-chocolate',
            title: 'Ultimate Chocolate Cake',
            description: 'A rich, moist, and deeply chocolatey cake.',
            prepTime: '20 min',
            cookTime: '40 min',
            servings: '12 servings',
            ingredients: [
                '2 cups (400g) Sugar',
                '1 3/4 cups (210g) All-Purpose Flour',
                '3/4 cup (65g) Unsweetened Cocoa Powder',
                '1 1/2 tsp Baking Powder',
                '1 1/2 tsp Baking Soda',
                '1 tsp Salt',
                '2 large Eggs',
                '1 cup (240ml) Milk',
                '1/2 cup (120ml) Vegetable Oil',
                '2 tsp Vanilla Extract',
                '1 cup (240ml) Boiling Water'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.',
                'Whisk together all dry ingredients in a large bowl.',
                'Add eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.',
                'Carefully stir in boiling water (batter will be thin).',
                'Pour into pans and bake for 35-40 minutes.'
            ]
        },
        {
            id: 'cake-red-velvet',
            title: 'Classic Red Velvet Cake',
            description: 'A Southern classic with a tender crumb and a hint of cocoa.',
            prepTime: '25 min',
            cookTime: '30 min',
            servings: '12 servings',
            ingredients: [
                '2 1/2 cups (300g) All-Purpose Flour',
                '1 1/2 cups (300g) Sugar',
                '1 tsp Baking Soda',
                '1 tsp Cocoa Powder',
                '1/2 tsp Salt',
                '2 large Eggs',
                '1 1/2 cups (360ml) Vegetable Oil',
                '1 cup (240ml) Buttermilk',
                '1 tbsp Red Food Coloring',
                '1 tsp Vanilla Extract',
                '1 tsp White Vinegar'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease and flour two 9-inch pans.',
                'Whisk dry ingredients. In another bowl, whisk eggs, oil, buttermilk, food coloring, vanilla, and vinegar.',
                'Combine wet and dry ingredients. Do not overmix.',
                'Pour into pans and bake for 30 minutes.'
            ]
        },
        {
            id: 'cake-carrot',
            title: 'Moist Carrot Cake',
            description: 'Perfectly spiced and incredibly moist, topped with cream cheese frosting.',
            prepTime: '25 min',
            cookTime: '45 min',
            servings: '12 servings',
            ingredients: [
                '2 cups (240g) All-Purpose Flour',
                '2 tsp Baking Soda',
                '1/2 tsp Salt',
                '2 tsp Cinnamon',
                '1 1/2 cups (300g) Sugar',
                '1 1/4 cups (300ml) Vegetable Oil',
                '4 large Eggs',
                '3 cups (300g) Grated Carrots'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease and flour a 9x13 inch pan.',
                'Whisk flour, baking soda, salt, and cinnamon.',
                'In a separate bowl, beat sugar, oil, and eggs.',
                'Combine wet and dry ingredients, then fold in carrots.',
                'Pour into pan and bake for 40-50 minutes.'
            ]
        },
        {
            id: 'cake-cheesecake',
            title: 'New York Cheesecake',
            description: 'A rich, dense, and creamy cheesecake with a graham cracker crust.',
            prepTime: '30 min',
            cookTime: '1 hr 15 min',
            servings: '16 servings',
            ingredients: [
                'Crust: 1 1/2 cups Graham Cracker Crumbs, 1/4 cup Sugar, 6 tbsp Melted Butter',
                'Filling: 32 oz (4 blocks) Cream Cheese, softened',
                '1 1/4 cups (250g) Sugar',
                '1/2 cup (120ml) Sour Cream',
                '2 tsp Vanilla Extract',
                '4 large Eggs'
            ],
            instructions: [
                'Preheat oven to 325°F (165°C).',
                'Combine crust ingredients and press into the bottom of a 9-inch springform pan.',
                'Beat cream cheese and sugar until smooth. Mix in sour cream and vanilla.',
                'Add eggs one at a time, mixing on low speed until just combined.',
                'Pour filling over crust. Bake in a water bath for 75 minutes.',
                'Turn off oven and let cheesecake cool in the oven with the door cracked for 1 hour. Chill for at least 4 hours.'
            ]
        },
        {
            id: 'cake-pound',
            title: 'Classic Pound Cake',
            description: 'A dense, moist, and buttery cake with a fine crumb.',
            prepTime: '20 min',
            cookTime: '1 hr 10 min',
            servings: '12 servings',
            ingredients: [
                '1 cup (227g) Unsalted Butter, softened',
                '2 cups (400g) Sugar',
                '4 large Eggs',
                '3 cups (360g) All-Purpose Flour',
                '1/2 tsp Baking Powder',
                '1/2 tsp Salt',
                '1 cup (240ml) Milk',
                '1 tsp Vanilla Extract'
            ],
            instructions: [
                'Preheat oven to 325°F (165°C). Grease and flour a loaf or bundt pan.',
                'Cream butter and sugar for 5-7 minutes until very light and fluffy.',
                'Add eggs one at a time.',
                'Whisk dry ingredients. In a separate bowl, combine milk and vanilla.',
                'Alternate adding dry and wet ingredients to the creamed mixture.',
                'Bake for 60-70 minutes, until a skewer comes out clean.'
            ]
        },
        {
            id: 'cupcake-vanilla',
            title: 'Perfect Vanilla Cupcakes',
            description: 'Light, fluffy, and moist vanilla cupcakes.',
            prepTime: '15 min',
            cookTime: '20 min',
            servings: '12 cupcakes',
            ingredients: [
                '1 1/2 cups (180g) All-Purpose Flour',
                '1 1/2 tsp Baking Powder',
                '1/4 tsp Salt',
                '1/2 cup (113g) Unsalted Butter, softened',
                '1 cup (200g) Sugar',
                '2 large Eggs',
                '1 tsp Vanilla Extract',
                '1/2 cup (120ml) Milk'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Line a muffin tin with cupcake liners.',
                'Whisk flour, baking powder, and salt.',
                'Cream butter and sugar. Beat in eggs and vanilla.',
                'Alternate adding dry ingredients and milk.',
                'Fill liners 2/3 full and bake for 18-20 minutes.'
            ]
        }
    ],
    'Breads & Doughs': [
        {
            id: 'bread-no-knead',
            title: 'No-Knead Artisan Bread',
            description: 'A crusty, rustic loaf with an amazing open crumb, made with minimal effort.',
            prepTime: '10 min',
            cookTime: '45 min',
            servings: '1 loaf',
            ingredients: [
                '3 cups (360g) All-Purpose or Bread Flour',
                '1 1/2 tsp Salt',
                '1/2 tsp Instant Yeast',
                '1 1/2 cups (360ml) Lukewarm Water'
            ],
            instructions: [
                'In a large bowl, mix all ingredients until a shaggy dough forms.',
                'Cover and let rest at room temperature for 12-18 hours.',
                'On a floured surface, gently shape the dough into a ball. Let rest for 30 minutes.',
                'Preheat a Dutch oven at 450°F (230°C) for 30 minutes.',
                'Carefully place dough in the hot Dutch oven. Bake covered for 30 minutes, then uncovered for 15 minutes.'
            ]
        },
        {
            id: 'bread-sourdough',
            title: 'Beginner Sourdough Bread',
            description: 'A basic but delicious guide to making your first sourdough loaf.',
            prepTime: '30 min',
            cookTime: '50 min',
            servings: '1 loaf',
            ingredients: [
                '100g Active Sourdough Starter',
                '350g Warm Water',
                '500g Bread Flour',
                '10g Salt'
            ],
            instructions: [
                'Mix starter and water. Add flour and salt and mix to form a shaggy dough. Rest for 30 minutes (autolyse).',
                'Perform 3-4 sets of stretch-and-folds every 30 minutes over the next 2 hours.',
                'Let the dough bulk ferment until it has risen by about 30-50%.',
                'Shape the dough and place it in a proofing basket. Cold proof in the refrigerator for 12-18 hours.',
                'Preheat Dutch oven to 500°F (260°C). Bake covered for 20 minutes, then uncovered at 450°F (230°C) for 20-30 minutes.'
            ]
        },
        {
            id: 'bread-banana',
            title: 'Moist Banana Bread',
            description: 'The perfect one-bowl recipe to use up overripe bananas.',
            prepTime: '10 min',
            cookTime: '1 hr',
            servings: '1 loaf',
            ingredients: [
                '3 very ripe Bananas, mashed',
                '1/2 cup (113g) Unsalted Butter, melted',
                '3/4 cup (165g) Brown Sugar',
                '1 large Egg, beaten',
                '1 tsp Vanilla Extract',
                '1 tsp Baking Soda',
                'Pinch of Salt',
                '1 1/2 cups (180g) All-Purpose Flour'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C). Grease a loaf pan.',
                'In a large bowl, mix mashed bananas, melted butter, sugar, egg, and vanilla.',
                'Sprinkle baking soda and salt over the mixture and stir. Add flour and mix until just combined.',
                'Pour into loaf pan and bake for 55-65 minutes.'
            ]
        },
        {
            id: 'dough-pizza',
            title: 'Homemade Pizza Dough',
            description: 'A simple, reliable dough for a crispy and chewy pizza crust.',
            prepTime: '15 min',
            cookTime: '12 min',
            servings: '2 12-inch pizzas',
            ingredients: [
                '1 1/2 cups (360ml) Warm Water',
                '2 1/4 tsp (1 packet) Instant Yeast',
                '1 tbsp Sugar',
                '2 tbsp Olive Oil',
                '1 tsp Salt',
                '3 1/2 cups (420g) All-Purpose Flour'
            ],
            instructions: [
                'Combine water, yeast, and sugar. Let sit for 5 minutes until foamy.',
                'Stir in oil and salt. Gradually add flour, mixing until a dough forms.',
                'Knead for 5-7 minutes until smooth. Place in a greased bowl, cover, and let rise for 1-2 hours, until doubled.',
                'Punch down dough, divide in two, and shape your pizza.',
                'Bake at 475°F (245°C) for 10-15 minutes.'
            ]
        },
        {
            id: 'dough-cinnamon-rolls',
            title: 'Fluffy Cinnamon Rolls',
            description: 'Soft, gooey cinnamon rolls with a rich cream cheese frosting.',
            prepTime: '30 min',
            cookTime: '25 min',
            servings: '12 rolls',
            ingredients: [
                'Dough: 1 cup Warm Milk, 2 1/4 tsp Yeast, 1/4 cup Sugar, 1 Egg, 1/4 cup Butter, 3 cups Flour, 1/2 tsp Salt',
                'Filling: 1/2 cup softened Butter, 3/4 cup Brown Sugar, 2 tbsp Cinnamon',
                'Frosting: 4 oz Cream Cheese, 1/4 cup Butter, 1 1/2 cups Powdered Sugar, 1/2 tsp Vanilla'
            ],
            instructions: [
                'Make the dough and let it rise for 1-2 hours.',
                'Roll the dough into a large rectangle. Spread with softened butter and sprinkle with cinnamon-sugar filling.',
                'Roll up tightly and slice into 12 rolls. Place in a greased pan and let rise for another 30-60 minutes.',
                'Bake at 375°F (190°C) for 20-25 minutes.',
                'While warm, spread with cream cheese frosting.'
            ]
        },
        {
            id: 'bread-brioche',
            title: 'Rich Brioche Loaf',
            description: 'A soft, tender, and buttery enriched bread.',
            prepTime: '25 min',
            cookTime: '35 min',
            servings: '1 loaf',
            ingredients: [
                '1/2 cup (120ml) Warm Milk',
                '2 1/4 tsp Yeast',
                '3 cups (360g) Bread Flour',
                '1/4 cup (50g) Sugar',
                '1 tsp Salt',
                '3 large Eggs',
                '1/2 cup (113g) Unsalted Butter, softened and cubed'
            ],
            instructions: [
                'Combine milk and yeast. Let sit for 5 minutes.',
                'In a stand mixer, combine flour, sugar, salt, eggs, and milk mixture. Mix until a dough forms.',
                'With the mixer on low, gradually add the softened butter, a few cubes at a time, until fully incorporated.',
                'Knead for 10-15 minutes until smooth and elastic. Let rise for 1-2 hours.',
                'Shape into a loaf, place in a greased loaf pan, and let rise again for 1 hour.',
                'Bake at 375°F (190°C) for 30-35 minutes.'
            ]
        },
        {
            id: 'bread-focaccia',
            title: 'Easy Focaccia Bread',
            description: 'A simple, dimpled Italian bread with a chewy texture and crispy crust.',
            prepTime: '15 min',
            cookTime: '25 min',
            servings: '12 servings',
            ingredients: [
                '2 cups (480ml) Warm Water',
                '2 tsp Honey or Sugar',
                '2 1/4 tsp Yeast',
                '5 cups (600g) All-Purpose Flour',
                '2 tsp Salt',
                '1/4 cup Olive Oil, plus more for drizzling',
                'Flaky Sea Salt and Rosemary for topping'
            ],
            instructions: [
                'Combine water, honey, and yeast. Let sit for 5 minutes.',
                'In a large bowl, whisk flour and salt. Add yeast mixture and olive oil. Mix to form a very sticky dough.',
                'Cover and let rise for 1-2 hours.',
                'Pour dough into a well-oiled 9x13 inch pan. Gently stretch to fit.',
                'Dimple the dough with oiled fingers. Drizzle with more olive oil and sprinkle with sea salt and rosemary.',
                'Bake at 425°F (220°C) for 20-25 minutes until golden brown.'
            ]
        }
    ],
    'Pies & Tarts': [
        {
            id: 'pie-apple',
            title: 'Classic Apple Pie',
            description: 'A double-crust pie with a perfectly spiced apple filling.',
            prepTime: '45 min',
            cookTime: '1 hr',
            servings: '8 servings',
            ingredients: [
                '1 recipe for a double-crust pie dough',
                '6-8 medium Apples, peeled and sliced',
                '3/4 cup (150g) Sugar',
                '2 tbsp All-Purpose Flour',
                '1 tsp Cinnamon',
                '1/4 tsp Nutmeg',
                '1 tbsp Lemon Juice',
                '2 tbsp Butter, cubed'
            ],
            instructions: [
                'Preheat oven to 425°F (220°C).',
                'Line a 9-inch pie plate with one crust.',
                'In a large bowl, toss apples with sugar, flour, spices, and lemon juice.',
                'Pour apple mixture into the crust and dot with butter.',
                'Cover with the top crust, seal the edges, and cut vents.',
                'Bake for 15 minutes, then reduce heat to 375°F (190°C) and bake for another 40-50 minutes.'
            ]
        },
        {
            id: 'pie-pumpkin',
            title: 'Creamy Pumpkin Pie',
            description: 'The quintessential fall dessert with a smooth, spiced custard filling.',
            prepTime: '15 min',
            cookTime: '50 min',
            servings: '8 servings',
            ingredients: [
                '1 (9-inch) unbaked pie crust',
                '1 (15 oz) can Pumpkin Purée',
                '3/4 cup (150g) Sugar',
                '1/2 tsp Salt',
                '1 tsp Cinnamon',
                '1/2 tsp Ginger',
                '1/4 tsp Cloves',
                '2 large Eggs',
                '1 (12 oz) can Evaporated Milk'
            ],
            instructions: [
                'Preheat oven to 425°F (220°C).',
                'In a large bowl, mix pumpkin, sugar, salt, and spices.',
                'Beat in eggs. Gradually stir in evaporated milk.',
                'Pour into pie crust. Bake for 15 minutes.',
                'Reduce temperature to 350°F (175°C) and bake for 40-50 minutes more, until a knife inserted near the center comes out clean.'
            ]
        },
        {
            id: 'pie-pecan',
            title: 'Southern Pecan Pie',
            description: 'A sweet and gooey pie loaded with toasted pecans.',
            prepTime: '15 min',
            cookTime: '1 hr',
            servings: '8 servings',
            ingredients: [
                '1 (9-inch) unbaked pie crust',
                '1 cup Light Corn Syrup',
                '3 large Eggs',
                '1/2 cup (100g) Sugar',
                '2 tbsp Melted Butter',
                '1 tsp Vanilla Extract',
                '1 1/2 cups (170g) Pecan Halves'
            ],
            instructions: [
                'Preheat oven to 350°F (175°C).',
                'In a large bowl, whisk corn syrup, eggs, sugar, butter, and vanilla until well blended.',
                'Stir in pecans.',
                'Pour filling into the unbaked pie crust.',
                'Bake for 60-70 minutes, until the center is set.'
            ]
        },
        {
            id: 'pie-key-lime',
            title: 'Key Lime Pie',
            description: 'A tangy and creamy pie with a graham cracker crust.',
            prepTime: '20 min',
            cookTime: '15 min',
            servings: '8 servings',
            ingredients: [
                'Crust: 1 1/2 cups Graham Cracker Crumbs, 6 tbsp Melted Butter',
                'Filling: 4 Egg Yolks, 1 (14 oz) can Sweetened Condensed Milk, 1/2 cup Key Lime Juice'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C).',
                'Mix crust ingredients and press into a 9-inch pie plate. Bake for 10 minutes.',
                'Whisk egg yolks and condensed milk. Gradually whisk in key lime juice.',
                'Pour into crust and bake for 15 minutes.',
                'Chill for at least 3 hours before serving.'
            ]
        },
        {
            id: 'tart-fruit',
            title: 'Classic Fruit Tart',
            description: 'A buttery crust, creamy pastry cream, and fresh, colorful fruit.',
            prepTime: '1 hr',
            cookTime: '25 min',
            servings: '8 servings',
            ingredients: [
                '1 recipe Pâte Sablée (sweet shortcrust pastry)',
                '1 recipe Pastry Cream',
                'Assorted fresh fruit (berries, kiwi, etc.)',
                '1/4 cup Apricot Jam, for glaze'
            ],
            instructions: [
                'Press the Pâte Sablée into a tart pan with a removable bottom. Prick with a fork and chill for 30 minutes.',
                'Blind bake the crust at 375°F (190°C) for 20-25 minutes, until golden.',
                'Let the crust cool completely. Spread the pastry cream evenly inside.',
                'Arrange fresh fruit on top of the pastry cream.',
                'Warm the apricot jam with a little water and brush over the fruit to glaze.'
            ]
        }
    ],
    'Pastries & Desserts': [
        {
            id: 'pastry-croissants',
            title: 'Classic Croissants',
            description: 'A challenging but rewarding project to create flaky, buttery, laminated dough.',
            prepTime: '4 hrs',
            cookTime: '20 min',
            servings: '12 croissants',
            ingredients: [
                '4 cups (480g) Bread Flour',
                '1/4 cup (50g) Sugar',
                '2 tsp Salt',
                '2 1/4 tsp Instant Yeast',
                '1 1/4 cups (300ml) Lukewarm Milk',
                '1 cup (227g) Unsalted Butter, cold (for lamination)'
            ],
            instructions: [
                'Make the dough (détrempe) and let it rest.',
                'Create a butter block (beurrage).',
                'Laminate the dough by enclosing the butter and performing a series of "turns" (folds), chilling between each turn.',
                'Shape the croissants, let them proof until puffy.',
                'Bake at 400°F (200°C) for 15-20 minutes until deeply golden brown.'
            ]
        },
        {
            id: 'pastry-macarons',
            title: 'French Macarons',
            description: 'Delicate almond meringue cookies with a crisp shell and chewy interior.',
            prepTime: '45 min',
            cookTime: '15 min',
            servings: '30 shells',
            ingredients: [
                '1 cup (120g) Almond Flour, sifted',
                '1 cup (120g) Powdered Sugar, sifted',
                '3 large Egg Whites, room temperature',
                '1/4 cup (50g) Granulated Sugar',
                'Pinch of Cream of Tartar'
            ],
            instructions: [
                'Whisk almond flour and powdered sugar together.',
                'Beat egg whites and cream of tartar until foamy. Gradually add granulated sugar and beat until stiff, glossy peaks form.',
                'Fold the dry ingredients into the meringue in stages until the batter flows like lava (macaronage).',
                'Pipe onto baking sheets and let rest for 30-60 minutes until a skin forms.',
                'Bake at 300°F (150°C) for 15-18 minutes.'
            ]
        },
        {
            id: 'dessert-tiramisu',
            title: 'Classic Tiramisu',
            description: 'A no-bake Italian dessert with coffee-soaked ladyfingers and mascarpone cream.',
            prepTime: '30 min',
            cookTime: '0 min',
            servings: '8 servings',
            ingredients: [
                '6 Egg Yolks',
                '3/4 cup (150g) Sugar',
                '1 lb (450g) Mascarpone Cheese',
                '1 1/2 cups Strong Brewed Coffee, cooled',
                '24 Ladyfingers (Savoiardi)',
                'Unsweetened Cocoa Powder, for dusting'
            ],
            instructions: [
                'Whisk egg yolks and sugar over a double boiler until pale and thick.',
                'Let cool, then gently fold in the mascarpone cheese.',
                'Quickly dip ladyfingers in coffee and arrange a layer in a dish.',
                'Spread half of the mascarpone mixture over the ladyfingers.',
                'Repeat with another layer of ladyfingers and mascarpone.',
                'Chill for at least 4 hours. Dust with cocoa powder before serving.'
            ]
        },
        {
            id: 'dessert-creme-brulee',
            title: 'Crème Brûlée',
            description: 'A rich custard base with a contrasting layer of hard caramel.',
            prepTime: '15 min',
            cookTime: '40 min',
            servings: '6 servings',
            ingredients: [
                '2 cups (480ml) Heavy Cream',
                '1 Vanilla Bean, split, or 1 tsp Vanilla Extract',
                '5 large Egg Yolks',
                '1/2 cup (100g) Sugar, plus more for topping'
            ],
            instructions: [
                'Preheat oven to 325°F (165°C).',
                'Heat cream and vanilla bean until just simmering. Remove from heat and let steep for 15 minutes.',
                'Whisk egg yolks and sugar until pale. Slowly temper the hot cream into the egg mixture.',
                'Strain the custard and pour into ramekins. Place in a water bath.',
                'Bake for 30-40 minutes until the center is just set.',
                'Chill for at least 2 hours. Before serving, sprinkle with sugar and caramelize with a torch.'
            ]
        },
        {
            id: 'pastry-eclairs',
            title: 'Chocolate Éclairs',
            description: 'Choux pastry filled with pastry cream and topped with chocolate glaze.',
            prepTime: '45 min',
            cookTime: '35 min',
            servings: '12 éclairs',
            ingredients: [
                '1 recipe Pâte à Choux',
                '1 recipe Pastry Cream',
                '1 recipe Chocolate Glaze'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'Pipe the choux pastry into 4-inch logs on a baking sheet.',
                'Bake for 15 minutes, then reduce heat to 350°F (175°C) and bake for another 20 minutes until golden and hollow.',
                'Let cool completely. Poke holes in the bottom and fill with pastry cream.',
                'Dip the tops in chocolate glaze.'
            ]
        },
        {
            id: 'dessert-souffle',
            title: 'Chocolate Soufflé',
            description: 'A light and airy baked egg dessert that rises dramatically.',
            prepTime: '25 min',
            cookTime: '15 min',
            servings: '4 servings',
            ingredients: [
                '4 oz Bittersweet Chocolate, chopped',
                '3 large Egg Yolks',
                '5 large Egg Whites',
                '1/4 cup (50g) Sugar',
                'Pinch of Cream of Tartar'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C). Butter and sugar four ramekins.',
                'Melt chocolate over a double boiler. Let cool slightly, then whisk in egg yolks.',
                'In a clean bowl, beat egg whites and cream of tartar until soft peaks form. Gradually add sugar and beat to stiff peaks.',
                'Gently fold one-third of the meringue into the chocolate mixture to lighten it, then fold in the rest.',
                'Divide among ramekins and bake for 12-15 minutes. Serve immediately.'
            ]
        }
    ],
    'Frostings & Fillings': [
        {
            id: 'frosting-american-buttercream',
            title: 'American Buttercream',
            description: 'A simple, sweet, and popular frosting made from butter and powdered sugar.',
            prepTime: '10 min',
            cookTime: '0 min',
            servings: 'Frosts 12 cupcakes',
            ingredients: [
                '1 cup (227g) Unsalted Butter, softened',
                '3-4 cups (360-480g) Powdered Sugar, sifted',
                '1/4 cup (60ml) Heavy Cream or Milk',
                '1 tsp Vanilla Extract',
                'Pinch of Salt'
            ],
            instructions: [
                'In a large bowl, beat the softened butter until creamy.',
                'Gradually add the powdered sugar, one cup at a time, mixing on low speed until combined, then on high speed.',
                'Add the vanilla and salt. Pour in the cream and beat on high speed for 3-5 minutes until light and fluffy.'
            ]
        },
        {
            id: 'frosting-swiss-meringue',
            title: 'Swiss Meringue Buttercream',
            description: 'A silky, stable, and less-sweet buttercream perfect for professional finishes.',
            prepTime: '25 min',
            cookTime: '10 min',
            servings: 'Frosts a 3-layer 8" cake',
            ingredients: [
                '5 large Egg Whites',
                '1 1/2 cups (300g) Granulated Sugar',
                '2 cups (454g) Unsalted Butter, room temperature, cubed',
                '2 tsp Vanilla Extract',
                'Pinch of Salt'
            ],
            instructions: [
                'Whisk egg whites and sugar in a heatproof bowl over a pot of simmering water (double boiler).',
                'Whisk constantly until the mixture reaches 160°F (71°C) and sugar is dissolved.',
                'Transfer to a stand mixer and whip on high speed until a stiff, glossy meringue forms and the bowl is cool to the touch.',
                'Switch to the paddle attachment. On low speed, add the butter one cube at a time.',
                'Once all butter is added, increase speed to medium-high and beat until the buttercream comes together and is silky smooth (it may curdle first - this is normal).'
            ]
        },
        {
            id: 'frosting-cream-cheese',
            title: 'Cream Cheese Frosting',
            description: 'The classic tangy and sweet frosting for carrot cake and red velvet.',
            prepTime: '10 min',
            cookTime: '0 min',
            servings: 'Frosts a 9x13" cake',
            ingredients: [
                '8 oz (226g) Cream Cheese, softened',
                '1/2 cup (113g) Unsalted Butter, softened',
                '4 cups (480g) Powdered Sugar, sifted',
                '1 tsp Vanilla Extract'
            ],
            instructions: [
                'In a large bowl, beat the cream cheese and butter until smooth and creamy.',
                'Gradually add the powdered sugar and mix on low speed until combined, then high speed until smooth.',
                'Stir in the vanilla extract.'
            ]
        },
        {
            id: 'filling-pastry-cream',
            title: 'Pastry Cream (Crème Pâtissière)',
            description: 'A rich, creamy custard used for filling éclairs, tarts, and donuts.',
            prepTime: '10 min',
            cookTime: '15 min',
            servings: '2 cups',
            ingredients: [
                '2 cups (480ml) Whole Milk',
                '1/2 cup (100g) Sugar',
                '1/4 cup (30g) Cornstarch',
                'Pinch of Salt',
                '4 large Egg Yolks',
                '2 tbsp Unsalted Butter',
                '1 tsp Vanilla Extract'
            ],
            instructions: [
                'Heat milk in a saucepan until it begins to simmer.',
                'In a bowl, whisk together sugar, cornstarch, salt, and egg yolks.',
                'Slowly temper the hot milk into the egg mixture, whisking constantly.',
                'Return the entire mixture to the saucepan and cook over medium heat, whisking constantly, until it thickens and boils.',
                'Boil for 1 minute, then remove from heat. Stir in butter and vanilla.',
                'Press plastic wrap directly onto the surface and chill for at least 2 hours.'
            ]
        },
        {
            id: 'filling-lemon-curd',
            title: 'Lemon Curd',
            description: 'A tangy, sweet, and bright filling for tarts, cakes, and scones.',
            prepTime: '5 min',
            cookTime: '10 min',
            servings: '1 1/2 cups',
            ingredients: [
                '3 large Eggs',
                '1 cup (200g) Sugar',
                '1/2 cup (120ml) Fresh Lemon Juice',
                'Zest of 2 Lemons',
                '1/2 cup (113g) Unsalted Butter, cubed'
            ],
            instructions: [
                'In a saucepan, whisk together eggs, sugar, lemon juice, and zest.',
                'Cook over medium-low heat, whisking constantly, until the mixture thickens enough to coat the back of a spoon (about 10 minutes). Do not boil.',
                'Remove from heat and stir in the butter until melted and smooth.',
                'Strain through a fine-mesh sieve into a bowl. Press plastic wrap onto the surface and chill.'
            ]
        },
        {
            id: 'frosting-ganache',
            title: 'Chocolate Ganache',
            description: 'A versatile mixture of chocolate and cream for drips, fillings, or frosting.',
            prepTime: '5 min',
            cookTime: '5 min',
            servings: 'Covers one 8" cake',
            ingredients: [
                '8 oz (225g) Semi-Sweet Chocolate, finely chopped',
                '1 cup (240ml) Heavy Cream'
            ],
            instructions: [
                'Place the chopped chocolate in a heatproof bowl.',
                'Heat the heavy cream in a saucepan until it just begins to simmer.',
                'Pour the hot cream over the chocolate and let it sit for 5 minutes without stirring.',
                'Gently stir from the center outwards until the ganache is smooth and glossy.',
                'Let it cool to the desired consistency. Cool at room temperature for a spreadable frosting, or use while warm for a drip.'
            ]
        }
    ],
    'Savory Bakes': [
        {
            id: 'savory-quiche-lorraine',
            title: 'Quiche Lorraine',
            description: 'A classic French tart with a bacon, egg, and cheese custard filling.',
            prepTime: '20 min',
            cookTime: '45 min',
            servings: '6 servings',
            ingredients: [
                '1 (9-inch) unbaked pie crust',
                '6 slices Bacon, cooked and crumbled',
                '1 cup (115g) Gruyère Cheese, shredded',
                '3 large Eggs',
                '1 1/2 cups (360ml) Heavy Cream',
                '1/4 tsp Salt',
                'Pinch of Nutmeg'
            ],
            instructions: [
                'Preheat oven to 375°F (190°C). Blind bake the pie crust for 15 minutes.',
                'Sprinkle the cooked bacon and shredded cheese into the bottom of the crust.',
                'In a bowl, whisk eggs, cream, salt, and nutmeg.',
                'Carefully pour the egg mixture over the bacon and cheese.',
                'Bake for 30-35 minutes, until the center is just set.'
            ]
        },
        {
            id: 'savory-sausage-rolls',
            title: 'British Sausage Rolls',
            description: 'Seasoned sausage meat wrapped in flaky puff pastry.',
            prepTime: '15 min',
            cookTime: '25 min',
            servings: '12 rolls',
            ingredients: [
                '1 lb (450g) Pork Sausage Meat',
                '1 sheet (approx. 10x15 inches) Puff Pastry, thawed',
                '1 Egg, beaten (for egg wash)'
            ],
            instructions: [
                'Preheat oven to 400°F (200°C).',
                'Unroll the puff pastry sheet and cut it in half lengthwise to create two long rectangles.',
                'Divide the sausage meat in half and form each half into a long log down the center of each pastry rectangle.',
                'Brush one long edge of the pastry with egg wash. Fold the other side over and press to seal.',
                'Cut each log into 6 individual rolls. Brush the tops with egg wash and cut small slits.',
                'Bake for 20-25 minutes until golden brown and puffed.'
            ]
        },
        {
            id: 'savory-chicken-pot-pie',
            title: 'Chicken Pot Pie',
            description: 'A creamy chicken and vegetable filling topped with a flaky crust.',
            prepTime: '30 min',
            cookTime: '40 min',
            servings: '6 servings',
            ingredients: [
                '1 recipe for a single-crust pie dough',
                '1/3 cup Butter',
                '1/3 cup Chopped Onion',
                '1/3 cup All-Purpose Flour',
                '1 3/4 cups Chicken Broth',
                '1/2 cup Milk',
                '2 cups Cooked Chicken, shredded',
                '2 cups Mixed Vegetables (peas, carrots, corn)'
            ],
            instructions: [
                'Preheat oven to 425°F (220°C).',
                'In a saucepan, melt butter and sauté onion. Stir in flour to make a roux.',
                'Gradually whisk in broth and milk. Cook until thickened.',
                'Stir in chicken and vegetables. Pour into a pie dish.',
                'Top with pie crust, seal edges, and cut vents.',
                'Bake for 35-40 minutes until crust is golden and filling is bubbly.'
            ]
        },
        {
            id: 'bread-cornbread',
            title: 'Southern-Style Cornbread',
            description: 'A savory, crumbly cornbread with a crisp crust from a cast-iron skillet.',
            prepTime: '10 min',
            cookTime: '25 min',
            servings: '8 servings',
            ingredients: [
                '2 tbsp Bacon Drippings or Vegetable Oil',
                '2 cups (240g) Self-Rising Cornmeal Mix',
                '2 large Eggs',
                '1 1/2 cups (360ml) Buttermilk'
            ],
            instructions: [
                'Place bacon drippings in a 10-inch cast-iron skillet and place in the oven. Preheat oven to 425°F (220°C).',
                'In a bowl, whisk together cornmeal mix, eggs, and buttermilk until just combined.',
                'Carefully remove the hot skillet from the oven. Pour the batter into the sizzling hot skillet.',
                'Bake for 20-25 minutes, until golden brown and a toothpick comes out clean.'
            ]
        }
    ]
};
// Add 20 new recipes
recipeDatabase['Cookies & Bars'].push({
    id: 'bar-blondies',
    title: 'Chewy Brown Sugar Blondies',
    description: 'A buttery, caramel-flavored bar cookie, like a brownie without the chocolate.',
    prepTime: '15 min',
    cookTime: '25 min',
    servings: '16 bars',
    ingredients: [
        '1/2 cup (113g) Unsalted Butter, melted',
        '1 cup (220g) Brown Sugar, packed',
        '1 large Egg',
        '1 tsp Vanilla Extract',
        '1 cup (120g) All-Purpose Flour',
        '1/2 tsp Baking Powder',
        '1/4 tsp Salt',
        '1 cup Chocolate or Butterscotch Chips (optional)'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C). Grease an 8x8 inch pan.',
        'Mix melted butter and brown sugar. Beat in egg and vanilla.',
        'Whisk together flour, baking powder, and salt. Fold into the wet ingredients.',
        'Stir in chips if using. Spread into pan.',
        'Bake for 22-25 minutes.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-lemon-blueberry',
    title: 'Lemon Blueberry Layer Cake',
    description: 'A bright and fresh cake with layers of lemon cake and fresh blueberries.',
    prepTime: '25 min',
    cookTime: '30 min',
    servings: '12 servings',
    ingredients: [
        '2 1/2 cups (300g) Flour',
        '2 tsp Baking Powder',
        '1/2 tsp Salt',
        '1 cup (227g) Butter, softened',
        '1 3/4 cups (350g) Sugar',
        '4 large Eggs',
        '1/2 cup (120ml) Lemon Juice',
        '1/2 cup (120ml) Milk',
        '2 cups Fresh Blueberries'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Toss blueberries with 1 tbsp of flour.',
        'Cream butter and sugar. Add eggs one at a time.',
        'Alternate adding dry ingredients and a mix of lemon juice and milk.',
        'Gently fold in blueberries. Divide between two 9-inch pans.',
        'Bake for 25-30 minutes.'
    ]
}, {
    id: 'cupcake-chocolate',
    title: 'Classic Chocolate Cupcakes',
    description: 'Rich, moist, and deeply chocolatey cupcakes.',
    prepTime: '15 min',
    cookTime: '22 min',
    servings: '12 cupcakes',
    ingredients: [
        '1 cup (120g) Flour',
        '1 cup (200g) Sugar',
        '1/2 cup (45g) Cocoa Powder',
        '1 tsp Baking Soda',
        '1/2 tsp Baking Powder',
        '1/2 tsp Salt',
        '1/2 cup (120ml) Buttermilk',
        '1/4 cup (60ml) Vegetable Oil',
        '1 large Egg',
        '1/2 cup (120ml) Hot Coffee'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Whisk all dry ingredients.',
        'In a separate bowl, whisk buttermilk, oil, and egg.',
        'Combine wet and dry. Slowly stir in hot coffee.',
        'Fill cupcake liners 2/3 full and bake for 18-22 minutes.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-challah',
    title: 'Classic Challah Bread',
    description: 'A beautiful, braided egg bread that is soft, rich, and slightly sweet.',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: '2 loaves',
    ingredients: [
        '1 1/2 cups (360ml) Warm Water',
        '1 tbsp Yeast',
        '1/2 cup (100g) Sugar',
        '1/2 cup (120ml) Vegetable Oil',
        '2 large Eggs',
        '1 tbsp Salt',
        '6-7 cups (720-840g) Bread Flour',
        'Egg wash (1 egg + 1 tbsp water)'
    ],
    instructions: [
        'Activate yeast in warm water with a pinch of sugar.',
        'Mix in sugar, oil, eggs, and salt.',
        'Gradually add flour until a soft dough forms. Knead for 10 minutes until smooth.',
        'Let rise for 1.5 hours.',
        'Divide, braid into loaves, and let rise for another hour.',
        'Brush with egg wash and bake at 350°F (175°C) for 30-35 minutes.'
    ]
}, {
    id: 'dough-pretzels',
    title: 'Soft Pretzels',
    description: 'Chewy, salty, and delicious soft pretzels, just like at the mall.',
    prepTime: '25 min',
    cookTime: '15 min',
    servings: '8 pretzels',
    ingredients: [
        '1 1/2 cups (360ml) Warm Water',
        '1 packet (2 1/4 tsp) Yeast',
        '1 tsp Salt',
        '1 tbsp Sugar',
        '4 cups (480g) Flour',
        'Baking Soda Bath: 2/3 cup Baking Soda, 10 cups Water',
        'Coarse Salt for topping'
    ],
    instructions: [
        'Make dough and let rise for 1 hour.',
        'Divide and shape into pretzels.',
        'Boil each pretzel in the baking soda bath for 30 seconds.',
        'Place on baking sheet, sprinkle with salt, and bake at 450°F (230°C) for 12-15 minutes.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'pie-chocolate-silk',
    title: 'French Silk Pie',
    description: 'An ultra-rich and silky smooth chocolate pie in a cookie crust.',
    prepTime: '30 min',
    cookTime: '10 min (crust)',
    servings: '8 servings',
    ingredients: [
        'Crust: 24 Oreo cookies, 6 tbsp Melted Butter',
        'Filling: 1 cup (200g) Sugar, 4 large Eggs',
        '8 oz (225g) Bittersweet Chocolate, melted',
        '1 cup (227g) Unsalted Butter, softened',
        '2 tsp Vanilla Extract'
    ],
    instructions: [
        'Make crust by crushing cookies and mixing with butter. Press into pie plate and chill.',
        'Beat sugar and eggs in a double boiler until 160°F. Whip until thick and cool.',
        'Beat butter until fluffy. Gradually beat in cooled chocolate.',
        'Fold in the egg mixture. Pour into crust and chill for at least 6 hours.'
    ]
}, {
    id: 'tart-lemon-meringue',
    title: 'Lemon Meringue Tart',
    description: 'A tangy lemon filling topped with fluffy toasted meringue in a sweet pastry shell.',
    prepTime: '45 min',
    cookTime: '30 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Tart Shell',
        '1 cup (200g) Sugar',
        '1/2 cup (120ml) Lemon Juice',
        '3 Egg Yolks',
        '1 cup (240ml) Water',
        '1/4 cup (30g) Cornstarch',
        'Meringue: 3 Egg Whites, 6 tbsp Sugar'
    ],
    instructions: [
        'Make lemon filling by cooking sugar, lemon juice, yolks, water, and cornstarch until thick.',
        'Pour into tart shell.',
        'Whip egg whites and sugar to stiff peaks for meringue.',
        'Top tart with meringue and bake at 350°F (175°C) for 10-15 minutes until golden.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'dessert-panna-cotta',
    title: 'Vanilla Bean Panna Cotta',
    description: 'A simple and elegant Italian dessert of sweetened cream set with gelatin.',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: '6 servings',
    ingredients: [
        '1 packet (2 1/4 tsp) Gelatin',
        '1/4 cup (60ml) Cold Water',
        '3 cups (720ml) Heavy Cream',
        '1/2 cup (100g) Sugar',
        '1 Vanilla Bean, split'
    ],
    instructions: [
        'Sprinkle gelatin over cold water and let bloom.',
        'Heat cream, sugar, and vanilla bean until simmering.',
        'Remove from heat, discard vanilla bean, and whisk in gelatin mixture until dissolved.',
        'Pour into ramekins and chill for at least 4 hours until set.'
    ]
}, {
    id: 'pastry-danish',
    title: 'Cheese Danish',
    description: 'Flaky pastry with a sweet cream cheese filling.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '8 danishes',
    ingredients: [
        '1 sheet Puff Pastry, thawed',
        'Filling: 8 oz Cream Cheese, 1/4 cup Sugar, 1 Egg Yolk, 1 tsp Vanilla',
        'Egg wash'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Mix filling ingredients until smooth.',
        'Cut puff pastry into squares. Spoon filling into the center.',
        'Fold corners in, brush with egg wash.',
        'Bake for 15-20 minutes until golden.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-ermine',
    title: 'Ermine Frosting (Flour Buttercream)',
    description: 'A silky, not-too-sweet frosting with a texture like whipped cream.',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: 'Frosts a 2-layer 9" cake',
    ingredients: [
        '1 cup (240ml) Milk',
        '5 tbsp All-Purpose Flour',
        '1 cup (227g) Unsalted Butter, softened',
        '1 cup (200g) Granulated Sugar',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Whisk milk and flour in a saucepan. Cook over medium heat, whisking constantly, until a thick paste forms. Cool completely.',
        'Beat butter and sugar until light and fluffy (about 5-8 minutes).',
        'Add the cooled flour paste to the butter mixture and whip until it resembles whipped cream.'
    ]
}, {
    id: 'filling-raspberry',
    title: 'Raspberry Cake Filling',
    description: 'A simple, bright, and tangy raspberry filling for cakes and pastries.',
    prepTime: '5 min',
    cookTime: '15 min',
    servings: 'Fills one 8" cake',
    ingredients: [
        '12 oz (340g) Raspberries, fresh or frozen',
        '1/2 cup (100g) Sugar',
        '2 tbsp Cornstarch',
        '2 tbsp Water'
    ],
    instructions: [
        'In a saucepan, combine raspberries and sugar. Cook over medium heat until berries break down.',
        'In a small bowl, whisk cornstarch and water to make a slurry.',
        'Stir the slurry into the raspberry mixture. Cook for 2 more minutes, stirring, until thickened.',
        'Let cool completely before using.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-cheese-straws',
    title: 'Cheddar Cheese Straws',
    description: 'A classic Southern appetizer, these are crisp, cheesy, and slightly spicy.',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: '4 dozen',
    ingredients: [
        '8 oz (225g) Sharp Cheddar Cheese, grated',
        '1/2 cup (113g) Unsalted Butter, softened',
        '1 1/2 cups (180g) All-Purpose Flour',
        '1/2 tsp Salt',
        '1/4 tsp Cayenne Pepper'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Beat cheese and butter until creamy.',
        'Whisk together flour, salt, and cayenne. Add to cheese mixture and mix until a dough forms.',
        'Use a cookie press or roll and cut into thin strips.',
        'Bake for 12-15 minutes until golden.'
    ]
});
// Add 8 more to reach 20
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-macadamia',
    title: 'White Chocolate Macadamia Nut Cookies',
    description: 'Soft and chewy cookies loaded with white chocolate and macadamia nuts.',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: '24 cookies',
    ingredients: [
        '1/2 cup (113g) Butter, softened',
        '3/4 cup (165g) Brown Sugar',
        '1/4 cup (50g) Granulated Sugar',
        '1 Egg',
        '1 tsp Vanilla',
        '1 1/2 cups (180g) Flour',
        '1/2 tsp Baking Soda',
        '1 cup White Chocolate Chips',
        '1 cup Macadamia Nuts, chopped'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Cream butter and sugars. Beat in egg and vanilla.',
        'Whisk dry ingredients and add to wet mixture.',
        'Stir in white chocolate chips and macadamia nuts.',
        'Drop by spoonfuls onto baking sheets and bake for 10-12 minutes.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-coffee',
    title: 'Classic Coffee Cake',
    description: 'A tender, buttery cake with a cinnamon-streusel swirl and topping.',
    prepTime: '20 min',
    cookTime: '45 min',
    servings: '12 servings',
    ingredients: [
        'Streusel: 1 cup Brown Sugar, 1 cup Flour, 1 tbsp Cinnamon, 1/2 cup cold Butter',
        'Cake: 2 cups Flour, 1 cup Sugar, 1 tsp Baking Powder, 1 tsp Baking Soda, 1/2 tsp Salt, 1 cup Sour Cream, 2 Eggs, 1 tsp Vanilla'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Make streusel by cutting butter into dry ingredients until crumbly.',
        'Whisk cake dry ingredients. In another bowl, whisk wet ingredients.',
        'Combine wet and dry. Pour half of batter into a 9x13 pan, sprinkle with half the streusel. Top with remaining batter and streusel.',
        'Bake for 40-45 minutes.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-bagels',
    title: 'New York-Style Bagels',
    description: 'Chewy, dense, and delicious bagels made at home.',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: '8 bagels',
    ingredients: [
        '4 cups (480g) Bread Flour',
        '2 tsp Salt',
        '1 tbsp Sugar',
        '2 tsp Instant Yeast',
        '1 1/2 cups (360ml) Warm Water',
        'For boiling: 2 quarts Water, 1/4 cup Honey'
    ],
    instructions: [
        'Mix dough ingredients and knead for 10 minutes.',
        'Let rise for 1 hour. Divide and shape into bagels.',
        'Let shaped bagels rest for 10 minutes.',
        'Boil each bagel for 1 minute per side in the honey water.',
        'Top with seeds if desired and bake at 425°F (220°C) for 20-25 minutes.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'tart-chocolate',
    title: 'Rich Chocolate Tart',
    description: 'A decadent, silky chocolate ganache filling in a crisp pastry shell.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '10 servings',
    ingredients: [
        '1 pre-baked 9-inch Tart Shell',
        '8 oz (225g) Bittersweet Chocolate, chopped',
        '1 cup (240ml) Heavy Cream',
        '2 tbsp Unsalted Butter'
    ],
    instructions: [
        'Place chopped chocolate in a bowl.',
        'Heat cream and butter until just simmering.',
        'Pour hot cream over chocolate and let sit for 5 minutes.',
        'Whisk until smooth. Pour into the cooled tart shell.',
        'Chill for at least 2 hours until set.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'pastry-baklava',
    title: 'Classic Baklava',
    description: 'Layers of flaky phyllo dough, nuts, and sweet syrup.',
    prepTime: '30 min',
    cookTime: '50 min',
    servings: '24 pieces',
    ingredients: [
        '1 lb Phyllo Dough, thawed',
        '1 lb Mixed Nuts (walnuts, pistachios), chopped',
        '1 cup (227g) Unsalted Butter, melted',
        '1 tsp Cinnamon',
        'Syrup: 1 cup Water, 1 cup Sugar, 1/2 cup Honey, 1 Cinnamon Stick'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Mix nuts and cinnamon.',
        'Brush a 9x13 pan with butter. Layer 8 sheets of phyllo, brushing each with butter.',
        'Sprinkle with a layer of nuts. Repeat layering phyllo and nuts.',
        'Top with 8 more sheets of phyllo, brushing each.',
        'Cut into diamonds. Bake for 50 minutes.',
        'While baking, make syrup by boiling ingredients for 5 minutes. Pour hot syrup over hot baklava.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-chocolate',
    title: 'Classic Chocolate Buttercream',
    description: 'A rich, creamy, and perfectly chocolatey frosting.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 'Frosts 12 cupcakes',
    ingredients: [
        '1 cup (227g) Unsalted Butter, softened',
        '3/4 cup (65g) Unsweetened Cocoa Powder',
        '3 cups (360g) Powdered Sugar',
        '1/3 cup (80ml) Milk',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Beat butter until creamy.',
        'Sift in cocoa powder and powdered sugar, alternating with milk.',
        'Beat on high speed until light and fluffy. Stir in vanilla.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-focaccia-art',
    title: 'Focaccia Garden Art',
    description: 'Turn your focaccia into a canvas with vegetable decorations.',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: '12 servings',
    ingredients: [
        '1 recipe Focaccia Dough',
        'Assorted vegetables (bell peppers, cherry tomatoes, olives, onions)',
        'Fresh herbs (rosemary, thyme)'
    ],
    instructions: [
        'Prepare focaccia dough and spread in an oiled pan.',
        'Let it do its final rise.',
        'Artfully arrange sliced vegetables and herbs on top to create a garden scene.',
        'Drizzle with olive oil and sprinkle with flaky salt.',
        'Bake according to your focaccia recipe.'
    ]
});
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-ginger-molasses',
    title: 'Chewy Ginger Molasses Cookies',
    description: 'Soft, chewy cookies packed with warm spices.',
    prepTime: '15 min',
    cookTime: '10 min',
    servings: '30 cookies',
    ingredients: [
        '2 1/4 cups (270g) Flour',
        '2 tsp Baking Soda',
        '1 tbsp Ground Ginger',
        '1 tsp Cinnamon',
        '1/2 tsp Cloves',
        '3/4 cup (170g) Butter, softened',
        '1 cup (220g) Brown Sugar',
        '1 Egg',
        '1/4 cup Molasses'
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'Whisk dry ingredients.',
        'Cream butter and sugar. Beat in egg and molasses.',
        'Combine wet and dry. Roll into balls, coat in sugar.',
        'Bake for 8-10 minutes.'
    ]
});
// Add 20 more recipes to reach over 100 total
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-biscotti',
    title: 'Classic Almond Biscotti',
    description: 'Twice-baked Italian cookies, perfect for dipping in coffee.',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: '24 biscotti',
    ingredients: [
        '2 cups (240g) All-Purpose Flour',
        '1 cup (200g) Sugar',
        '1 tsp Baking Powder',
        '1/2 tsp Salt',
        '2 large Eggs',
        '1 tsp Vanilla Extract',
        '1 cup (140g) Whole Almonds, toasted'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Whisk dry ingredients. In another bowl, whisk eggs and vanilla.',
        'Combine wet and dry, then fold in almonds. Form dough into a flat log on a baking sheet.',
        'Bake for 25-30 minutes. Let cool for 10 minutes.',
        'Slice the log diagonally into 1/2-inch thick slices. Place cut-side down and bake for another 10-15 minutes, flipping halfway, until golden and crisp.'
    ]
}, {
    id: 'cookie-madeleines',
    title: 'French Madeleines',
    description: 'Delicate, shell-shaped sponge cakes with a distinctive hump.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '12 madeleines',
    ingredients: [
        '2/3 cup (80g) All-Purpose Flour',
        '1/2 tsp Baking Powder',
        '2 large Eggs',
        '1/2 cup (100g) Sugar',
        '1 tsp Vanilla Extract',
        'Zest of 1 Lemon',
        '1/2 cup (113g) Unsalted Butter, melted and cooled'
    ],
    instructions: [
        'Whisk flour and baking powder.',
        'Beat eggs and sugar until pale and thick. Beat in vanilla and lemon zest.',
        'Gently fold in the flour mixture, then fold in the cooled melted butter.',
        'Chill the batter for at least 1 hour.',
        'Butter and flour a madeleine pan. Fill each mold 3/4 full.',
        'Bake at 375°F (190°C) for 9-11 minutes, until the edges are golden and the humps have formed.'
    ]
}, {
    id: 'cookie-whoopie-pies',
    title: 'Classic Whoopie Pies',
    description: 'Soft, cake-like chocolate cookies sandwiched with a fluffy marshmallow filling.',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: '12 pies',
    ingredients: [
        'Cookies: 2 cups (240g) Flour, 1/2 cup (45g) Cocoa Powder, 1 tsp Baking Soda, 1/2 cup (113g) Butter, 1 cup (220g) Brown Sugar, 1 Egg, 1 tsp Vanilla, 1 cup (240ml) Buttermilk',
        'Filling: 1 cup (227g) Shortening, 1 1/2 cups Powdered Sugar, 1 jar (7oz) Marshmallow Fluff, 1 tsp Vanilla'
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'For cookies, whisk dry ingredients. Cream butter and sugar, beat in egg and vanilla. Alternate adding dry ingredients and buttermilk.',
        'Drop rounded tablespoons onto baking sheets. Bake for 10-12 minutes.',
        'For filling, beat all ingredients until light and fluffy.',
        'Spread filling on the flat side of one cookie and top with another.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-angel-food',
    title: 'Angel Food Cake',
    description: 'An incredibly light, airy, and fat-free sponge cake made with whipped egg whites.',
    prepTime: '25 min',
    cookTime: '40 min',
    servings: '12 servings',
    ingredients: [
        '1 1/2 cups (180g) Powdered Sugar',
        '1 cup (120g) Cake Flour',
        '12 large Egg Whites, room temperature',
        '1 1/2 tsp Cream of Tartar',
        '1 cup (200g) Granulated Sugar',
        '2 tsp Vanilla Extract'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C). Do not grease the tube pan.',
        'Sift powdered sugar and cake flour together four times.',
        'Whip egg whites and cream of tartar to soft peaks. Gradually add granulated sugar and whip to stiff, glossy peaks. Fold in vanilla.',
        'Gently fold the flour mixture into the meringue in thirds.',
        'Pour into an ungreased tube pan. Bake for 35-40 minutes.',
        'Invert the pan to cool completely before removing.'
    ]
}, {
    id: 'cake-black-forest',
    title: 'Black Forest Cake',
    description: 'Layers of rich chocolate cake, whipped cream, and cherry filling, decorated with chocolate shavings.',
    prepTime: '1 hr',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        '1 recipe Chocolate Cake',
        '1 can (21 oz) Cherry Pie Filling',
        '2 tbsp Kirsch (optional)',
        '3 cups Heavy Cream',
        '1/2 cup Powdered Sugar',
        'Chocolate Shavings for decoration'
    ],
    instructions: [
        'Bake chocolate cake layers and let cool completely.',
        'If using, stir Kirsch into the cherry pie filling.',
        'Whip heavy cream and powdered sugar to stiff peaks.',
        'Assemble the cake: place one layer on a plate, top with a ring of whipped cream, fill the center with cherry filling. Repeat with next layer.',
        'Frost the entire cake with remaining whipped cream and decorate with chocolate shavings and cherries.'
    ]
}, {
    id: 'cake-german-chocolate',
    title: 'German Chocolate Cake',
    description: 'A mild chocolate cake with a rich coconut-pecan frosting.',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: '12 servings',
    ingredients: [
        '1 (4 oz) bar German\'s Sweet Chocolate',
        '1/2 cup Boiling Water',
        '1 cup (227g) Butter',
        '2 cups (400g) Sugar',
        '4 Egg Yolks',
        '2 1/2 cups (300g) Cake Flour',
        '1 tsp Baking Soda',
        '1 cup Buttermilk',
        '4 Egg Whites, stiffly beaten',
        'Frosting: 1 cup Evaporated Milk, 1 cup Sugar, 3 Egg Yolks, 1/2 cup Butter, 1 1/3 cups Coconut, 1 cup chopped Pecans'
    ],
    instructions: [
        'Melt chocolate in boiling water; cool.',
        'Cream butter and sugar. Add egg yolks. Blend in chocolate.',
        'Alternate adding dry ingredients and buttermilk. Fold in beaten egg whites.',
        'Bake in three 9-inch pans at 350°F (175°C) for 30 minutes.',
        'For frosting, cook milk, sugar, yolks, and butter until thickened. Stir in coconut and pecans. Cool and spread between layers and on top.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-english-muffins',
    title: 'Homemade English Muffins',
    description: 'Soft, chewy muffins with the classic nooks and crannies, cooked on a griddle.',
    prepTime: '25 min',
    cookTime: '15 min',
    servings: '12 muffins',
    ingredients: [
        '1 cup (240ml) Milk',
        '2 tbsp Sugar',
        '2 1/4 tsp Yeast',
        '3 1/2 cups (420g) Flour',
        '1 tsp Salt',
        '1 Egg',
        '2 tbsp Melted Butter',
        'Cornmeal for dusting'
    ],
    instructions: [
        'Warm milk, sugar, and yeast. Let sit for 5 minutes.',
        'Combine with flour, salt, egg, and butter. Knead for 8 minutes.',
        'Let rise for 1-2 hours.',
        'Roll dough to 1/2-inch thickness. Cut out rounds with a 3-inch cutter.',
        'Let rounds rise on a cornmeal-dusted sheet for 30 minutes.',
        'Cook on a lightly greased griddle or skillet over low-medium heat for 5-8 minutes per side.'
    ]
}, {
    id: 'bread-dinner-rolls',
    title: 'Soft Dinner Rolls',
    description: 'Fluffy, buttery, and pull-apart tender dinner rolls.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '12 rolls',
    ingredients: [
        '1 cup (240ml) Warm Milk',
        '1/4 cup (50g) Sugar',
        '2 1/4 tsp Yeast',
        '1 Egg',
        '1/4 cup (57g) Melted Butter',
        '3 1/2 cups (420g) Flour',
        '1 tsp Salt'
    ],
    instructions: [
        'Activate yeast in warm milk with a pinch of sugar.',
        'Mix in sugar, egg, butter, and salt.',
        'Gradually add flour and knead for 8-10 minutes until smooth.',
        'Let rise for 1-2 hours.',
        'Divide into 12 balls, place in a greased 9x13 pan. Let rise for another 30-60 minutes.',
        'Bake at 375°F (190°C) for 15-20 minutes. Brush with melted butter.'
    ]
}, {
    id: 'bread-baguettes',
    title: 'Classic French Baguettes',
    description: 'A lean dough recipe that produces a crisp crust and an open, airy crumb.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '2 baguettes',
    ingredients: [
        '500g Bread Flour',
        '375g Water',
        '10g Salt',
        '2g Instant Yeast'
    ],
    instructions: [
        'Mix all ingredients to form a shaggy dough. Let rest for 30 minutes (autolyse).',
        'Perform a series of stretch and folds over 2 hours.',
        'Bulk ferment until dough has risen by about 50%.',
        'Preshape into logs, rest, then perform final shaping into long baguettes.',
        'Proof on a floured couche or parchment paper.',
        'Bake in a steamy oven at 475°F (245°C) for 20-25 minutes.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'pie-coconut-cream',
    title: 'Coconut Cream Pie',
    description: 'A creamy coconut custard in a flaky pie crust, topped with whipped cream and toasted coconut.',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Pie Crust',
        '2/3 cup (133g) Sugar',
        '1/4 cup (30g) Cornstarch',
        '3 cups (720ml) Milk',
        '4 Egg Yolks',
        '1 cup Sweetened Shredded Coconut',
        '2 tbsp Butter',
        'Topping: 1 cup Heavy Cream, 1/4 cup Toasted Coconut'
    ],
    instructions: [
        'In a saucepan, whisk sugar and cornstarch. Gradually whisk in milk.',
        'Cook over medium heat until thickened. Temper a small amount into the egg yolks, then return to the pan.',
        'Cook for 2 more minutes. Remove from heat, stir in butter and coconut.',
        'Pour into pie crust and chill for 4 hours.',
        'Top with whipped cream and toasted coconut.'
    ]
}, {
    id: 'pie-banana-cream',
    title: 'Banana Cream Pie',
    description: 'Layers of fresh bananas and vanilla pastry cream in a pie crust, topped with whipped cream.',
    prepTime: '30 min',
    cookTime: '15 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Pie Crust',
        '1 recipe Pastry Cream',
        '3-4 ripe Bananas, sliced',
        'Topping: 1 cup Heavy Cream, 2 tbsp Sugar'
    ],
    instructions: [
        'Prepare pastry cream and let it cool.',
        'Slice bananas and arrange a layer in the bottom of the cooled pie crust.',
        'Spread half the pastry cream over the bananas. Add another layer of bananas and the remaining pastry cream.',
        'Chill for at least 2 hours.',
        'Top with sweetened whipped cream before serving.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'pastry-profiteroles',
    title: 'Profiteroles (Cream Puffs)',
    description: 'Crisp, hollow choux pastry balls filled with whipped cream or pastry cream and topped with chocolate.',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: '18 puffs',
    ingredients: [
        '1 recipe Pâte à Choux',
        '1 recipe Pastry Cream or Sweetened Whipped Cream',
        '1 recipe Chocolate Ganache'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Pipe choux pastry into 1.5-inch mounds on a baking sheet.',
        'Bake for 15 minutes, then reduce heat to 350°F (175°C) and bake for 15-20 more minutes until golden and hollow.',
        'Let cool. Fill with cream and dip the tops in chocolate ganache.'
    ]
}, {
    id: 'pastry-cannoli',
    title: 'Homemade Cannoli',
    description: 'Crisp, fried pastry shells filled with a sweet and creamy ricotta filling.',
    prepTime: '45 min',
    cookTime: '15 min',
    servings: '12 cannoli',
    ingredients: [
        'Shells: 2 cups (240g) Flour, 2 tbsp Sugar, 1/4 cup Marsala Wine, 1 Egg',
        'Filling: 2 cups Ricotta Cheese (strained), 1 cup Powdered Sugar, 1/2 cup Mini Chocolate Chips, 1 tsp Vanilla'
    ],
    instructions: [
        'Make shell dough and let it rest. Roll thin and cut into circles.',
        'Wrap circles around cannoli forms and fry in oil at 360°F (182°C) until golden.',
        'Drain and cool. Carefully remove forms.',
        'For filling, beat strained ricotta and powdered sugar until smooth. Fold in chocolate chips and vanilla.',
        'Pipe filling into cooled shells just before serving.'
    ]
}, {
    id: 'dessert-pavlova',
    title: 'Classic Pavlova',
    description: 'A meringue dessert with a crisp crust and a soft, light inside, topped with whipped cream and fresh fruit.',
    prepTime: '20 min',
    cookTime: '1 hr 15 min',
    servings: '8 servings',
    ingredients: [
        '4 large Egg Whites, room temperature',
        '1 cup (200g) Superfine Sugar',
        '1 tsp White Vinegar',
        '1 tsp Cornstarch',
        'Topping: 1 1/2 cups Heavy Cream, Fresh Berries'
    ],
    instructions: [
        'Preheat oven to 250°F (120°C).',
        'Whip egg whites to soft peaks. Gradually add sugar and whip until very stiff and glossy.',
        'Gently fold in vinegar and cornstarch.',
        'Spoon or pipe the meringue into a large circle on a parchment-lined baking sheet.',
        'Bake for 1 hour and 15 minutes. Turn off the oven and let the meringue cool completely inside the oven.',
        'Top with whipped cream and fresh fruit just before serving.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-italian-meringue',
    title: 'Italian Meringue Buttercream',
    description: 'The most stable buttercream, made by pouring hot sugar syrup into whipping egg whites.',
    prepTime: '30 min',
    cookTime: '15 min',
    servings: 'Frosts a 3-layer 8" cake',
    ingredients: [
        '1 cup (200g) Sugar',
        '1/2 cup (120ml) Water',
        '5 large Egg Whites',
        '2 cups (454g) Unsalted Butter, room temp',
        '2 tsp Vanilla Extract'
    ],
    instructions: [
        'In a saucepan, heat sugar and water to 240°F (115°C) (soft-ball stage).',
        'While syrup heats, whip egg whites to soft peaks in a stand mixer.',
        'With the mixer on medium-low, slowly and carefully stream the hot sugar syrup down the side of the bowl into the egg whites.',
        'Increase speed to high and whip until the meringue is stiff and the bowl is cool to the touch.',
        'Switch to paddle attachment. On low speed, add butter a few pieces at a time until incorporated. Beat until smooth.'
    ]
}, {
    id: 'frosting-fudge',
    title: 'Chocolate Fudge Frosting',
    description: 'A rich, dense, and deeply chocolatey frosting that sets up firmly.',
    prepTime: '10 min',
    cookTime: '10 min',
    servings: 'Frosts a 9x13" cake',
    ingredients: [
        '1/2 cup (113g) Butter',
        '2/3 cup (55g) Unsweetened Cocoa Powder',
        '3 cups (360g) Powdered Sugar',
        '1/3 cup (80ml) Milk',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Melt butter in a saucepan.',
        'Stir in cocoa powder. Cook for 1 minute.',
        'Remove from heat. Alternately add powdered sugar and milk, beating until smooth.',
        'Stir in vanilla. Let it cool slightly to thicken before frosting.'
    ]
}, {
    id: 'filling-caramel',
    title: 'Homemade Caramel Sauce',
    description: 'A rich, smooth, and versatile caramel sauce for drizzling or filling.',
    prepTime: '5 min',
    cookTime: '15 min',
    servings: '1 1/2 cups',
    ingredients: [
        '1 cup (200g) Granulated Sugar',
        '1/4 cup (60ml) Water',
        '1/2 cup (120ml) Heavy Cream, warm',
        '6 tbsp (85g) Unsalted Butter, cubed',
        '1 tsp Sea Salt'
    ],
    instructions: [
        'In a saucepan, combine sugar and water. Cook over medium heat, without stirring, until the sugar dissolves and turns a deep amber color.',
        'Immediately remove from heat and slowly whisk in the warm heavy cream. The mixture will bubble vigorously.',
        'Whisk in the butter until smooth, then stir in the salt.',
        'Let cool completely. The sauce will thicken as it cools.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-scones',
    title: 'Cheddar & Chive Scones',
    description: 'Tender, flaky savory scones packed with sharp cheddar and fresh chives.',
    prepTime: '15 min',
    cookTime: '15 min',
    servings: '8 scones',
    ingredients: [
        '2 cups (240g) All-Purpose Flour',
        '1 tbsp Baking Powder',
        '1/2 tsp Salt',
        '1/2 cup (113g) Cold Butter, grated',
        '1 cup (115g) Shredded Sharp Cheddar',
        '2 tbsp Chopped Chives',
        '3/4 cup (180ml) Heavy Cream'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Whisk dry ingredients. Cut in grated butter until mixture resembles coarse crumbs.',
        'Stir in cheese and chives. Add cream and mix until just combined.',
        'Pat dough into a circle and cut into 8 wedges. Brush with cream.',
        'Bake for 12-15 minutes until golden.'
    ]
}, {
    id: 'savory-biscuits',
    title: 'Flaky Buttermilk Biscuits',
    description: 'Tall, flaky, and tender biscuits perfect for breakfast or as a side.',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '10 biscuits',
    ingredients: [
        '2 1/2 cups (300g) All-Purpose Flour',
        '2 tbsp Baking Powder',
        '1 tsp Sugar',
        '1 tsp Salt',
        '1/2 cup (113g) Cold Unsalted Butter, cubed',
        '1 cup (240ml) Cold Buttermilk'
    ],
    instructions: [
        'Preheat oven to 425°F (220°C).',
        'Whisk dry ingredients. Cut in butter with a pastry blender until pea-sized crumbs form.',
        'Stir in buttermilk until a shaggy dough forms.',
        'Turn out onto a floured surface and gently bring together. Fold the dough over on itself 3-4 times (lamination).',
        'Pat to 1-inch thickness and cut with a 2.5-inch cutter, without twisting.',
        'Bake for 12-15 minutes.'
    ]
});
// Add 20 more recipes to reach over 100 total
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-sugar',
    title: 'Cut-Out Sugar Cookies',
    description: 'A perfect sugar cookie recipe that holds its shape for decorating.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '36 cookies',
    ingredients: [
        '3 cups (360g) All-Purpose Flour',
        '2 tsp Baking Powder',
        '1 cup (227g) Unsalted Butter, softened',
        '1 cup (200g) Granulated Sugar',
        '1 large Egg',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Cream butter and sugar until light and fluffy.',
        'Beat in egg and vanilla.',
        'Whisk together flour and baking powder. Gradually add to the wet ingredients.',
        'Chill dough for at least 1 hour.',
        'Roll out dough, cut shapes, and bake at 350°F (175°C) for 8-10 minutes.'
    ]
}, {
    id: 'cookie-no-bake',
    title: 'Classic No-Bake Cookies',
    description: 'A quick and easy chocolate, peanut butter, and oat cookie that requires no oven.',
    prepTime: '10 min',
    cookTime: '5 min',
    servings: '24 cookies',
    ingredients: [
        '2 cups (400g) Sugar',
        '1/2 cup (120ml) Milk',
        '1/2 cup (113g) Butter',
        '1/4 cup (22g) Unsweetened Cocoa Powder',
        '1/2 cup (125g) Peanut Butter',
        '1 tsp Vanilla Extract',
        '3 cups (240g) Rolled Oats'
    ],
    instructions: [
        'In a saucepan, bring sugar, milk, butter, and cocoa to a rolling boil for exactly 1 minute.',
        'Remove from heat. Stir in peanut butter and vanilla, then oats.',
        'Quickly drop by spoonfuls onto wax paper and let cool until set.'
    ]
}, {
    id: 'cookie-coconut-macaroons',
    title: 'Chewy Coconut Macaroons',
    description: 'Sweet, chewy, and golden-brown coconut macaroons, often dipped in chocolate.',
    prepTime: '10 min',
    cookTime: '25 min',
    servings: '18 macaroons',
    ingredients: [
        '14 oz (400g) Sweetened Shredded Coconut',
        '14 oz (1 can) Sweetened Condensed Milk',
        '1 tsp Vanilla Extract',
        '2 large Egg Whites',
        'Pinch of Salt'
    ],
    instructions: [
        'Preheat oven to 325°F (165°C).',
        'In a large bowl, mix coconut, condensed milk, and vanilla.',
        'In a separate bowl, whip egg whites and salt to stiff peaks.',
        'Gently fold the egg whites into the coconut mixture.',
        'Drop by spoonfuls onto parchment-lined baking sheets.',
        'Bake for 20-25 minutes until golden brown.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-funfetti',
    title: 'Classic Funfetti Cake',
    description: 'A light and fluffy vanilla cake loaded with colorful sprinkles.',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '12 servings',
    ingredients: [
        '2 1/2 cups (300g) Cake Flour',
        '2 1/2 tsp Baking Powder',
        '1/2 tsp Salt',
        '1 cup (227g) Unsalted Butter, softened',
        '1 3/4 cups (350g) Sugar',
        '4 large Egg Whites',
        '2 tsp Vanilla Extract',
        '1 cup (240ml) Buttermilk',
        '1/2 cup Rainbow Sprinkles'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Whisk dry ingredients.',
        'Cream butter and sugar. Beat in egg whites one at a time, then vanilla.',
        'Alternate adding dry ingredients and buttermilk.',
        'Gently fold in sprinkles. Divide between two 9-inch pans.',
        'Bake for 25-30 minutes.'
    ]
}, {
    id: 'cake-strawberry-shortcake',
    title: 'Strawberry Shortcake Cake',
    description: 'Layers of light sponge cake, fresh strawberries, and whipped cream.',
    prepTime: '30 min',
    cookTime: '30 min',
    servings: '10 servings',
    ingredients: [
        '1 recipe Vanilla Sponge Cake',
        '2 lbs Fresh Strawberries, sliced',
        '1/4 cup (50g) Sugar',
        '2 cups Heavy Cream',
        '1/2 cup (60g) Powdered Sugar'
    ],
    instructions: [
        'Slice strawberries and toss with granulated sugar. Let sit for 30 minutes.',
        'Whip heavy cream and powdered sugar to stiff peaks.',
        'Slice cake into layers. Assemble with layers of cake, whipped cream, and strawberries.'
    ]
}, {
    id: 'cake-pineapple-upside-down',
    title: 'Pineapple Upside-Down Cake',
    description: 'A classic cake with a caramelized pineapple and cherry topping.',
    prepTime: '20 min',
    cookTime: '45 min',
    servings: '8 servings',
    ingredients: [
        'Topping: 1/2 cup Butter, 1 cup Brown Sugar, 1 can Pineapple Rings, Maraschino Cherries',
        'Cake: 1 1/2 cups Flour, 1 cup Sugar, 1/2 cup Milk, 1/2 cup Pineapple Juice, 2 Eggs'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Melt butter and brown sugar in a 9-inch round cake pan. Arrange pineapple rings and cherries on top.',
        'Prepare cake batter and pour carefully over the topping.',
        'Bake for 40-45 minutes.',
        'Let cool for 5 minutes before inverting onto a plate.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-garlic-knots',
    title: 'Garlic Knots',
    description: 'Soft, chewy bread knots brushed with garlic-herb butter.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '16 knots',
    ingredients: [
        '1 lb Pizza Dough',
        'Topping: 1/2 cup Melted Butter, 4 cloves Garlic (minced), 2 tbsp Parsley (chopped), Pinch of Salt'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Divide pizza dough into 16 pieces. Roll each into a rope and tie into a knot.',
        'Place on a baking sheet and bake for 15-20 minutes until golden.',
        'Mix topping ingredients. Brush generously over hot knots.'
    ]
}, {
    id: 'bread-monkey',
    title: 'Monkey Bread',
    description: 'Pull-apart bread made from dough balls rolled in cinnamon-sugar and baked in a bundt pan.',
    prepTime: '25 min',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        '2 cans (16.3 oz each) Refrigerated Biscuit Dough',
        '1 cup (200g) Sugar',
        '2 tsp Cinnamon',
        '1 cup (220g) Brown Sugar',
        '1/2 cup (113g) Butter'
    ],
    instructions: [
        'Preheat oven to 350°F (175°C). Grease a bundt pan.',
        'Cut each biscuit into quarters. Mix sugar and cinnamon, and toss biscuit pieces to coat.',
        'Arrange pieces in the bundt pan.',
        'In a saucepan, melt butter and brown sugar. Pour over the biscuits.',
        'Bake for 30-35 minutes. Let cool for 10 minutes before inverting.'
    ]
}, {
    id: 'bread-pita',
    title: 'Homemade Pita Bread',
    description: 'Soft, puffy flatbreads with a signature pocket, perfect for stuffing.',
    prepTime: '20 min',
    cookTime: '3 min per pita',
    servings: '8 pitas',
    ingredients: [
        '2 1/2 cups (300g) All-Purpose Flour',
        '2 tsp Instant Yeast',
        '1 tsp Sugar',
        '1 tsp Salt',
        '1 cup (240ml) Warm Water',
        '2 tbsp Olive Oil'
    ],
    instructions: [
        'Combine all ingredients and knead for 5-7 minutes until smooth.',
        'Let rise for 1 hour.',
        'Divide into 8 balls. Roll each into a thin 6-inch circle.',
        'Cook on a hot cast-iron skillet or baking steel for 2-3 minutes per side, until puffed and golden.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'pie-blueberry',
    title: 'Classic Blueberry Pie',
    description: 'A juicy, sweet blueberry filling inside a flaky, buttery crust.',
    prepTime: '30 min',
    cookTime: '1 hr',
    servings: '8 servings',
    ingredients: [
        '1 recipe Double-Crust Pie Dough',
        '6 cups Fresh Blueberries',
        '1 cup (200g) Sugar',
        '1/4 cup (30g) Cornstarch',
        '1 tbsp Lemon Juice'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Toss blueberries with sugar, cornstarch, and lemon juice.',
        'Pour into bottom pie crust. Top with a lattice or full crust.',
        'Bake for 20 minutes, then reduce heat to 375°F (190°C) and bake for another 30-40 minutes until bubbly.'
    ]
}, {
    id: 'pie-cherry',
    title: 'Homemade Cherry Pie',
    description: 'A perfect balance of sweet and tart cherries in a golden, flaky crust.',
    prepTime: '30 min',
    cookTime: '50 min',
    servings: '8 servings',
    ingredients: [
        '1 recipe Double-Crust Pie Dough',
        '5 cups Pitted Cherries (fresh or frozen)',
        '1 1/4 cups (250g) Sugar',
        '1/4 cup (30g) Cornstarch',
        '1 tsp Almond Extract'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Combine cherries, sugar, cornstarch, and almond extract.',
        'Pour into bottom pie crust. Dot with butter and top with second crust.',
        'Bake for 45-55 minutes until the filling is thick and bubbly.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'dessert-apple-crisp',
    title: 'Easy Apple Crisp',
    description: 'Warm, tender apples baked with a crunchy oat and brown sugar topping.',
    prepTime: '15 min',
    cookTime: '45 min',
    servings: '8 servings',
    ingredients: [
        'Filling: 6 medium Apples, sliced; 1/4 cup Sugar; 1 tbsp Lemon Juice',
        'Topping: 1 cup Rolled Oats, 1 cup Brown Sugar, 1/2 cup Flour, 1/2 cup cold Butter'
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'Toss apples with sugar and lemon juice and place in a baking dish.',
        'For topping, cut butter into dry ingredients until crumbly. Sprinkle over apples.',
        'Bake for 40-50 minutes until apples are tender and topping is golden.'
    ]
}, {
    id: 'dessert-peach-cobbler',
    title: 'Classic Peach Cobbler',
    description: 'Sweet, juicy peaches baked under a soft, cake-like biscuit topping.',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: '8 servings',
    ingredients: [
        'Filling: 6 ripe Peaches, sliced; 1/2 cup Sugar',
        'Topping: 1 1/2 cups Flour, 1 1/2 tsp Baking Powder, 1/2 cup Sugar, 6 tbsp cold Butter, 1/2 cup Buttermilk'
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Toss peaches with sugar and place in a baking dish.',
        'For topping, mix dry ingredients, cut in butter, then stir in buttermilk.',
        'Drop spoonfuls of topping over peaches.',
        'Bake for 35-45 minutes until topping is golden and filling is bubbly.'
    ]
}, {
    id: 'cookie-meringue',
    title: 'Meringue Cookies',
    description: 'Light, airy, and crisp cookies that melt in your mouth.',
    prepTime: '15 min',
    cookTime: '1 hr',
    servings: '36 cookies',
    ingredients: [
        '4 large Egg Whites, room temperature',
        '1/4 tsp Cream of Tartar',
        '1 cup (200g) Superfine Sugar',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Preheat oven to 225°F (110°C).',
        'Whip egg whites and cream of tartar to soft peaks.',
        'Gradually add sugar, whipping on high speed until stiff, glossy peaks form. Fold in vanilla.',
        'Pipe shapes onto parchment-lined baking sheets.',
        'Bake for 1 hour, then turn off the oven and let the cookies cool completely inside.'
    ]
}, {
    id: 'pastry-churros',
    title: 'Homemade Churros with Chocolate Sauce',
    description: 'Crispy, cinnamon-sugar coated fried dough pastries.',
    prepTime: '15 min',
    cookTime: '20 min',
    servings: '16 churros',
    ingredients: [
        'Dough: 1 cup Water, 1/2 cup Butter, 1 cup Flour, 3 Eggs',
        'Coating: 1/2 cup Sugar, 1 tsp Cinnamon',
        'Frying Oil'
    ],
    instructions: [
        'Bring water and butter to a boil. Add flour and stir until a ball forms.',
        'Let cool slightly, then beat in eggs one at a time.',
        'Pipe dough into hot oil (360°F/182°C) and fry until golden.',
        'Drain and immediately toss in cinnamon-sugar.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-royal-icing',
    title: 'Royal Icing',
    description: 'A hard-drying icing perfect for decorating sugar cookies and gingerbread houses.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: '3 cups',
    ingredients: [
        '4 cups (480g) Powdered Sugar',
        '3 tbsp Meringue Powder',
        '1/2 cup Warm Water',
        '1 tsp Vanilla or Almond Extract'
    ],
    instructions: [
        'In a stand mixer, combine all ingredients.',
        'Beat on low speed until combined, then on high speed for 5-7 minutes until very stiff and glossy.',
        'Adjust consistency with small amounts of water for flooding or outlining. Keep covered with a damp cloth.'
    ]
}, {
    id: 'frosting-whipped-cream',
    title: 'Stabilized Whipped Cream Frosting',
    description: 'A light and fluffy frosting that holds its shape for piping and filling.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 'Frosts a 9-inch cake',
    ingredients: [
        '2 cups (480ml) Cold Heavy Cream',
        '1/2 cup (60g) Powdered Sugar',
        '1 tsp Vanilla Extract',
        '2 tbsp Cornstarch or Skim Milk Powder (stabilizer)'
    ],
    instructions: [
        'Chill your bowl and whisk attachment in the freezer for 15 minutes.',
        'Combine all ingredients in the cold bowl.',
        'Whip on medium-high speed until stiff peaks form. Do not overbeat.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-empanadas',
    title: 'Beef Empanadas',
    description: 'Flaky pastry pockets filled with a savory beef mixture.',
    prepTime: '45 min',
    cookTime: '25 min',
    servings: '12 empanadas',
    ingredients: [
        '1 lb Ground Beef',
        '1 Onion, chopped',
        '2 cloves Garlic, minced',
        'Spices (cumin, paprika, oregano)',
        '12 Empanada Discs (store-bought or homemade)',
        '1 Egg, for wash'
    ],
    instructions: [
        'Brown beef with onion and garlic. Drain fat and stir in spices.',
        'Let filling cool completely.',
        'Place a spoonful of filling on each empanada disc. Fold over and crimp edges with a fork.',
        'Brush with egg wash and bake at 400°F (200°C) for 20-25 minutes.'
    ]
}, {
    id: 'savory-calzone',
    title: 'Classic Calzone',
    description: 'A folded pizza filled with ricotta, mozzarella, and your favorite toppings.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '4 calzones',
    ingredients: [
        '1 lb Pizza Dough',
        '1 cup Ricotta Cheese',
        '2 cups Shredded Mozzarella',
        'Toppings (pepperoni, sausage, etc.)',
        'Marinara sauce for dipping'
    ],
    instructions: [
        'Preheat oven to 450°F (230°C).',
        'Divide dough into 4 pieces. Roll each into a circle.',
        'On one half of each circle, layer ricotta, mozzarella, and toppings.',
        'Fold the other half over and crimp to seal.',
        'Cut slits on top, brush with olive oil, and bake for 15-20 minutes until golden.'
    ]
});
// Add 40 more recipes
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-linzer',
    title: 'Linzer Cookies',
    description: 'A classic Austrian sandwich cookie with a jam-filled window.',
    prepTime: '30 min',
    cookTime: '12 min',
    servings: '18 cookies',
    ingredients: [
        '1 1/2 cups Almond Flour',
        '1 1/2 cups All-Purpose Flour',
        '1/2 tsp Cinnamon',
        '1 cup Unsalted Butter, softened',
        '2/3 cup Sugar',
        '1 Egg Yolk',
        'Raspberry Jam'
    ],
    instructions: [
        'Cream butter and sugar. Add egg yolk.',
        'Whisk dry ingredients and add to butter mixture.',
        'Chill dough for 1 hour. Roll out and cut shapes, cutting a window from half.',
        'Bake at 350°F (175°C) for 10-12 minutes.',
        'Spread jam on solid cookies and top with windowed cookies.'
    ]
}, {
    id: 'cookie-black-and-white',
    title: 'Black and White Cookies',
    description: 'A New York City classic, these are soft, cake-like cookies with half chocolate and half vanilla icing.',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '12 cookies',
    ingredients: [
        '2 cups All-Purpose Flour',
        '1/2 tsp Baking Soda',
        '1/2 cup Butter, softened',
        '1 cup Sugar',
        '2 Eggs',
        '1/2 cup Buttermilk',
        'Icing: Powdered Sugar, Cocoa Powder, Milk'
    ],
    instructions: [
        'Cream butter and sugar. Add eggs.',
        'Alternate adding dry ingredients and buttermilk.',
        'Drop rounded spoonfuls onto baking sheets. Bake at 375°F (190°C) for 12-15 minutes.',
        'Let cool. Make vanilla and chocolate icings.',
        'Spread vanilla on one half and chocolate on the other.'
    ]
}, {
    id: 'bar-millionaires-shortbread',
    title: "Millionaire's Shortbread",
    description: 'A decadent bar with three layers: a buttery shortbread base, a rich caramel center, and a crisp chocolate top.',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: '16 bars',
    ingredients: [
        'Shortbread: 1 cup Flour, 1/4 cup Sugar, 1/2 cup Butter',
        'Caramel: 1 can Sweetened Condensed Milk, 1/2 cup Brown Sugar, 1/2 cup Butter',
        'Topping: 6 oz Chocolate'
    ],
    instructions: [
        'Bake shortbread crust at 350°F (175°C) for 20 minutes.',
        'Make caramel by melting ingredients and simmering for 5-7 minutes until thick.',
        'Pour caramel over crust and chill.',
        'Melt chocolate and spread over caramel. Chill until set.'
    ]
}, {
    id: 'cookie-oatmeal-chocolate-chip',
    title: 'Oatmeal Chocolate Chip Cookies',
    description: 'The perfect combination of chewy oats and melted chocolate chips.',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: '24 cookies',
    ingredients: [
        '1 cup Flour',
        '1/2 tsp Baking Soda',
        '1/2 cup Butter',
        '1/2 cup Brown Sugar',
        '1/4 cup Sugar',
        '1 Egg',
        '1 1/2 cups Rolled Oats',
        '1 cup Chocolate Chips'
    ],
    instructions: [
        'Cream butter and sugars. Add egg.',
        'Whisk dry ingredients and add to wet mixture.',
        'Stir in oats and chocolate chips.',
        'Bake at 350°F (175°C) for 10-12 minutes.'
    ]
}, {
    id: 'cookie-chocolate-crinkle',
    title: 'Chocolate Crinkle Cookies',
    description: 'Fudgy chocolate cookies rolled in powdered sugar, creating a beautiful crinkled effect.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '24 cookies',
    ingredients: [
        '1 cup Unsweetened Cocoa Powder',
        '2 cups Sugar',
        '1/2 cup Vegetable Oil',
        '4 Eggs',
        '2 cups Flour',
        '2 tsp Baking Powder',
        'Powdered Sugar for rolling'
    ],
    instructions: [
        'Mix cocoa, sugar, and oil. Beat in eggs.',
        'Add flour and baking powder.',
        'Chill dough for at least 4 hours.',
        'Roll into balls, coat generously in powdered sugar.',
        'Bake at 350°F (175°C) for 10-12 minutes.'
    ]
}, {
    id: 'cookie-lofthouse',
    title: 'Lofthouse Style Sugar Cookies',
    description: 'Soft, cakey, and tender sugar cookies topped with a thick layer of frosting and sprinkles.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '18 cookies',
    ingredients: [
        '3 cups Flour',
        '1/2 tsp Baking Soda',
        '1/2 tsp Baking Powder',
        '1 cup Butter, softened',
        '1 cup Sugar',
        '1 Egg',
        '1/2 cup Sour Cream'
    ],
    instructions: [
        'Cream butter and sugar. Add egg and sour cream.',
        'Add dry ingredients and mix until combined.',
        'Chill dough. Roll thick and cut into circles.',
        'Bake at 350°F (175°C) for 8-10 minutes. Cool and frost.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-hummingbird',
    title: 'Hummingbird Cake',
    description: 'A classic Southern cake packed with banana, pineapple, and pecans, topped with cream cheese frosting.',
    prepTime: '25 min',
    cookTime: '50 min',
    servings: '12 servings',
    ingredients: [
        '3 cups Flour',
        '2 cups Sugar',
        '1 tsp Baking Soda',
        '1 tsp Cinnamon',
        '3 Eggs',
        '1 1/2 cups Vegetable Oil',
        '1 (8 oz) can Crushed Pineapple',
        '2 cups Mashed Bananas',
        '1 cup chopped Pecans'
    ],
    instructions: [
        'Whisk dry ingredients.',
        'In a separate bowl, whisk eggs, oil, pineapple, and bananas.',
        'Combine wet and dry, then fold in pecans.',
        'Bake in three 9-inch pans at 350°F (175°C) for 25-30 minutes.'
    ]
}, {
    id: 'cake-coconut',
    title: 'Classic Coconut Cake',
    description: 'A moist and tender coconut-flavored cake with a creamy coconut frosting and covered in shredded coconut.',
    prepTime: '25 min',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        '2 1/2 cups Cake Flour',
        '1 tbsp Baking Powder',
        '1 cup Butter, softened',
        '2 cups Sugar',
        '4 Egg Whites',
        '1 cup Coconut Milk',
        '1 tsp Coconut Extract'
    ],
    instructions: [
        'Cream butter and sugar. Gradually add egg whites.',
        'Alternate adding dry ingredients and coconut milk.',
        'Fold in coconut extract.',
        'Bake in two 9-inch pans at 350°F (175°C) for 30-35 minutes.'
    ]
}, {
    id: 'cake-spice',
    title: 'Old-Fashioned Spice Cake',
    description: 'A wonderfully moist and aromatic cake flavored with a blend of warm spices like cinnamon, nutmeg, and cloves.',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: '12 servings',
    ingredients: [
        '2 cups Flour',
        '1 1/2 cups Brown Sugar',
        '1 tsp Baking Soda',
        '2 tsp Cinnamon',
        '1 tsp Nutmeg',
        '1/2 tsp Cloves',
        '1/2 cup Butter',
        '2 Eggs',
        '1 cup Buttermilk'
    ],
    instructions: [
        'Cream butter and brown sugar. Add eggs.',
        'Whisk dry ingredients.',
        'Alternate adding dry ingredients and buttermilk.',
        'Bake in a 9x13 inch pan at 350°F (175°C) for 35-40 minutes.'
    ]
}, {
    id: 'cupcake-lemon',
    title: 'Lemon Cupcakes with Lemon Buttercream',
    description: 'Bright, zesty, and moist lemon cupcakes topped with a tangy and sweet lemon frosting.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '12 cupcakes',
    ingredients: [
        '1 1/2 cups Flour',
        '1 tsp Baking Powder',
        '1/2 cup Butter',
        '1 cup Sugar',
        '2 Eggs',
        'Zest and juice of 2 Lemons',
        '1/2 cup Milk'
    ],
    instructions: [
        'Cream butter and sugar. Add eggs and lemon zest.',
        'Alternate adding dry ingredients and a mix of milk and lemon juice.',
        'Fill cupcake liners 2/3 full.',
        'Bake at 350°F (175°C) for 18-20 minutes.'
    ]
}, {
    id: 'cake-lava',
    title: 'Chocolate Lava Cakes',
    description: 'Individual chocolate cakes with a warm, gooey, molten chocolate center.',
    prepTime: '15 min',
    cookTime: '14 min',
    servings: '4 cakes',
    ingredients: [
        '4 oz Bittersweet Chocolate',
        '1/2 cup Butter',
        '2 Eggs',
        '2 Egg Yolks',
        '1/4 cup Sugar',
        '2 tbsp Flour'
    ],
    instructions: [
        'Melt chocolate and butter.',
        'Whisk eggs, yolks, and sugar until pale. Fold in chocolate mixture, then flour.',
        'Pour into greased ramekins.',
        'Bake at 450°F (230°C) for 12-14 minutes until edges are firm but center is soft.'
    ]
}, {
    id: 'cake-tres-leches',
    title: 'Tres Leches Cake',
    description: 'A light sponge cake soaked in a sweet mixture of three milks, topped with whipped cream.',
    prepTime: '30 min',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        'Cake: 1 1/2 cups Flour, 1 1/2 tsp Baking Powder, 5 Eggs, separated; 1 cup Sugar',
        'Milk Soak: 1 can Evaporated Milk, 1 can Sweetened Condensed Milk, 1/2 cup Heavy Cream'
    ],
    instructions: [
        'Whip egg whites to stiff peaks. In another bowl, beat yolks and sugar until pale. Fold whites into yolks, then fold in flour.',
        'Bake in a 9x13 pan at 350°F (175°C) for 30-35 minutes.',
        'Poke holes in warm cake. Whisk milks together and pour over cake.',
        'Chill for at least 4 hours. Top with whipped cream.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-milk',
    title: 'Japanese Milk Bread (Shokupan)',
    description: 'An incredibly soft, fluffy, and slightly sweet white bread made using the tangzhong method.',
    prepTime: '40 min',
    cookTime: '35 min',
    servings: '1 loaf',
    ingredients: [
        'Tangzhong: 1/3 cup Flour, 1 cup Milk',
        'Dough: 3 cups Bread Flour, 1/4 cup Sugar, 1 Egg, 1/2 cup Milk, 3 tbsp Butter'
    ],
    instructions: [
        'Make tangzhong by cooking flour and milk into a paste; let cool.',
        'Combine all dough ingredients, including tangzhong, and knead until smooth.',
        'Let rise for 1.5 hours. Shape, place in a loaf pan, and let rise again for 1 hour.',
        'Bake at 350°F (175°C) for 30-35 minutes.'
    ]
}, {
    id: 'bread-parker-house-rolls',
    title: 'Parker House Rolls',
    description: 'Buttery, soft, and slightly sweet pull-apart dinner rolls, folded over before baking.',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: '24 rolls',
    ingredients: [
        '1 cup Milk, scalded',
        '1/2 cup Butter',
        '1/2 cup Sugar',
        '2 1/4 tsp Yeast',
        '2 Eggs',
        '4 cups Flour'
    ],
    instructions: [
        'Combine hot milk, butter, and sugar; let cool.',
        'Add yeast and eggs. Gradually add flour and knead.',
        'Let rise for 1 hour. Roll out, cut circles, brush with butter, and fold in half.',
        'Let rise for 30 minutes. Bake at 375°F (190°C) for 15-20 minutes.'
    ]
}, {
    id: 'bread-ciabatta',
    title: 'Ciabatta Bread',
    description: 'An Italian white bread with a crisp crust and a very open, holey crumb, perfect for sandwiches.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '2 loaves',
    ingredients: [
        'Poolish (starter): 1 cup Flour, 1 cup Water, 1/8 tsp Yeast',
        'Dough: 3 cups Flour, 1 cup Water, 2 tsp Salt, 1/2 tsp Yeast'
    ],
    instructions: [
        'Mix poolish and let it ferment overnight.',
        'Combine poolish with dough ingredients. Use stretch-and-fold method over 3 hours.',
        'Divide and gently shape into loaves. Let proof for 1 hour.',
        'Bake in a steamy oven at 450°F (230°C) for 20-25 minutes.'
    ]
}, {
    id: 'bread-multigrain',
    title: 'Multigrain Sandwich Bread',
    description: 'A hearty and wholesome bread packed with various grains and seeds.',
    prepTime: '25 min',
    cookTime: '40 min',
    servings: '1 loaf',
    ingredients: [
        '2 cups Bread Flour',
        '1 cup Whole Wheat Flour',
        '1/2 cup Mixed Grains (oats, sunflower seeds, flax)',
        '1 1/2 cups Warm Water',
        '2 tbsp Honey',
        '2 1/4 tsp Yeast'
    ],
    instructions: [
        'Combine all ingredients and knead until smooth.',
        'Let rise for 1.5 hours.',
        'Shape into a loaf, place in a pan, and let rise for 1 hour.',
        'Bake at 375°F (190°C) for 35-40 minutes.'
    ]
}, {
    id: 'bread-potato',
    title: 'Soft Potato Bread',
    description: 'A soft, moist, and slightly sweet bread made with mashed potatoes, perfect for sandwiches.',
    prepTime: '25 min',
    cookTime: '35 min',
    servings: '1 loaf',
    ingredients: [
        '1 cup Mashed Potatoes, cooled',
        '1 cup Potato Water (from boiling)',
        '3 tbsp Butter',
        '3 tbsp Sugar',
        '4 cups Flour',
        '2 1/4 tsp Yeast'
    ],
    instructions: [
        'Combine potatoes, potato water, butter, and sugar.',
        'Add yeast and flour. Knead until smooth.',
        'Let rise for 1-2 hours.',
        'Shape into a loaf, let rise for 1 hour.',
        'Bake at 375°F (190°C) for 30-35 minutes.'
    ]
}, {
    id: 'bread-naan',
    title: 'Homemade Naan Bread',
    description: 'Soft, chewy, and bubbly Indian flatbread, cooked quickly on a hot skillet.',
    prepTime: '20 min',
    cookTime: '3 min per naan',
    servings: '8 naan',
    ingredients: [
        '3 cups Flour',
        '1 tsp Yeast',
        '1 tsp Sugar',
        '1/2 cup Warm Water',
        '1/2 cup Plain Yogurt',
        '2 tbsp Ghee or Oil'
    ],
    instructions: [
        'Combine all ingredients and knead until smooth.',
        'Let rise for 1 hour.',
        'Divide into balls. Roll each into a thin oval.',
        'Cook on a hot, dry cast-iron skillet for 1-2 minutes per side, until puffed and charred in spots.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'pie-strawberry-rhubarb',
    title: 'Strawberry Rhubarb Pie',
    description: 'The perfect balance of sweet strawberries and tart rhubarb in a flaky crust.',
    prepTime: '30 min',
    cookTime: '1 hr',
    servings: '8 servings',
    ingredients: [
        '1 recipe Double-Crust Pie Dough',
        '2 1/2 cups Sliced Strawberries',
        '2 1/2 cups Sliced Rhubarb',
        '1 cup Sugar',
        '1/4 cup Cornstarch'
    ],
    instructions: [
        'Toss fruits with sugar and cornstarch.',
        'Pour into bottom pie crust. Top with a lattice crust.',
        'Bake at 400°F (200°C) for 20 minutes, then reduce to 375°F (190°C) and bake for 40 more minutes.'
    ]
}, {
    id: 'pie-chess',
    title: 'Classic Chess Pie',
    description: 'A simple, sweet Southern custard pie with a golden-brown top, made with pantry staples.',
    prepTime: '10 min',
    cookTime: '50 min',
    servings: '8 servings',
    ingredients: [
        '1 unbaked 9-inch Pie Crust',
        '1 1/2 cups Sugar',
        '1/2 cup Melted Butter',
        '3 Eggs',
        '1 tbsp Cornmeal',
        '1 tbsp White Vinegar',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Whisk all filling ingredients together until smooth.',
        'Pour into unbaked pie crust.',
        'Bake at 350°F (175°C) for 45-55 minutes, until the center is just set.'
    ]
}, {
    id: 'tart-key-lime',
    title: 'Key Lime Tart',
    description: 'A sophisticated version of the classic pie, with a crisp tart shell and a tangy, creamy filling.',
    prepTime: '25 min',
    cookTime: '15 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Tart Shell',
        '4 Egg Yolks',
        '1 (14 oz) can Sweetened Condensed Milk',
        '1/2 cup Key Lime Juice'
    ],
    instructions: [
        'Whisk egg yolks and condensed milk. Whisk in key lime juice.',
        'Pour into cooled tart shell.',
        'Bake at 375°F (190°C) for 15 minutes.',
        'Chill for at least 3 hours before serving.'
    ]
}, {
    id: 'pie-chocolate-cream',
    title: 'Chocolate Cream Pie',
    description: 'A rich and decadent chocolate pudding filling in a baked pie crust, topped with whipped cream.',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Pie Crust',
        'Filling: 3/4 cup Sugar, 1/4 cup Cocoa Powder, 1/4 cup Cornstarch, 3 Egg Yolks, 2 cups Milk, 4 oz Chocolate',
        'Whipped Cream Topping'
    ],
    instructions: [
        'Make chocolate pudding filling on the stovetop.',
        'Pour into cooled pie crust and chill until firm.',
        'Top with sweetened whipped cream and chocolate shavings before serving.'
    ]
}, {
    id: 'pie-apple-crumble',
    title: 'Apple Crumble Pie',
    description: 'A comforting pie with a sweet apple filling and a crunchy, buttery oat crumble topping.',
    prepTime: '25 min',
    cookTime: '50 min',
    servings: '8 servings',
    ingredients: [
        '1 unbaked 9-inch Pie Crust',
        'Filling: 6 Apples, sliced; 1/2 cup Sugar; 1 tsp Cinnamon',
        'Crumble: 1 cup Flour, 1 cup Brown Sugar, 1 cup Oats, 1/2 cup cold Butter'
    ],
    instructions: [
        'Arrange apples in pie crust.',
        'Mix crumble ingredients with a fork until clumps form. Sprinkle over apples.',
        'Bake at 375°F (190°C) for 45-55 minutes, until apples are tender and topping is golden.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'pastry-danish-braid',
    title: 'Danish Pastry Braid',
    description: 'A simplified approach to Danish pastry with a cream cheese or fruit filling.',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: '1 braid',
    ingredients: [
        '1 sheet Puff Pastry',
        'Filling: 8 oz Cream Cheese, 1/4 cup Sugar, 1 Egg Yolk',
        'Egg wash'
    ],
    instructions: [
        'Roll out puff pastry. Spread filling down the center.',
        'Cut strips along the sides and fold over the filling in a braid pattern.',
        'Brush with egg wash.',
        'Bake at 400°F (200°C) for 20-25 minutes.'
    ]
}, {
    id: 'dessert-sticky-toffee-pudding',
    title: 'Sticky Toffee Pudding',
    description: 'A classic British dessert consisting of a moist sponge cake made with dates, covered in a rich toffee sauce.',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '8 servings',
    ingredients: [
        'Cake: 1 cup chopped Dates, 1 cup boiling water, 1 tsp Baking Soda, 1/2 cup Butter, 1 cup Sugar, 2 Eggs',
        'Sauce: 1 cup Brown Sugar, 1/2 cup Butter, 1/2 cup Heavy Cream'
    ],
    instructions: [
        'Soak dates in boiling water with baking soda.',
        'Cream butter and sugar, add eggs. Mix in date mixture and flour.',
        'Bake in a pan at 350°F (175°C) for 30 minutes.',
        'Make sauce by melting ingredients together. Pour over warm cake.'
    ]
}, {
    id: 'pastry-apple-strudel',
    title: 'Apple Strudel',
    description: 'A traditional Viennese pastry with a filling of spiced apples, raisins, and breadcrumbs wrapped in a paper-thin dough.',
    prepTime: '45 min',
    cookTime: '40 min',
    servings: '8 servings',
    ingredients: [
        '1 sheet Puff Pastry or Phyllo Dough',
        '4 Apples, thinly sliced',
        '1/2 cup Sugar',
        '1 tsp Cinnamon',
        '1/2 cup Raisins',
        '1/2 cup Toasted Breadcrumbs',
        'Melted Butter'
    ],
    instructions: [
        'Sauté apples with sugar and cinnamon until slightly softened.',
        'Layer phyllo sheets, brushing each with butter, or use a sheet of puff pastry.',
        'Spread breadcrumbs, then apple mixture. Roll up like a log.',
        'Brush with butter and bake at 375°F (190°C) for 35-40 minutes.'
    ]
}, {
    id: 'pastry-caneles',
    title: 'Canelés de Bordeaux',
    description: 'A small French pastry with a rich, custardy interior and a dark, caramelized crust.',
    prepTime: '20 min',
    cookTime: '1 hr',
    servings: '12 canelés',
    ingredients: [
        '2 cups Milk',
        '1/2 cup Butter',
        '1 cup Flour',
        '1 cup Sugar',
        '2 Eggs',
        '2 Egg Yolks',
        '1/4 cup Rum',
        '1 tsp Vanilla'
    ],
    instructions: [
        'Infuse milk with vanilla and butter. Let cool.',
        'Whisk eggs, sugar, and flour. Slowly whisk in cooled milk and rum.',
        'Chill batter for 24-48 hours.',
        'Pour into greased canelé molds. Bake at 450°F (230°C) for 15 mins, then 375°F (190°C) for 45 mins.'
    ]
}, {
    id: 'pastry-paris-brest',
    title: 'Paris-Brest',
    description: 'A ring of choux pastry filled with a praline-flavored cream, named after a bicycle race.',
    prepTime: '1 hr',
    cookTime: '40 min',
    servings: '8 servings',
    ingredients: [
        '1 recipe Pâte à Choux',
        'Praline Pastry Cream',
        'Sliced Almonds',
        'Powdered Sugar'
    ],
    instructions: [
        'Pipe choux pastry into a large ring on a baking sheet. Top with sliced almonds.',
        'Bake at 400°F (200°C) for 35-40 minutes until golden and hollow.',
        'Let cool. Slice in half horizontally and fill with praline pastry cream.'
    ]
}, {
    id: 'cake-opera',
    title: 'Opera Cake',
    description: 'An elaborate French cake with layers of almond sponge (Joconde), coffee syrup, coffee buttercream, and chocolate glaze.',
    prepTime: '2 hrs',
    cookTime: '15 min',
    servings: '10 servings',
    ingredients: [
        'Almond Sponge',
        'Coffee Syrup',
        'Coffee Buttercream',
        'Chocolate Ganache',
        'Chocolate Glaze'
    ],
    instructions: [
        'Bake thin layers of almond sponge.',
        'Assemble by layering sponge, coffee syrup, buttercream, and ganache.',
        'Chill between each layer.',
        'Finish with a shiny chocolate glaze and decorate.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-cream-cheese-glaze',
    title: 'Cream Cheese Glaze',
    description: 'A thin, pourable glaze perfect for drizzling over cinnamon rolls, scones, or coffee cakes.',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: '1 cup',
    ingredients: [
        '4 oz Cream Cheese, softened',
        '1 1/2 cups Powdered Sugar',
        '1/4 cup Milk',
        '1/2 tsp Vanilla'
    ],
    instructions: [
        'Beat cream cheese until smooth.',
        'Gradually beat in powdered sugar.',
        'Slowly whisk in milk until a smooth, pourable consistency is reached. Stir in vanilla.'
    ]
}, {
    id: 'frosting-german-chocolate',
    title: 'German Chocolate Cake Frosting',
    description: 'A rich, gooey, and chewy frosting made with coconut and pecans.',
    prepTime: '5 min',
    cookTime: '12 min',
    servings: 'Frosts a 3-layer cake',
    ingredients: [
        '1 cup Evaporated Milk',
        '1 cup Sugar',
        '3 Egg Yolks',
        '1/2 cup Butter',
        '1 tsp Vanilla',
        '1 1/3 cups Shredded Coconut',
        '1 cup chopped Pecans'
    ],
    instructions: [
        'In a saucepan, cook milk, sugar, egg yolks, and butter over medium heat until thickened, about 12 minutes.',
        'Remove from heat and stir in vanilla, coconut, and pecans.',
        'Let cool completely until thick and spreadable.'
    ]
}, {
    id: 'sauce-salted-caramel',
    title: 'Salted Caramel Sauce',
    description: 'A perfect balance of sweet and salty, ideal for drizzling over desserts or filling cakes.',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: '1.5 cups',
    ingredients: [
        '1 cup Sugar',
        '6 tbsp Butter',
        '1/2 cup Heavy Cream',
        '1 tsp Sea Salt'
    ],
    instructions: [
        'Melt sugar in a saucepan over medium heat until it becomes an amber-colored liquid.',
        'Stir in butter until melted. Slowly pour in heavy cream (it will bubble).',
        'Boil for 1 minute, then remove from heat and stir in salt.'
    ]
}, {
    id: 'frosting-lemon-buttercream',
    title: 'Lemon Buttercream Frosting',
    description: 'A bright, tangy, and sweet frosting perfect for vanilla, lemon, or coconut cakes.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 'Frosts 12 cupcakes',
    ingredients: [
        '1 cup Unsalted Butter, softened',
        '3-4 cups Powdered Sugar',
        'Zest and juice of 1 Lemon',
        'Pinch of Salt'
    ],
    instructions: [
        'Beat butter until creamy.',
        'Gradually add powdered sugar, alternating with lemon juice, until desired consistency is reached.',
        'Beat in lemon zest and salt.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-gougeres',
    title: 'Gougères (Cheese Puffs)',
    description: 'Light, airy, and cheesy puffs made from choux pastry.',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '24 puffs',
    ingredients: [
        '1 recipe Pâte à Choux',
        '1 1/2 cups shredded Gruyère or Comté cheese',
        'Pinch of Nutmeg',
        'Black Pepper'
    ],
    instructions: [
        'Prepare choux pastry. Off the heat, beat in the cheese, nutmeg, and pepper.',
        'Pipe or spoon mounds onto a baking sheet.',
        'Bake at 400°F (200°C) for 25-30 minutes until puffed and golden.'
    ]
}, {
    id: 'savory-spinach-feta-turnovers',
    title: 'Spinach and Feta Turnovers',
    description: 'Flaky puff pastry filled with a savory mixture of spinach and feta cheese.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '8 turnovers',
    ingredients: [
        '1 sheet Puff Pastry',
        '10 oz Frozen Spinach, thawed and squeezed dry',
        '1 cup Crumbled Feta',
        '1 Egg',
        'Garlic Powder'
    ],
    instructions: [
        'Mix spinach, feta, and garlic powder.',
        'Cut puff pastry into squares. Place filling on one half.',
        'Brush edges with beaten egg, fold into a triangle, and seal.',
        'Brush tops with egg wash. Bake at 400°F (200°C) for 18-20 minutes.'
    ]
}, {
    id: 'savory-ham-cheese-croissants',
    title: 'Ham and Cheese Croissants',
    description: 'A quick and delicious savory pastry using store-bought croissant dough.',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: '8 croissants',
    ingredients: [
        '1 can Refrigerated Croissant Dough',
        '8 slices Deli Ham',
        '8 slices Swiss or Gruyère Cheese',
        'Dijon Mustard'
    ],
    instructions: [
        'Unroll croissant dough triangles.',
        'Spread a thin layer of Dijon on each. Top with a slice of cheese and ham.',
        'Roll up croissants from the wide end.',
        'Bake according to package directions, usually around 375°F (190°C) for 12-15 minutes.'
    ]
}, {
    id: 'savory-tomato-focaccia',
    title: 'Tomato and Herb Focaccia',
    description: 'A classic focaccia topped with cherry tomatoes, fresh rosemary, and flaky sea salt.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '12 servings',
    ingredients: [
        '1 recipe Focaccia Dough',
        '1 pint Cherry Tomatoes, halved',
        'Fresh Rosemary sprigs',
        'Olive Oil',
        'Flaky Sea Salt'
    ],
    instructions: [
        'Prepare focaccia dough and spread in an oiled pan.',
        'Dimple the dough. Press cherry tomato halves and rosemary sprigs into the dough.',
        'Drizzle generously with olive oil and sprinkle with sea salt.',
        'Bake at 425°F (220°C) for 20-25 minutes.'
    ]
}, {
    id: 'savory-sausage-fennel-rolls',
    title: 'Sausage and Fennel Rolls',
    description: 'A gourmet twist on the classic sausage roll, with the aromatic flavor of fennel.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '12 rolls',
    ingredients: [
        '1 lb Italian Sausage, casings removed',
        '1 tsp Fennel Seeds, toasted',
        '1 sheet Puff Pastry',
        'Egg wash'
    ],
    instructions: [
        'Mix sausage meat with toasted fennel seeds.',
        'Divide and roll into logs inside puff pastry, as with classic sausage rolls.',
        'Seal, slice, and brush with egg wash.',
        'Bake at 400°F (200°C) for 20-25 minutes.'
    ]
}, {
    id: 'bread-pretzel-buns',
    title: 'Pretzel Buns',
    description: 'Soft, chewy buns with the classic pretzel flavor, perfect for burgers or sandwiches.',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: '8 buns',
    ingredients: [
        '1 recipe Soft Pretzel Dough',
        'Baking Soda Bath',
        'Coarse Salt'
    ],
    instructions: [
        'Prepare pretzel dough and let it rise.',
        'Divide and shape into 8 round buns. Let them rise for 20 minutes.',
        'Boil each bun in a baking soda bath for 30 seconds.',
        'Place on a baking sheet, sprinkle with salt, and score an X on top.',
        'Bake at 425°F (220°C) for 15-20 minutes.'
    ]
});
// Add 40 more recipes
recipeDatabase['Cookies & Bars'].push({
    id: 'cookie-linzer',
    title: 'Linzer Cookies',
    description: 'A classic Austrian sandwich cookie with a jam-filled window.',
    prepTime: '30 min',
    cookTime: '12 min',
    servings: '18 cookies',
    ingredients: [
        '1 1/2 cups Almond Flour',
        '1 1/2 cups All-Purpose Flour',
        '1/2 tsp Cinnamon',
        '1 cup Unsalted Butter, softened',
        '2/3 cup Sugar',
        '1 Egg Yolk',
        'Raspberry Jam'
    ],
    instructions: [
        'Cream butter and sugar. Add egg yolk.',
        'Whisk dry ingredients and add to butter mixture.',
        'Chill dough for 1 hour. Roll out and cut shapes, cutting a window from half.',
        'Bake at 350°F (175°C) for 10-12 minutes.',
        'Spread jam on solid cookies and top with windowed cookies.'
    ]
}, {
    id: 'cookie-black-and-white',
    title: 'Black and White Cookies',
    description: 'A New York City classic, these are soft, cake-like cookies with half chocolate and half vanilla icing.',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '12 cookies',
    ingredients: [
        '2 cups All-Purpose Flour',
        '1/2 tsp Baking Soda',
        '1/2 cup Butter, softened',
        '1 cup Sugar',
        '2 Eggs',
        '1/2 cup Buttermilk',
        'Icing: Powdered Sugar, Cocoa Powder, Milk'
    ],
    instructions: [
        'Cream butter and sugar. Add eggs.',
        'Alternate adding dry ingredients and buttermilk.',
        'Drop rounded spoonfuls onto baking sheets. Bake at 375°F (190°C) for 12-15 minutes.',
        'Let cool. Make vanilla and chocolate icings.',
        'Spread vanilla on one half and chocolate on the other.'
    ]
}, {
    id: 'bar-millionaires-shortbread',
    title: "Millionaire's Shortbread",
    description: 'A decadent bar with three layers: a buttery shortbread base, a rich caramel center, and a crisp chocolate top.',
    prepTime: '30 min',
    cookTime: '40 min',
    servings: '16 bars',
    ingredients: [
        'Shortbread: 1 cup Flour, 1/4 cup Sugar, 1/2 cup Butter',
        'Caramel: 1 can Sweetened Condensed Milk, 1/2 cup Brown Sugar, 1/2 cup Butter',
        'Topping: 6 oz Chocolate'
    ],
    instructions: [
        'Bake shortbread crust at 350°F (175°C) for 20 minutes.',
        'Make caramel by melting ingredients and simmering for 5-7 minutes until thick.',
        'Pour caramel over crust and chill.',
        'Melt chocolate and spread over caramel. Chill until set.'
    ]
}, {
    id: 'cookie-oatmeal-chocolate-chip',
    title: 'Oatmeal Chocolate Chip Cookies',
    description: 'The perfect combination of chewy oats and melted chocolate chips.',
    prepTime: '15 min',
    cookTime: '12 min',
    servings: '24 cookies',
    ingredients: [
        '1 cup Flour',
        '1/2 tsp Baking Soda',
        '1/2 cup Butter',
        '1/2 cup Brown Sugar',
        '1/4 cup Sugar',
        '1 Egg',
        '1 1/2 cups Rolled Oats',
        '1 cup Chocolate Chips'
    ],
    instructions: [
        'Cream butter and sugars. Add egg.',
        'Whisk dry ingredients and add to wet mixture.',
        'Stir in oats and chocolate chips.',
        'Bake at 350°F (175°C) for 10-12 minutes.'
    ]
}, {
    id: 'cookie-chocolate-crinkle',
    title: 'Chocolate Crinkle Cookies',
    description: 'Fudgy chocolate cookies rolled in powdered sugar, creating a beautiful crinkled effect.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '24 cookies',
    ingredients: [
        '1 cup Unsweetened Cocoa Powder',
        '2 cups Sugar',
        '1/2 cup Vegetable Oil',
        '4 Eggs',
        '2 cups Flour',
        '2 tsp Baking Powder',
        'Powdered Sugar for rolling'
    ],
    instructions: [
        'Mix cocoa, sugar, and oil. Beat in eggs.',
        'Add flour and baking powder.',
        'Chill dough for at least 4 hours.',
        'Roll into balls, coat generously in powdered sugar.',
        'Bake at 350°F (175°C) for 10-12 minutes.'
    ]
}, {
    id: 'cookie-lofthouse',
    title: 'Lofthouse Style Sugar Cookies',
    description: 'Soft, cakey, and tender sugar cookies topped with a thick layer of frosting and sprinkles.',
    prepTime: '20 min',
    cookTime: '10 min',
    servings: '18 cookies',
    ingredients: [
        '3 cups Flour',
        '1/2 tsp Baking Soda',
        '1/2 tsp Baking Powder',
        '1 cup Butter, softened',
        '1 cup Sugar',
        '1 Egg',
        '1/2 cup Sour Cream'
    ],
    instructions: [
        'Cream butter and sugar. Add egg and sour cream.',
        'Add dry ingredients and mix until combined.',
        'Chill dough. Roll thick and cut into circles.',
        'Bake at 350°F (175°C) for 8-10 minutes. Cool and frost.'
    ]
});
recipeDatabase['Cakes & Cupcakes'].push({
    id: 'cake-hummingbird',
    title: 'Hummingbird Cake',
    description: 'A classic Southern cake packed with banana, pineapple, and pecans, topped with cream cheese frosting.',
    prepTime: '25 min',
    cookTime: '50 min',
    servings: '12 servings',
    ingredients: [
        '3 cups Flour',
        '2 cups Sugar',
        '1 tsp Baking Soda',
        '1 tsp Cinnamon',
        '3 Eggs',
        '1 1/2 cups Vegetable Oil',
        '1 (8 oz) can Crushed Pineapple',
        '2 cups Mashed Bananas',
        '1 cup chopped Pecans'
    ],
    instructions: [
        'Whisk dry ingredients.',
        'In a separate bowl, whisk eggs, oil, pineapple, and bananas.',
        'Combine wet and dry, then fold in pecans.',
        'Bake in three 9-inch pans at 350°F (175°C) for 25-30 minutes.'
    ]
}, {
    id: 'cake-coconut',
    title: 'Classic Coconut Cake',
    description: 'A moist and tender coconut-flavored cake with a creamy coconut frosting and covered in shredded coconut.',
    prepTime: '25 min',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        '2 1/2 cups Cake Flour',
        '1 tbsp Baking Powder',
        '1 cup Butter, softened',
        '2 cups Sugar',
        '4 Egg Whites',
        '1 cup Coconut Milk',
        '1 tsp Coconut Extract'
    ],
    instructions: [
        'Cream butter and sugar. Gradually add egg whites.',
        'Alternate adding dry ingredients and coconut milk.',
        'Fold in coconut extract.',
        'Bake in two 9-inch pans at 350°F (175°C) for 30-35 minutes.'
    ]
}, {
    id: 'cake-spice',
    title: 'Old-Fashioned Spice Cake',
    description: 'A wonderfully moist and aromatic cake flavored with a blend of warm spices like cinnamon, nutmeg, and cloves.',
    prepTime: '20 min',
    cookTime: '40 min',
    servings: '12 servings',
    ingredients: [
        '2 cups Flour',
        '1 1/2 cups Brown Sugar',
        '1 tsp Baking Soda',
        '2 tsp Cinnamon',
        '1 tsp Nutmeg',
        '1/2 tsp Cloves',
        '1/2 cup Butter',
        '2 Eggs',
        '1 cup Buttermilk'
    ],
    instructions: [
        'Cream butter and brown sugar. Add eggs.',
        'Whisk dry ingredients.',
        'Alternate adding dry ingredients and buttermilk.',
        'Bake in a 9x13 inch pan at 350°F (175°C) for 35-40 minutes.'
    ]
}, {
    id: 'cupcake-lemon',
    title: 'Lemon Cupcakes with Lemon Buttercream',
    description: 'Bright, zesty, and moist lemon cupcakes topped with a tangy and sweet lemon frosting.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '12 cupcakes',
    ingredients: [
        '1 1/2 cups Flour',
        '1 tsp Baking Powder',
        '1/2 cup Butter',
        '1 cup Sugar',
        '2 Eggs',
        'Zest and juice of 2 Lemons',
        '1/2 cup Milk'
    ],
    instructions: [
        'Cream butter and sugar. Add eggs and lemon zest.',
        'Alternate adding dry ingredients and a mix of milk and lemon juice.',
        'Fill cupcake liners 2/3 full.',
        'Bake at 350°F (175°C) for 18-20 minutes.'
    ]
}, {
    id: 'cake-lava',
    title: 'Chocolate Lava Cakes',
    description: 'Individual chocolate cakes with a warm, gooey, molten chocolate center.',
    prepTime: '15 min',
    cookTime: '14 min',
    servings: '4 cakes',
    ingredients: [
        '4 oz Bittersweet Chocolate',
        '1/2 cup Butter',
        '2 Eggs',
        '2 Egg Yolks',
        '1/4 cup Sugar',
        '2 tbsp Flour'
    ],
    instructions: [
        'Melt chocolate and butter.',
        'Whisk eggs, yolks, and sugar until pale. Fold in chocolate mixture, then flour.',
        'Pour into greased ramekins.',
        'Bake at 450°F (230°C) for 12-14 minutes until edges are firm but center is soft.'
    ]
}, {
    id: 'cake-tres-leches',
    title: 'Tres Leches Cake',
    description: 'A light sponge cake soaked in a sweet mixture of three milks, topped with whipped cream.',
    prepTime: '30 min',
    cookTime: '35 min',
    servings: '12 servings',
    ingredients: [
        'Cake: 1 1/2 cups Flour, 1 1/2 tsp Baking Powder, 5 Eggs, separated; 1 cup Sugar',
        'Milk Soak: 1 can Evaporated Milk, 1 can Sweetened Condensed Milk, 1/2 cup Heavy Cream'
    ],
    instructions: [
        'Whip egg whites to stiff peaks. In another bowl, beat yolks and sugar until pale. Fold whites into yolks, then fold in flour.',
        'Bake in a 9x13 pan at 350°F (175°C) for 30-35 minutes.',
        'Poke holes in warm cake. Whisk milks together and pour over cake.',
        'Chill for at least 4 hours. Top with whipped cream.'
    ]
});
recipeDatabase['Breads & Doughs'].push({
    id: 'bread-milk',
    title: 'Japanese Milk Bread (Shokupan)',
    description: 'An incredibly soft, fluffy, and slightly sweet white bread made using the tangzhong method.',
    prepTime: '40 min',
    cookTime: '35 min',
    servings: '1 loaf',
    ingredients: [
        'Tangzhong: 1/3 cup Flour, 1 cup Milk',
        'Dough: 3 cups Bread Flour, 1/4 cup Sugar, 1 Egg, 1/2 cup Milk, 3 tbsp Butter'
    ],
    instructions: [
        'Make tangzhong by cooking flour and milk into a paste; let cool.',
        'Combine all dough ingredients, including tangzhong, and knead until smooth.',
        'Let rise for 1.5 hours. Shape, place in a loaf pan, and let rise again for 1 hour.',
        'Bake at 350°F (175°C) for 30-35 minutes.'
    ]
}, {
    id: 'bread-parker-house-rolls',
    title: 'Parker House Rolls',
    description: 'Buttery, soft, and slightly sweet pull-apart dinner rolls, folded over before baking.',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: '24 rolls',
    ingredients: [
        '1 cup Milk, scalded',
        '1/2 cup Butter',
        '1/2 cup Sugar',
        '2 1/4 tsp Yeast',
        '2 Eggs',
        '4 cups Flour'
    ],
    instructions: [
        'Combine hot milk, butter, and sugar; let cool.',
        'Add yeast and eggs. Gradually add flour and knead.',
        'Let rise for 1 hour. Roll out, cut circles, brush with butter, and fold in half.',
        'Let rise for 30 minutes. Bake at 375°F (190°C) for 15-20 minutes.'
    ]
}, {
    id: 'bread-ciabatta',
    title: 'Ciabatta Bread',
    description: 'An Italian white bread with a crisp crust and a very open, holey crumb, perfect for sandwiches.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '2 loaves',
    ingredients: [
        'Poolish (starter): 1 cup Flour, 1 cup Water, 1/8 tsp Yeast',
        'Dough: 3 cups Flour, 1 cup Water, 2 tsp Salt, 1/2 tsp Yeast'
    ],
    instructions: [
        'Mix poolish and let it ferment overnight.',
        'Combine poolish with dough ingredients. Use stretch-and-fold method over 3 hours.',
        'Divide and gently shape into loaves. Let proof for 1 hour.',
        'Bake in a steamy oven at 450°F (230°C) for 20-25 minutes.'
    ]
}, {
    id: 'bread-multigrain',
    title: 'Multigrain Sandwich Bread',
    description: 'A hearty and wholesome bread packed with various grains and seeds.',
    prepTime: '25 min',
    cookTime: '40 min',
    servings: '1 loaf',
    ingredients: [
        '2 cups Bread Flour',
        '1 cup Whole Wheat Flour',
        '1/2 cup Mixed Grains (oats, sunflower seeds, flax)',
        '1 1/2 cups Warm Water',
        '2 tbsp Honey',
        '2 1/4 tsp Yeast'
    ],
    instructions: [
        'Combine all ingredients and knead until smooth.',
        'Let rise for 1.5 hours.',
        'Shape into a loaf, place in a pan, and let rise for 1 hour.',
        'Bake at 375°F (190°C) for 35-40 minutes.'
    ]
}, {
    id: 'bread-potato',
    title: 'Soft Potato Bread',
    description: 'A soft, moist, and slightly sweet bread made with mashed potatoes, perfect for sandwiches.',
    prepTime: '25 min',
    cookTime: '35 min',
    servings: '1 loaf',
    ingredients: [
        '1 cup Mashed Potatoes, cooled',
        '1 cup Potato Water (from boiling)',
        '3 tbsp Butter',
        '3 tbsp Sugar',
        '4 cups Flour',
        '2 1/4 tsp Yeast'
    ],
    instructions: [
        'Combine potatoes, potato water, butter, and sugar.',
        'Add yeast and flour. Knead until smooth.',
        'Let rise for 1-2 hours.',
        'Shape into a loaf, let rise for 1 hour.',
        'Bake at 375°F (190°C) for 30-35 minutes.'
    ]
}, {
    id: 'bread-naan',
    title: 'Homemade Naan Bread',
    description: 'Soft, chewy, and bubbly Indian flatbread, cooked quickly on a hot skillet.',
    prepTime: '20 min',
    cookTime: '3 min per naan',
    servings: '8 naan',
    ingredients: [
        '3 cups Flour',
        '1 tsp Yeast',
        '1 tsp Sugar',
        '1/2 cup Warm Water',
        '1/2 cup Plain Yogurt',
        '2 tbsp Ghee or Oil'
    ],
    instructions: [
        'Combine all ingredients and knead until smooth.',
        'Let rise for 1 hour.',
        'Divide into balls. Roll each into a thin oval.',
        'Cook on a hot, dry cast-iron skillet for 1-2 minutes per side, until puffed and charred in spots.'
    ]
});
recipeDatabase['Pies & Tarts'].push({
    id: 'pie-strawberry-rhubarb',
    title: 'Strawberry Rhubarb Pie',
    description: 'The perfect balance of sweet strawberries and tart rhubarb in a flaky crust.',
    prepTime: '30 min',
    cookTime: '1 hr',
    servings: '8 servings',
    ingredients: [
        '1 recipe Double-Crust Pie Dough',
        '2 1/2 cups Sliced Strawberries',
        '2 1/2 cups Sliced Rhubarb',
        '1 cup Sugar',
        '1/4 cup Cornstarch'
    ],
    instructions: [
        'Toss fruits with sugar and cornstarch.',
        'Pour into bottom pie crust. Top with a lattice crust.',
        'Bake at 400°F (200°C) for 20 minutes, then reduce to 375°F (190°C) and bake for 40 more minutes.'
    ]
}, {
    id: 'pie-chess',
    title: 'Classic Chess Pie',
    description: 'A simple, sweet Southern custard pie with a golden-brown top, made with pantry staples.',
    prepTime: '10 min',
    cookTime: '50 min',
    servings: '8 servings',
    ingredients: [
        '1 unbaked 9-inch Pie Crust',
        '1 1/2 cups Sugar',
        '1/2 cup Melted Butter',
        '3 Eggs',
        '1 tbsp Cornmeal',
        '1 tbsp White Vinegar',
        '1 tsp Vanilla Extract'
    ],
    instructions: [
        'Whisk all filling ingredients together until smooth.',
        'Pour into unbaked pie crust.',
        'Bake at 350°F (175°C) for 45-55 minutes, until the center is just set.'
    ]
}, {
    id: 'tart-key-lime',
    title: 'Key Lime Tart',
    description: 'A sophisticated version of the classic pie, with a crisp tart shell and a tangy, creamy filling.',
    prepTime: '25 min',
    cookTime: '15 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Tart Shell',
        '4 Egg Yolks',
        '1 (14 oz) can Sweetened Condensed Milk',
        '1/2 cup Key Lime Juice'
    ],
    instructions: [
        'Whisk egg yolks and condensed milk. Whisk in key lime juice.',
        'Pour into cooled tart shell.',
        'Bake at 375°F (190°C) for 15 minutes.',
        'Chill for at least 3 hours before serving.'
    ]
}, {
    id: 'pie-chocolate-cream',
    title: 'Chocolate Cream Pie',
    description: 'A rich and decadent chocolate pudding filling in a baked pie crust, topped with whipped cream.',
    prepTime: '20 min',
    cookTime: '15 min',
    servings: '8 servings',
    ingredients: [
        '1 pre-baked 9-inch Pie Crust',
        'Filling: 3/4 cup Sugar, 1/4 cup Cocoa Powder, 1/4 cup Cornstarch, 3 Egg Yolks, 2 cups Milk, 4 oz Chocolate',
        'Whipped Cream Topping'
    ],
    instructions: [
        'Make chocolate pudding filling on the stovetop.',
        'Pour into cooled pie crust and chill until firm.',
        'Top with sweetened whipped cream and chocolate shavings before serving.'
    ]
}, {
    id: 'pie-apple-crumble',
    title: 'Apple Crumble Pie',
    description: 'A comforting pie with a sweet apple filling and a crunchy, buttery oat crumble topping.',
    prepTime: '25 min',
    cookTime: '50 min',
    servings: '8 servings',
    ingredients: [
        '1 unbaked 9-inch Pie Crust',
        'Filling: 6 Apples, sliced; 1/2 cup Sugar; 1 tsp Cinnamon',
        'Crumble: 1 cup Flour, 1 cup Brown Sugar, 1 cup Oats, 1/2 cup cold Butter'
    ],
    instructions: [
        'Arrange apples in pie crust.',
        'Mix crumble ingredients with a fork until clumps form. Sprinkle over apples.',
        'Bake at 375°F (190°C) for 45-55 minutes, until apples are tender and topping is golden.'
    ]
});
recipeDatabase['Pastries & Desserts'].push({
    id: 'pastry-danish-braid',
    title: 'Danish Pastry Braid',
    description: 'A simplified approach to Danish pastry with a cream cheese or fruit filling.',
    prepTime: '30 min',
    cookTime: '25 min',
    servings: '1 braid',
    ingredients: [
        '1 sheet Puff Pastry',
        'Filling: 8 oz Cream Cheese, 1/4 cup Sugar, 1 Egg Yolk',
        'Egg wash'
    ],
    instructions: [
        'Roll out puff pastry. Spread filling down the center.',
        'Cut strips along the sides and fold over the filling in a braid pattern.',
        'Brush with egg wash.',
        'Bake at 400°F (200°C) for 20-25 minutes.'
    ]
}, {
    id: 'dessert-sticky-toffee-pudding',
    title: 'Sticky Toffee Pudding',
    description: 'A classic British dessert consisting of a moist sponge cake made with dates, covered in a rich toffee sauce.',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '8 servings',
    ingredients: [
        'Cake: 1 cup chopped Dates, 1 cup boiling water, 1 tsp Baking Soda, 1/2 cup Butter, 1 cup Sugar, 2 Eggs',
        'Sauce: 1 cup Brown Sugar, 1/2 cup Butter, 1/2 cup Heavy Cream'
    ],
    instructions: [
        'Soak dates in boiling water with baking soda.',
        'Cream butter and sugar, add eggs. Mix in date mixture and flour.',
        'Bake in a pan at 350°F (175°C) for 30 minutes.',
        'Make sauce by melting ingredients together. Pour over warm cake.'
    ]
}, {
    id: 'pastry-apple-strudel',
    title: 'Apple Strudel',
    description: 'A traditional Viennese pastry with a filling of spiced apples, raisins, and breadcrumbs wrapped in a paper-thin dough.',
    prepTime: '45 min',
    cookTime: '40 min',
    servings: '8 servings',
    ingredients: [
        '1 sheet Puff Pastry or Phyllo Dough',
        '4 Apples, thinly sliced',
        '1/2 cup Sugar',
        '1 tsp Cinnamon',
        '1/2 cup Raisins',
        '1/2 cup Toasted Breadcrumbs',
        'Melted Butter'
    ],
    instructions: [
        'Sauté apples with sugar and cinnamon until slightly softened.',
        'Layer phyllo sheets, brushing each with butter, or use a sheet of puff pastry.',
        'Spread breadcrumbs, then apple mixture. Roll up like a log.',
        'Brush with butter and bake at 375°F (190°C) for 35-40 minutes.'
    ]
}, {
    id: 'pastry-caneles',
    title: 'Canelés de Bordeaux',
    description: 'A small French pastry with a rich, custardy interior and a dark, caramelized crust.',
    prepTime: '20 min',
    cookTime: '1 hr',
    servings: '12 canelés',
    ingredients: [
        '2 cups Milk',
        '1/2 cup Butter',
        '1 cup Flour',
        '1 cup Sugar',
        '2 Eggs',
        '2 Egg Yolks',
        '1/4 cup Rum',
        '1 tsp Vanilla'
    ],
    instructions: [
        'Infuse milk with vanilla and butter. Let cool.',
        'Whisk eggs, sugar, and flour. Slowly whisk in cooled milk and rum.',
        'Chill batter for 24-48 hours.',
        'Pour into greased canelé molds. Bake at 450°F (230°C) for 15 mins, then 375°F (190°C) for 45 mins.'
    ]
}, {
    id: 'pastry-paris-brest',
    title: 'Paris-Brest',
    description: 'A ring of choux pastry filled with a praline-flavored cream, named after a bicycle race.',
    prepTime: '1 hr',
    cookTime: '40 min',
    servings: '8 servings',
    ingredients: [
        '1 recipe Pâte à Choux',
        'Praline Pastry Cream',
        'Sliced Almonds',
        'Powdered Sugar'
    ],
    instructions: [
        'Pipe choux pastry into a large ring on a baking sheet. Top with sliced almonds.',
        'Bake at 400°F (200°C) for 35-40 minutes until golden and hollow.',
        'Let cool. Slice in half horizontally and fill with praline pastry cream.'
    ]
}, {
    id: 'cake-opera',
    title: 'Opera Cake',
    description: 'An elaborate French cake with layers of almond sponge (Joconde), coffee syrup, coffee buttercream, and chocolate glaze.',
    prepTime: '2 hrs',
    cookTime: '15 min',
    servings: '10 servings',
    ingredients: [
        'Almond Sponge',
        'Coffee Syrup',
        'Coffee Buttercream',
        'Chocolate Ganache',
        'Chocolate Glaze'
    ],
    instructions: [
        'Bake thin layers of almond sponge.',
        'Assemble by layering sponge, coffee syrup, buttercream, and ganache.',
        'Chill between each layer.',
        'Finish with a shiny chocolate glaze and decorate.'
    ]
});
recipeDatabase['Frostings & Fillings'].push({
    id: 'frosting-cream-cheese-glaze',
    title: 'Cream Cheese Glaze',
    description: 'A thin, pourable glaze perfect for drizzling over cinnamon rolls, scones, or coffee cakes.',
    prepTime: '5 min',
    cookTime: '0 min',
    servings: '1 cup',
    ingredients: [
        '4 oz Cream Cheese, softened',
        '1 1/2 cups Powdered Sugar',
        '1/4 cup Milk',
        '1/2 tsp Vanilla'
    ],
    instructions: [
        'Beat cream cheese until smooth.',
        'Gradually beat in powdered sugar.',
        'Slowly whisk in milk until a smooth, pourable consistency is reached. Stir in vanilla.'
    ]
}, {
    id: 'frosting-german-chocolate',
    title: 'German Chocolate Cake Frosting',
    description: 'A rich, gooey, and chewy frosting made with coconut and pecans.',
    prepTime: '5 min',
    cookTime: '12 min',
    servings: 'Frosts a 3-layer cake',
    ingredients: [
        '1 cup Evaporated Milk',
        '1 cup Sugar',
        '3 Egg Yolks',
        '1/2 cup Butter',
        '1 tsp Vanilla',
        '1 1/3 cups Shredded Coconut',
        '1 cup chopped Pecans'
    ],
    instructions: [
        'In a saucepan, cook milk, sugar, egg yolks, and butter over medium heat until thickened, about 12 minutes.',
        'Remove from heat and stir in vanilla, coconut, and pecans.',
        'Let cool completely until thick and spreadable.'
    ]
}, {
    id: 'sauce-salted-caramel',
    title: 'Salted Caramel Sauce',
    description: 'A perfect balance of sweet and salty, ideal for drizzling over desserts or filling cakes.',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: '1.5 cups',
    ingredients: [
        '1 cup Sugar',
        '6 tbsp Butter',
        '1/2 cup Heavy Cream',
        '1 tsp Sea Salt'
    ],
    instructions: [
        'Melt sugar in a saucepan over medium heat until it becomes an amber-colored liquid.',
        'Stir in butter until melted. Slowly pour in heavy cream (it will bubble).',
        'Boil for 1 minute, then remove from heat and stir in salt.'
    ]
}, {
    id: 'frosting-lemon-buttercream',
    title: 'Lemon Buttercream Frosting',
    description: 'A bright, tangy, and sweet frosting perfect for vanilla, lemon, or coconut cakes.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 'Frosts 12 cupcakes',
    ingredients: [
        '1 cup Unsalted Butter, softened',
        '3-4 cups Powdered Sugar',
        'Zest and juice of 1 Lemon',
        'Pinch of Salt'
    ],
    instructions: [
        'Beat butter until creamy.',
        'Gradually add powdered sugar, alternating with lemon juice, until desired consistency is reached.',
        'Beat in lemon zest and salt.'
    ]
});
recipeDatabase['Savory Bakes'].push({
    id: 'savory-gougeres',
    title: 'Gougères (Cheese Puffs)',
    description: 'Light, airy, and cheesy puffs made from choux pastry.',
    prepTime: '20 min',
    cookTime: '30 min',
    servings: '24 puffs',
    ingredients: [
        '1 recipe Pâte à Choux',
        '1 1/2 cups shredded Gruyère or Comté cheese',
        'Pinch of Nutmeg',
        'Black Pepper'
    ],
    instructions: [
        'Prepare choux pastry. Off the heat, beat in the cheese, nutmeg, and pepper.',
        'Pipe or spoon mounds onto a baking sheet.',
        'Bake at 400°F (200°C) for 25-30 minutes until puffed and golden.'
    ]
}, {
    id: 'savory-spinach-feta-turnovers',
    title: 'Spinach and Feta Turnovers',
    description: 'Flaky puff pastry filled with a savory mixture of spinach and feta cheese.',
    prepTime: '20 min',
    cookTime: '20 min',
    servings: '8 turnovers',
    ingredients: [
        '1 sheet Puff Pastry',
        '10 oz Frozen Spinach, thawed and squeezed dry',
        '1 cup Crumbled Feta',
        '1 Egg',
        'Garlic Powder'
    ],
    instructions: [
        'Mix spinach, feta, and garlic powder.',
        'Cut puff pastry into squares. Place filling on one half.',
        'Brush edges with beaten egg, fold into a triangle, and seal.',
        'Brush tops with egg wash. Bake at 400°F (200°C) for 18-20 minutes.'
    ]
}, {
    id: 'savory-ham-cheese-croissants',
    title: 'Ham and Cheese Croissants',
    description: 'A quick and delicious savory pastry using store-bought croissant dough.',
    prepTime: '10 min',
    cookTime: '15 min',
    servings: '8 croissants',
    ingredients: [
        '1 can Refrigerated Croissant Dough',
        '8 slices Deli Ham',
        '8 slices Swiss or Gruyère Cheese',
        'Dijon Mustard'
    ],
    instructions: [
        'Unroll croissant dough triangles.',
        'Spread a thin layer of Dijon on each. Top with a slice of cheese and ham.',
        'Roll up croissants from the wide end.',
        'Bake according to package directions, usually around 375°F (190°C) for 12-15 minutes.'
    ]
}, {
    id: 'savory-tomato-focaccia',
    title: 'Tomato and Herb Focaccia',
    description: 'A classic focaccia topped with cherry tomatoes, fresh rosemary, and flaky sea salt.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '12 servings',
    ingredients: [
        '1 recipe Focaccia Dough',
        '1 pint Cherry Tomatoes, halved',
        'Fresh Rosemary sprigs',
        'Olive Oil',
        'Flaky Sea Salt'
    ],
    instructions: [
        'Prepare focaccia dough and spread in an oiled pan.',
        'Dimple the dough. Press cherry tomato halves and rosemary sprigs into the dough.',
        'Drizzle generously with olive oil and sprinkle with sea salt.',
        'Bake at 425°F (220°C) for 20-25 minutes.'
    ]
}, {
    id: 'savory-sausage-fennel-rolls',
    title: 'Sausage and Fennel Rolls',
    description: 'A gourmet twist on the classic sausage roll, with the aromatic flavor of fennel.',
    prepTime: '20 min',
    cookTime: '25 min',
    servings: '12 rolls',
    ingredients: [
        '1 lb Italian Sausage, casings removed',
        '1 tsp Fennel Seeds, toasted',
        '1 sheet Puff Pastry',
        'Egg wash'
    ],
    instructions: [
        'Mix sausage meat with toasted fennel seeds.',
        'Divide and roll into logs inside puff pastry, as with classic sausage rolls.',
        'Seal, slice, and brush with egg wash.',
        'Bake at 400°F (200°C) for 20-25 minutes.'
    ]
}, {
    id: 'bread-pretzel-buns',
    title: 'Pretzel Buns',
    description: 'Soft, chewy buns with the classic pretzel flavor, perfect for burgers or sandwiches.',
    prepTime: '30 min',
    cookTime: '20 min',
    servings: '8 buns',
    ingredients: [
        '1 recipe Soft Pretzel Dough',
        'Baking Soda Bath',
        'Coarse Salt'
    ],
    instructions: [
        'Prepare pretzel dough and let it rise.',
        'Divide and shape into 8 round buns. Let them rise for 20 minutes.',
        'Boil each bun in a baking soda bath for 30 seconds.',
        'Place on a baking sheet, sprinkle with salt, and score an X on top.',
        'Bake at 425°F (220°C) for 15-20 minutes.'
    ]
});
const RecipeModal = ({ recipe, onClose })=>{
    const modalWrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handlePrint = ()=>{
        document.body.classList.add('is-printing');
        window.print();
        document.body.classList.remove('is-printing');
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        document.body.style.overflow = 'hidden';
        if (modalWrapperRef.current) {
            modalWrapperRef.current.scrollTop = 0;
        }
        return ()=>{
            document.body.style.overflow = 'auto';
        };
    }, [
        recipe
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-brand-background rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col border border-brand-border printable-area max-h-[90vh]",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "p-4 sm:p-6 border-b border-brand-border flex justify-between items-start bg-white rounded-t-2xl flex-shrink-0 no-print z-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-serif text-2xl sm:text-4xl font-bold text-brand-text-title",
                                    children: recipe.title
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 340,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-brand-text-body/80 mt-2",
                                    children: recipe.description
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 341,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 -mt-2 -mr-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePrint,
                                    className: "p-2 text-brand-text-body/50 hover:text-brand-pink transition-colors",
                                    "aria-label": "Print Recipe",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintIcon"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                        lineNumber: 345,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 344,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-2 text-brand-text-body/50 hover:text-brand-pink transition-colors",
                                    "aria-label": "Close modal",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["XIcon"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                        lineNumber: 348,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 347,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 343,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                    lineNumber: 338,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: modalWrapperRef,
                    className: "p-4 sm:p-6 flex-grow overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded-lg border border-brand-border shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                            className: "w-6 h-6 mx-auto text-brand-pink mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 356,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold block text-brand-text-title",
                                            children: "Prep Time"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 357,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-text-body",
                                            children: recipe.prepTime
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 358,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 355,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded-lg border border-brand-border shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClockIcon"], {
                                            className: "w-6 h-6 mx-auto text-brand-pink mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 361,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold block text-brand-text-title",
                                            children: "Cook Time"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 362,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-text-body",
                                            children: recipe.cookTime
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 363,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 360,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-3 rounded-lg border border-brand-border shadow-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UsersIcon"], {
                                            className: "w-6 h-6 mx-auto text-brand-pink mb-1"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 366,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold block text-brand-text-title",
                                            children: "Servings"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 367,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-brand-text-body",
                                            children: recipe.servings
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 368,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 365,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 354,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title mb-4 border-b-2 border-brand-pink pb-2",
                                            children: "Ingredients"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 374,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-6 rounded-lg border border-brand-border shadow-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3 list-none",
                                                children: recipe.ingredients.map((ing, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex items-start text-brand-text-body/90 pl-6 relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "absolute left-0 top-1.5 w-3 h-3 bg-brand-pink/20 rounded-full border border-brand-pink"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                                lineNumber: 379,
                                                                columnNumber: 45
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            ing
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 41
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                lineNumber: 376,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 375,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 373,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif font-bold text-2xl text-brand-text-title mb-4 border-b-2 border-brand-pink pb-2",
                                            children: "Instructions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 388,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "space-y-4",
                                            children: recipe.instructions.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-shrink-0 w-8 h-8 bg-brand-pink text-white rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-brand-pink-light mt-0.5",
                                                            children: i + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-brand-text-body/90 pt-1 leading-relaxed",
                                                            children: step
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 41
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 37
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 389,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 387,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 372,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                    lineNumber: 353,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/tools/EssentialRecipes.tsx",
            lineNumber: 337,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/tools/EssentialRecipes.tsx",
        lineNumber: 336,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const CategoryAccordion = ({ title, children, initialOpen = false })=>{
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialOpen);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-brand-border rounded-xl bg-white/50 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "p-5 cursor-pointer flex justify-between items-center font-serif font-bold text-2xl text-brand-text-title hover:bg-brand-pink-light/30 transition-colors",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "group-hover:text-brand-pink transition-colors",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 417,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChevronRightIcon"], {
                        className: `w-6 h-6 text-brand-pink transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 418,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 pb-5 text-brand-text-body/90 border-t border-brand-border",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 420,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/EssentialRecipes.tsx",
        lineNumber: 415,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const RecipeCard = ({ recipe, category, onView, index })=>{
    const getFallbackImage = (id)=>{
        if (id.startsWith('bread') || id.startsWith('dough') || id.startsWith('savory')) return '/images/blog/bread.png';
        if (id.startsWith('cake') || id.startsWith('cupcake') || id.startsWith('dessert')) return '/images/blog/chocolate-cake.png';
        if (id.startsWith('cookie') || id.startsWith('bar') || id.startsWith('pastry')) return '/images/blog/cookies.png';
        return '/images/blog/baking-ingredients.png';
    };
    const imageUrl = recipe.imageUrl || getFallbackImage(recipe.id);
    const altText = `${recipe.title} - Best Homemade ${category} Recipe`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: recipe.id,
        className: `bg-white rounded-xl border border-brand-border shadow-sm flex flex-col group transition-all duration-300 hover:shadow-lg hover:-translate-y-1`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-video w-full bg-brand-pink-light rounded-t-xl overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageUrl,
                        alt: altText,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 449,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                    lineNumber: 448,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 447,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: `font-bold text-lg text-brand-text-title group-hover:text-brand-pink transition-colors`,
                        children: recipe.title
                    }, void 0, false, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 457,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-brand-text-body/80 mt-1 line-clamp-2 flex-grow mb-3",
                        children: recipe.description
                    }, void 0, false, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 460,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto",
                        children: [
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onView(recipe),
                                className: "w-full bg-brand-pink text-white font-bold py-2 rounded-lg hover:opacity-90 transition-opacity",
                                children: "View Recipe"
                            }, void 0, false, {
                                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                lineNumber: 461,
                                columnNumber: 43
                            }, ("TURBOPACK compile-time value", void 0)),
                            " "
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                        lineNumber: 461,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 456,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/tools/EssentialRecipes.tsx",
        lineNumber: 446,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const EssentialRecipes = ({ setActiveTool, breadcrumbs })=>{
    const [selectedRecipe, setSelectedRecipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Handle deep linking on mount and back button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handlePopState = ()=>{
            const path = window.location.pathname;
            const prefix = '/essential-recipes/';
            if (path.startsWith(prefix)) {
                const recipeId = path.replace(prefix, '');
                // Find recipe
                let foundRecipe;
                Object.values(recipeDatabase).forEach((category)=>{
                    const r = category.find((r)=>r.id === recipeId);
                    if (r) foundRecipe = r;
                });
                if (foundRecipe) {
                    setSelectedRecipe(foundRecipe);
                } else {
                    setSelectedRecipe(null);
                }
            } else {
                setSelectedRecipe(null);
            }
        };
        // Check initial URL
        handlePopState();
        window.addEventListener('popstate', handlePopState);
        return ()=>window.removeEventListener('popstate', handlePopState);
    }, []);
    const openRecipe = (recipe)=>{
        setSelectedRecipe(recipe);
        window.history.pushState({}, '', `/essential-recipes/${recipe.id}`);
    };
    const closeRecipe = ()=>{
        setSelectedRecipe(null);
        window.history.pushState({}, '', '/essential-recipes');
    };
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const isSearching = searchTerm.trim().length > 0;
    const filteredRecipeDatabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!searchTerm) return recipeDatabase;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const newDb = {};
        for(const category in recipeDatabase){
            const filteredRecipes = recipeDatabase[category].filter((recipe)=>recipe.title.toLowerCase().includes(lowerCaseSearchTerm) || recipe.description.toLowerCase().includes(lowerCaseSearchTerm) || recipe.ingredients.some((ing)=>ing.toLowerCase().includes(lowerCaseSearchTerm)));
            if (filteredRecipes.length > 0) {
                newDb[category] = filteredRecipes;
            }
        }
        return newDb;
    }, [
        searchTerm,
        recipeDatabase
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$tools$2f$ToolContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToolContainer"], {
                title: "The Essential Free Recipes Checklist",
                description: "Discover our free cookbook of 100+ essential baking recipes! From perfect birthday cakes and cookies to expert bread recipes. Track your progress and master the craft of baking with Sweety's Bakery.",
                setActiveTool: setActiveTool,
                breadcrumbs: breadcrumbs,
                toolId: "essential-recipes",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-6 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Icons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SearchIcon"], {
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 541,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search recipes...",
                                    value: searchTerm,
                                    onChange: (e)=>setSearchTerm(e.target.value),
                                    className: "w-full pl-12 pr-4 py-3 bg-brand-pink-light/60 border border-brand-border rounded-lg focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink transition-shadow duration-200",
                                    "aria-label": "Search recipes"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 542,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 540,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                Object.entries(filteredRecipeDatabase).map(([category, recipes])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryAccordion, {
                                        title: category,
                                        initialOpen: isSearching,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 pt-4",
                                            children: recipes.map((recipe, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecipeCard, {
                                                    recipe: recipe,
                                                    category: category,
                                                    onView: openRecipe,
                                                    index: index
                                                }, recipe.id, false, {
                                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                                    lineNumber: 557,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 555,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, category, false, {
                                        fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                        lineNumber: 554,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))),
                                Object.keys(filteredRecipeDatabase).length === 0 && searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center py-8 text-brand-text-body/70",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-bold text-lg text-brand-text-title",
                                            children: [
                                                'No recipes found matching "',
                                                searchTerm,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 570,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Try a different search term or browse the categories."
                                        }, void 0, false, {
                                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                            lineNumber: 571,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 569,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 552,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 pt-6 border-t border-brand-border text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-serif font-bold text-2xl mb-2 text-brand-text-title",
                                    children: "A Lifelong Baking Journey"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 577,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-2xl mx-auto text-brand-text-body/90",
                                    children: "This list isn't a race; it's a road map. Use it to discover new techniques, challenge your skills, and celebrate the incredible diversity of the baking world. Every recipe checked off is a new skill learned. Happy baking!"
                                }, void 0, false, {
                                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                                    lineNumber: 578,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/tools/EssentialRecipes.tsx",
                            lineNumber: 576,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/tools/EssentialRecipes.tsx",
                    lineNumber: 539,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 532,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            selectedRecipe && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RecipeModal, {
                recipe: selectedRecipe,
                onClose: closeRecipe
            }, void 0, false, {
                fileName: "[project]/components/tools/EssentialRecipes.tsx",
                lineNumber: 584,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
}),
];

//# sourceMappingURL=components_tools_EssentialRecipes_tsx_43f434b1._.js.map