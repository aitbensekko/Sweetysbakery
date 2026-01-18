module.exports = [
"[project]/data/shops.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shops",
    ()=>shops
]);
const shops = [
    // --- Bakeries (Migrated) ---
    // New York
    {
        id: 'nyc-1',
        type: 'bakery',
        name: 'Dominique Ansel Bakery',
        address: '189 Spring St',
        city: 'New York',
        state: 'NY',
        zip: '10012',
        coordinates: [
            40.7252,
            -74.0021
        ],
        rating: 4.8,
        reviewCount: 12500,
        priceRange: '$$$',
        specialties: [
            'Cronut',
            'DKA',
            'Cookie Shot'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&w=600&q=80',
        description: 'Home of the original Cronut. A must-visit for pastry lovers seeking innovation and perfection.',
        website: 'https://www.dominiqueansel.com'
    },
    {
        id: 'nyc-2',
        type: 'bakery',
        name: 'Levain Bakery',
        address: '167 W 74th St',
        city: 'New York',
        state: 'NY',
        zip: '10023',
        coordinates: [
            40.7794,
            -73.9812
        ],
        rating: 4.9,
        reviewCount: 15000,
        priceRange: '$$',
        specialties: [
            'Chocolate Chip Walnut Cookie',
            'Dark Chocolate Chocolate Chip'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
        description: 'World-famous for their massive, gooey, 6-ounce cookies that are crispy on the outside and soft on the inside.',
        website: 'https://levainbakery.com'
    },
    {
        id: 'nyc-3',
        type: 'bakery',
        name: 'Magnolia Bakery',
        address: '1240 6th Ave',
        city: 'New York',
        state: 'NY',
        zip: '10020',
        coordinates: [
            40.7590,
            -73.9790
        ],
        rating: 4.5,
        reviewCount: 8500,
        priceRange: '$$',
        specialties: [
            'Banana Pudding',
            'Cupcakes'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
        description: 'Classic American bakery famous for its banana pudding and cupcakes, as seen on Sex and the City.',
        website: 'https://www.magnoliabakery.com'
    },
    // Los Angeles
    {
        id: 'la-1',
        type: 'bakery',
        name: 'Porto\'s Bakery & Cafe',
        address: '315 N Brand Blvd',
        city: 'Glendale',
        state: 'CA',
        zip: '91203',
        coordinates: [
            34.1480,
            -118.2550
        ],
        rating: 4.9,
        reviewCount: 18000,
        priceRange: '$',
        specialties: [
            'Cheese Rolls',
            'Potato Balls',
            'Refugiados'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        description: 'A Cuban family-owned institution known for its savory pastries, cakes, and incredibly affordable prices.',
        website: 'https://www.portosbakery.com'
    },
    {
        id: 'la-2',
        type: 'bakery',
        name: 'République',
        address: '624 S La Brea Ave',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90036',
        coordinates: [
            34.0624,
            -118.3440
        ],
        rating: 4.7,
        reviewCount: 5400,
        priceRange: '$$$',
        specialties: [
            'French Pastries',
            'Brunch',
            'Bread'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        description: 'A grand French bakery and restaurant housed in a historic building, serving some of the best pastries in the city.',
        website: 'https://republiquela.com'
    },
    {
        id: 'la-3',
        type: 'bakery',
        name: 'Tartine Sycamore',
        address: '911 N Sycamore Ave',
        city: 'Los Angeles',
        state: 'CA',
        zip: '90038',
        coordinates: [
            34.0880,
            -118.3440
        ],
        rating: 4.6,
        reviewCount: 2100,
        priceRange: '$$$',
        specialties: [
            'Sourdough Bread',
            'Morning Buns',
            'Croissants'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
        description: 'The LA outpost of the legendary San Francisco bakery, famous for its country bread and immaculate pastries.',
        website: 'https://tartinebakery.com'
    },
    // Chicago
    {
        id: 'chi-1',
        type: 'bakery',
        name: 'Kasama',
        address: '1001 N Winchester Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60622',
        coordinates: [
            41.9000,
            -87.6740
        ],
        rating: 4.8,
        reviewCount: 1200,
        priceRange: '$$$',
        specialties: [
            'Ube Basque Cake',
            'Filipino Pastries',
            'Truffle Croissant'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
        description: 'The world\'s first Michelin-starred Filipino restaurant and bakery. Expect long lines for their incredible pastries.',
        website: 'https://www.kasamachicago.com'
    },
    {
        id: 'chi-2',
        type: 'bakery',
        name: 'Floriole Cafe & Bakery',
        address: '1220 W Webster Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60614',
        coordinates: [
            41.9210,
            -87.6590
        ],
        rating: 4.7,
        reviewCount: 1500,
        priceRange: '$$',
        specialties: [
            'Croissants',
            'Quiche',
            'Fruit Tarts'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        description: 'A bright, two-story cafe serving rustic French pastries and breads made with organic ingredients.',
        website: 'https://www.floriole.com'
    },
    // Houston
    {
        id: 'hou-1',
        type: 'bakery',
        name: 'Three Brothers Bakery',
        address: '4036 S Braeswood Blvd',
        city: 'Houston',
        state: 'TX',
        zip: '77025',
        coordinates: [
            29.6990,
            -95.4520
        ],
        rating: 4.6,
        reviewCount: 2500,
        priceRange: '$$',
        specialties: [
            'Pumpecapple Piecake',
            'Gingerbread',
            'Bagels'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80',
        description: 'A Houston legend since 1949, known for their massive multi-layered cakes and traditional Jewish baked goods.',
        website: 'https://3brothersbakery.com'
    },
    {
        id: 'hou-2',
        type: 'bakery',
        name: 'Common Bond Bistro & Bakery',
        address: '1706 Westheimer Rd',
        city: 'Houston',
        state: 'TX',
        zip: '77098',
        coordinates: [
            29.7410,
            -95.4030
        ],
        rating: 4.5,
        reviewCount: 3800,
        priceRange: '$$',
        specialties: [
            'Croissants',
            'Kouign Amann',
            'Macarons'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        description: 'Modern bakery offering an array of French pastries, artisan breads, and a full bistro menu.',
        website: 'https://www.commonbondcafe.com'
    },
    // San Francisco
    {
        id: 'sf-1',
        type: 'bakery',
        name: 'Tartine Bakery',
        address: '600 Guerrero St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94110',
        coordinates: [
            37.7614,
            -122.4240
        ],
        rating: 4.6,
        reviewCount: 8000,
        priceRange: '$$',
        specialties: [
            'Country Bread',
            'Morning Buns',
            'Lemon Tart'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        description: 'The original location. Famous for having the best bread in the world and lines that wrap around the block.',
        website: 'https://tartinebakery.com'
    },
    {
        id: 'sf-2',
        type: 'bakery',
        name: 'B. Patisserie',
        address: '2821 California St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94115',
        coordinates: [
            37.7878,
            -122.4410
        ],
        rating: 4.8,
        reviewCount: 3500,
        priceRange: '$$',
        specialties: [
            'Kouign Amann',
            'Croissants',
            'Verrines'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&w=600&q=80',
        description: 'Belinda Leong\'s modern French patisserie. Their Kouign Amann is widely considered the best in the US.',
        website: 'https://bpatisserie.com'
    },
    // Seattle
    {
        id: 'sea-1',
        type: 'bakery',
        name: 'Piroshky Piroshky',
        address: '1908 Pike Pl',
        city: 'Seattle',
        state: 'WA',
        zip: '98101',
        coordinates: [
            47.6100,
            -122.3420
        ],
        rating: 4.7,
        reviewCount: 9000,
        priceRange: '$',
        specialties: [
            'Smoked Salmon Pate',
            'Beef and Cheese',
            'Apple Cinnamon Roll'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        description: 'A Pike Place Market icon serving hand-held Russian pies with sweet and savory fillings.',
        website: 'https://piroshkybakery.com'
    },
    // Miami
    {
        id: 'mia-1',
        type: 'bakery',
        name: 'Zak the Baker',
        address: '295 NW 26th St',
        city: 'Miami',
        state: 'FL',
        zip: '33127',
        coordinates: [
            25.8020,
            -80.2000
        ],
        rating: 4.8,
        reviewCount: 3200,
        priceRange: '$$',
        specialties: [
            'Sourdough',
            'Babka',
            'Salmon Toast'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        description: 'A kosher bakery in Wynwood that revolutionized the Miami bread scene. Everything is made from scratch.',
        website: 'https://zakthebaker.com'
    },
    // --- Coffee Shops (New) ---
    {
        id: 'coffee-1',
        type: 'coffee_shop',
        name: 'Amberson Coffee & Grocer',
        address: '401 S College Ave',
        city: 'Indianapolis',
        state: 'IN',
        zip: '46203',
        coordinates: [
            39.7600,
            -86.1400
        ],
        rating: 4.9,
        reviewCount: 450,
        priceRange: '$$',
        specialties: [
            'Pour Over',
            'Horchata',
            'Date Latte'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'A modern multi-roaster shop known for high-quality espresso and a unique grocery selection.',
        website: 'https://ambersoncoffee.com'
    },
    {
        id: 'coffee-2',
        type: 'coffee_shop',
        name: 'Sey Coffee',
        address: '18 Grattan St',
        city: 'Brooklyn',
        state: 'NY',
        zip: '11206',
        coordinates: [
            40.7053,
            -73.9324
        ],
        rating: 4.8,
        reviewCount: 800,
        priceRange: '$$$',
        specialties: [
            'Nordic Roast',
            'Micro-lots',
            'Pour Over'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        description: 'A bright, airy Scandinavian-style cafe serving some of the most delicate and complex roasts in the US.',
        website: 'https://www.seycoffee.com'
    },
    {
        id: 'coffee-3',
        type: 'coffee_shop',
        name: 'Espresso Vivace',
        address: '532 Broadway E',
        city: 'Seattle',
        state: 'WA',
        zip: '98102',
        coordinates: [
            47.6200,
            -122.3200
        ],
        rating: 4.7,
        reviewCount: 2100,
        priceRange: '$$',
        specialties: [
            'Cafe Nico',
            'Espresso',
            'Latte Art'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'A Seattle institution dedicated to the art of espresso. Famous for their Cafe Nico.',
        website: 'https://espressovivace.com'
    },
    {
        id: 'coffee-4',
        type: 'coffee_shop',
        name: 'Florin Coffee',
        address: '874 Oakland Park Ave',
        city: 'Columbus',
        state: 'OH',
        zip: '43224',
        coordinates: [
            40.0300,
            -82.9800
        ],
        rating: 4.8,
        reviewCount: 320,
        priceRange: '$$',
        specialties: [
            'Cold Brew',
            'Seasonal Lattes',
            'House Roast'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
        description: 'Roasts their own coffee on-site. A cozy spot with a strong local following.',
        website: 'https://www.florincoffee.com'
    },
    {
        id: 'coffee-5',
        type: 'coffee_shop',
        name: 'Theory Coffee Company',
        address: '2347 Nacogdoches Rd',
        city: 'San Antonio',
        state: 'TX',
        zip: '78209',
        coordinates: [
            29.5000,
            -98.4700
        ],
        rating: 4.9,
        reviewCount: 550,
        priceRange: '$',
        specialties: [
            'Wild Gift Coffee',
            'Cappuccino',
            'Espresso'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'A beloved coffee trailer serving exceptional specialty coffee from Wild Gift Coffee.',
        website: 'https://www.theorycoffeeco.com'
    },
    {
        id: 'coffee-6',
        type: 'coffee_shop',
        name: 'Cambrian Coffee',
        address: '9461 Hammerly Blvd',
        city: 'Houston',
        state: 'TX',
        zip: '77080',
        coordinates: [
            29.8000,
            -95.5300
        ],
        rating: 4.8,
        reviewCount: 400,
        priceRange: '$$',
        specialties: [
            'Sausage Rolls',
            'Cambrian Latte',
            'British Pastries'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'Specialty coffee meets British baked goods. Famous for their savory sausage rolls.',
        website: 'https://www.cambriancoffee.com'
    },
    {
        id: 'coffee-7',
        type: 'coffee_shop',
        name: 'Air Ship Coffee',
        address: '1000 SE 5th St',
        city: 'Bentonville',
        state: 'AR',
        zip: '72712',
        coordinates: [
            36.3700,
            -94.2000
        ],
        rating: 4.7,
        reviewCount: 600,
        priceRange: '$$',
        specialties: [
            'Single Origin',
            'Cold Brew',
            'Pour Over'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
        description: 'Unique open-air cafe located in a mountain bike preserve. Great coffee in a beautiful setting.',
        website: 'https://airshipcoffee.com'
    },
    {
        id: 'coffee-8',
        type: 'coffee_shop',
        name: 'Black Fox Coffee',
        address: '70 Pine St',
        city: 'New York',
        state: 'NY',
        zip: '10005',
        coordinates: [
            40.7000,
            -74.0000
        ],
        rating: 4.8,
        reviewCount: 900,
        priceRange: '$$$',
        specialties: [
            'Butterscotch Latte',
            'Global Roasters',
            'Espresso'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        description: 'Sleek multi-roaster shop featuring a curated selection of the world\'s best coffees.',
        website: 'https://blackfoxcoffee.com'
    },
    {
        id: 'coffee-9',
        type: 'coffee_shop',
        name: 'Camber',
        address: '221 W Holly St',
        city: 'Bellingham',
        state: 'WA',
        zip: '98225',
        coordinates: [
            48.7500,
            -122.4800
        ],
        rating: 4.9,
        reviewCount: 750,
        priceRange: '$$$',
        specialties: [
            'Ethiopian Pour Over',
            'Espresso',
            'Brunch'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'Award-winning roaster and restaurant. Known for exceptional coffee and equally impressive food.',
        website: 'https://cambercoffee.com'
    },
    {
        id: 'coffee-10',
        type: 'coffee_shop',
        name: 'Coffeeholic House',
        address: '3700 S Hudson St',
        city: 'Seattle',
        state: 'WA',
        zip: '98118',
        coordinates: [
            47.5500,
            -122.2800
        ],
        rating: 4.8,
        reviewCount: 1500,
        priceRange: '$$',
        specialties: [
            'Vietnamese Coffee',
            'Ube Latte',
            'Cheese Foam'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'Seattle\'s first Vietnamese coffee shop. Famous for their colorful and delicious signature drinks.',
        website: 'https://www.coffeeholichouse.com'
    },
    {
        id: 'coffee-11',
        type: 'coffee_shop',
        name: 'Onyx Coffee Lab',
        address: '101 E Walnut St',
        city: 'Rogers',
        state: 'AR',
        zip: '72756',
        coordinates: [
            36.3300,
            -94.1200
        ],
        rating: 4.9,
        reviewCount: 2200,
        priceRange: '$$$',
        specialties: [
            'Geometry Blend',
            'Seasonal Pour Over',
            'Matcha'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        description: 'A scientific approach to coffee. Known for their transparency, sustainability, and award-winning roasts.',
        website: 'https://onyxcoffeelab.com'
    },
    {
        id: 'coffee-12',
        type: 'coffee_shop',
        name: 'The Wormhole Coffee',
        address: '1462 N Milwaukee Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60622',
        coordinates: [
            41.9100,
            -87.6800
        ],
        rating: 4.7,
        reviewCount: 1800,
        priceRange: '$$',
        specialties: [
            'Honey Bear Latte',
            'Koopa Troopa',
            'Pour Over'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
        description: 'An 80s themed coffee shop complete with a DeLorean. Serving excellent coffee in a nostalgic atmosphere.',
        website: 'https://www.thewormhole.us'
    },
    {
        id: 'coffee-13',
        type: 'coffee_shop',
        name: 'Remi Flower & Coffee',
        address: '906 2nd Ave',
        city: 'New York',
        state: 'NY',
        zip: '10017',
        coordinates: [
            40.7500,
            -73.9700
        ],
        rating: 4.8,
        reviewCount: 650,
        priceRange: '$$',
        specialties: [
            'Lavender Latte',
            'Rose Matcha',
            'Floral Tea'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'A beautiful combination of a flower shop and cafe. Sip your coffee surrounded by fresh blooms.',
        website: 'https://reminyc.com'
    },
    {
        id: 'coffee-14',
        type: 'coffee_shop',
        name: 'Moniker Coffee Co.',
        address: '2860 Sims Rd',
        city: 'San Diego',
        state: 'CA',
        zip: '92106',
        coordinates: [
            32.7300,
            -117.2100
        ],
        rating: 4.7,
        reviewCount: 900,
        priceRange: '$$',
        specialties: [
            'Craft Espresso',
            'Cold Brew',
            'Avocado Toast'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'A minimalist, airy space in Liberty Station. Perfect for working or relaxing with a great cup of coffee.',
        website: 'https://monikercoffee.com'
    },
    {
        id: 'coffee-15',
        type: 'coffee_shop',
        name: 'Videri Chocolate Factory',
        address: '327 W Davie St',
        city: 'Raleigh',
        state: 'NC',
        zip: '27601',
        coordinates: [
            35.7700,
            -78.6400
        ],
        rating: 4.9,
        reviewCount: 1100,
        priceRange: '$$',
        specialties: [
            'Frozen Hot Chocolate',
            'Mocha',
            'Single Origin Espresso'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
        description: 'A bean-to-bar chocolate factory with a full espresso bar. The mocha is arguably the best you\'ll ever have.',
        website: 'https://viderichocolatefactory.com'
    },
    {
        id: 'coffee-16',
        type: 'coffee_shop',
        name: 'Cafe Du Monde',
        address: '800 Decatur St',
        city: 'New Orleans',
        state: 'LA',
        zip: '70116',
        coordinates: [
            29.9500,
            -90.0600
        ],
        rating: 4.6,
        reviewCount: 25000,
        priceRange: '$',
        specialties: [
            'Beignets',
            'Chicory Coffee',
            'Cafe Au Lait'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        description: 'The iconic open-air coffee shop famous for its powdered sugar-covered beignets and chicory coffee.',
        website: 'https://shop.cafedumonde.com'
    },
    {
        id: 'coffee-17',
        type: 'coffee_shop',
        name: 'Panther Coffee',
        address: '2390 NW 2nd Ave',
        city: 'Miami',
        state: 'FL',
        zip: '33127',
        coordinates: [
            25.8000,
            -80.2000
        ],
        rating: 4.7,
        reviewCount: 3200,
        priceRange: '$$',
        specialties: [
            'Cold Brew',
            'Espresso',
            'Single Origin'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'A Miami staple in Wynwood specializing in small-batch roasting and direct-trade coffees.',
        website: 'https://panthercoffee.com'
    },
    {
        id: 'coffee-18',
        type: 'coffee_shop',
        name: 'Dark Matter Coffee',
        address: '738 N Western Ave',
        city: 'Chicago',
        state: 'IL',
        zip: '60612',
        coordinates: [
            41.8900,
            -87.6800
        ],
        rating: 4.8,
        reviewCount: 1500,
        priceRange: '$$',
        specialties: [
            'Unicorn Blood',
            'Barrel Aged Coffee',
            'Chocolate City'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80',
        description: 'Known for their psychedelic branding and innovative barrel-aging process for coffee beans.',
        website: 'https://www.darkmattercoffee.com'
    },
    {
        id: 'coffee-19',
        type: 'coffee_shop',
        name: 'Spyhouse Coffee',
        address: '945 Broadway St NE',
        city: 'Minneapolis',
        state: 'MN',
        zip: '55413',
        coordinates: [
            45.0000,
            -93.2500
        ],
        rating: 4.7,
        reviewCount: 1100,
        priceRange: '$$',
        specialties: [
            'Spygirl Latte',
            'Oat Milk Latte',
            'Cold Brew'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'Stylish cafes serving sustainably sourced coffee. Credited with helping popularize oat milk in the region.',
        website: 'https://spyhousecoffee.com'
    },
    {
        id: 'coffee-20',
        type: 'coffee_shop',
        name: 'Menotti\'s Coffee Stop',
        address: '56 Windward Ave',
        city: 'Venice',
        state: 'CA',
        zip: '90291',
        coordinates: [
            33.9800,
            -118.4700
        ],
        rating: 4.8,
        reviewCount: 1400,
        priceRange: '$$',
        specialties: [
            'Spanish Latte',
            'Espresso',
            'Vegan Donuts'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
        description: 'A Venice Beach icon right by the boardwalk. Famous for its vinyl collection and world-class latte art.',
        website: 'https://menottis.com'
    },
    {
        id: 'coffee-21',
        type: 'coffee_shop',
        name: 'Olympia Coffee',
        address: '600 4th Ave E',
        city: 'Olympia',
        state: 'WA',
        zip: '98501',
        coordinates: [
            47.0400,
            -122.9000
        ],
        rating: 4.9,
        reviewCount: 950,
        priceRange: '$$',
        specialties: [
            'Big Truck Blend',
            'Single Origin',
            'Pour Over'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=600&q=80',
        description: 'A certified B-Corp roaster dedicated to fair for all sourcing and exceptional quality.',
        website: 'https://www.olympiacoffee.com'
    },
    {
        id: 'coffee-22',
        type: 'coffee_shop',
        name: 'Portrait Coffee',
        address: '1065 Ralph David Abernathy Blvd',
        city: 'Atlanta',
        state: 'GA',
        zip: '30310',
        coordinates: [
            33.7400,
            -84.4400
        ],
        rating: 4.9,
        reviewCount: 600,
        priceRange: '$$',
        specialties: [
            'Toni',
            'Pour Over',
            'Cold Brew'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
        description: 'A Black-owned roaster in Atlanta\'s historic West End, rewriting the narrative of coffee with every cup.',
        website: 'https://portrait.coffee'
    },
    {
        id: 'coffee-23',
        type: 'coffee_shop',
        name: 'The Nitro Bar',
        address: '228 Broadway',
        city: 'Providence',
        state: 'RI',
        zip: '02903',
        coordinates: [
            41.8200,
            -71.4100
        ],
        rating: 4.8,
        reviewCount: 850,
        priceRange: '$$',
        specialties: [
            'Nitro Cold Brew',
            'Nitro Latte',
            'Breakfast Sandwiches'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        description: 'Specializes in nitrogen-infused cold brew on tap. Smooth, creamy, and incredibly refreshing.',
        website: 'https://www.thenitrobar.com'
    },
    {
        id: 'coffee-24',
        type: 'coffee_shop',
        name: 'Kaladi Brothers Coffee',
        address: '6921 Brayton Dr',
        city: 'Anchorage',
        state: 'AK',
        zip: '99507',
        coordinates: [
            61.1500,
            -149.8800
        ],
        rating: 4.7,
        reviewCount: 1200,
        priceRange: '$$',
        specialties: [
            'Red Goat',
            'Espresso',
            'Mocha'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
        description: 'Alaska\'s premier coffee roaster. A cozy refuge serving strong coffee to fuel your adventures.',
        website: 'https://kaladi.com'
    },
    {
        id: 'coffee-25',
        type: 'coffee_shop',
        name: 'Harken',
        address: '62 Queen St',
        city: 'Charleston',
        state: 'SC',
        zip: '29401',
        coordinates: [
            32.7800,
            -79.9300
        ],
        rating: 4.9,
        reviewCount: 700,
        priceRange: '$$$',
        specialties: [
            'Ricotta Biscuit',
            'Vanilla Latte',
            'Matcha'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
        description: 'A stunningly beautiful cafe and bakery. Known for their exquisite pastries and warm Southern hospitality.',
        website: 'https://www.harkencafe.com'
    },
    {
        id: 'coffee-26',
        type: 'coffee_shop',
        name: 'Bacha Coffee',
        address: 'Dar el Bacha, Route Sidi Abdelaziz',
        city: 'Marrakech',
        state: 'Morocco',
        zip: '40000',
        coordinates: [
            31.6300,
            -7.9800
        ],
        rating: 4.9,
        reviewCount: 5000,
        priceRange: '$$$$',
        specialties: [
            '100% Arabica',
            'Croissants',
            'Coffee Pot Service'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
        description: 'A legendary coffee room housed in the spectacular Dar el Bacha palace. A truly luxurious coffee experience.',
        website: 'https://bachacoffee.com'
    },
    {
        id: 'bakery-user',
        type: 'bakery',
        name: 'Sweety\'s Bakery',
        address: 'Check Map for Location',
        city: 'Your City',
        state: 'Local',
        zip: '00000',
        coordinates: [
            0,
            0
        ],
        rating: 5.0,
        reviewCount: 100,
        priceRange: '$$',
        specialties: [
            'Custom Cakes',
            'Fresh Bread',
            'Pastries'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80',
        description: 'A wonderful local bakery offering delicious treats and warm service. Click to find us on Google Maps!',
        website: 'https://www.google.com/maps/place/Sweety%E2%80%99s+Bakery/data=!4m2!3m1!1s0x0:0x3fdd2868f784e2?sa=X&ved=1t:2428&ictx=111'
    },
    {
        id: 'coffee-27',
        type: 'coffee_shop',
        name: 'Café des Épices',
        address: '75 Rahba Lakdima',
        city: 'Marrakech',
        state: 'Morocco',
        zip: '40000',
        coordinates: [
            31.6200,
            -7.9800
        ],
        rating: 4.7,
        reviewCount: 3500,
        priceRange: '$$',
        specialties: [
            'Spiced Coffee',
            'Mint Tea',
            'Avocado Sandwich'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
        description: 'A vibrant cafe in the heart of the spice market. Famous for its rooftop terrace and stunning views of the Medina.',
        website: 'https://cafedesepices.net'
    },
    {
        id: 'coffee-28',
        type: 'coffee_shop',
        name: 'Nomad',
        address: '1 Derb Aarjan',
        city: 'Marrakech',
        state: 'Morocco',
        zip: '40000',
        coordinates: [
            31.6300,
            -7.9800
        ],
        rating: 4.6,
        reviewCount: 2800,
        priceRange: '$$$',
        specialties: [
            'Modern Moroccan',
            'Saffron Cake',
            'Date Milkshake'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80',
        description: 'A chic modern Moroccan restaurant and cafe with a multi-level rooftop. A must-visit for design lovers.',
        website: 'https://nomadmarrakech.com'
    },
    {
        id: 'coffee-29',
        type: 'coffee_shop',
        name: 'Le Jardin',
        address: '32 Souk Jeld Sidi Abdelaziz',
        city: 'Marrakech',
        state: 'Morocco',
        zip: '40000',
        coordinates: [
            31.6300,
            -7.9900
        ],
        rating: 4.7,
        reviewCount: 2100,
        priceRange: '$$$',
        specialties: [
            'Garden Setting',
            'Moroccan Tea',
            'Tagine'
        ],
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        description: 'A lush green oasis hidden within the Medina. Perfect for a peaceful escape with delicious food and drinks.',
        website: 'https://lejardinmarrakech.com'
    }
];
}),
"[project]/components/ShopCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ShopCard({ shop, onClick }) {
    const Wrapper = ({ children })=>{
        if (shop.website) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: shop.website,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "block h-full",
                onClick: onClick,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ShopCard.tsx",
                lineNumber: 14,
                columnNumber: 17
            }, this);
        }
        // Fallback to Google Search if no website
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(`${shop.name} ${shop.city} ${shop.state}`)}`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: googleSearchUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "block h-full",
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/ShopCard.tsx",
            lineNumber: 29,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Wrapper, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-48 overflow-hidden bg-gray-100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: shop.imageUrl,
                            alt: shop.name,
                            className: "w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold shadow-sm",
                            children: shop.priceRange
                        }, void 0, false, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-3 left-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2 py-1 rounded-md text-xs font-bold shadow-sm uppercase tracking-wider ${shop.type === 'bakery' ? 'bg-pink-100/90 text-pink-800 backdrop-blur-sm' : 'bg-amber-100/90 text-amber-800 backdrop-blur-sm'}`,
                                children: shop.type === 'coffee_shop' ? 'Coffee Shop' : 'Bakery'
                            }, void 0, false, {
                                fileName: "[project]/components/ShopCard.tsx",
                                lineNumber: 55,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShopCard.tsx",
                    lineNumber: 45,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-5 flex flex-col flex-grow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-lg text-gray-900 leading-tight group-hover:text-pink-600 transition-colors",
                                    children: shop.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ShopCard.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-green-50 px-2 py-1 rounded text-green-700 text-xs font-bold shrink-0 ml-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "★"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopCard.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1",
                                            children: shop.rating
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopCard.tsx",
                                            lineNumber: 72,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 text-sm mb-3 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 mr-1 opacity-70",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopCard.tsx",
                                            lineNumber: 78,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopCard.tsx",
                                            lineNumber: 79,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopCard.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, this),
                                shop.city,
                                ", ",
                                shop.state
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 76,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm line-clamp-2 mb-4 flex-grow",
                            children: shop.description
                        }, void 0, false, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2 mt-auto",
                            children: [
                                shop.specialties.slice(0, 3).map((specialty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded-full border border-gray-100",
                                        children: specialty
                                    }, specialty, false, {
                                        fileName: "[project]/components/ShopCard.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this)),
                                shop.specialties.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-gray-400 px-1 py-1",
                                    children: [
                                        "+",
                                        shop.specialties.length - 3,
                                        " more"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopCard.tsx",
                                    lineNumber: 98,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopCard.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShopCard.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ShopCard.tsx",
            lineNumber: 43,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ShopCard.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/ShopDirectory.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShopDirectory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$shops$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/shops.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShopCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ShopCard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function ShopDirectory() {
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [cityFilter, setCityFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            'All',
            ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$shops$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shops"].map((s)=>s.city))).sort()
        ];
    }, []);
    const filteredShops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$shops$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shops"].filter((shop)=>{
            const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) || shop.specialties.some((s)=>s.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCity = cityFilter === 'All' || shop.city === cityFilter;
            const matchesType = typeFilter === 'all' || shop.type === typeFilter;
            return matchesSearch && matchesCity && matchesType;
        });
    }, [
        searchTerm,
        cityFilter,
        typeFilter
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-extrabold text-gray-900 mb-4",
                        children: "Bakery & Coffee Shop Directory"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                        children: "Discover the best spots for pastries and caffeine across the country. Curated by our community of food lovers."
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-12 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search by name or specialty...",
                                            className: "w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-gray-400 absolute left-3 top-3.5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ShopDirectory.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopDirectory.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "City"
                                }, void 0, false, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 61,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    className: "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-500 outline-none transition-all appearance-none",
                                    value: cityFilter,
                                    onChange: (e)=>setCityFilter(e.target.value),
                                    children: cities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: city,
                                            children: city
                                        }, city, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopDirectory.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Type"
                                }, void 0, false, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex bg-gray-50 p-1 rounded-xl border border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTypeFilter('all'),
                                            className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'all' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                            children: "All"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 77,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTypeFilter('bakery'),
                                            className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'bakery' ? 'bg-white text-pink-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                            children: "Bakeries"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 84,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setTypeFilter('coffee_shop'),
                                            className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${typeFilter === 'coffee_shop' ? 'bg-white text-amber-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                            children: "Coffee"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 91,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShopDirectory.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShopDirectory.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            filteredShops.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                children: filteredShops.map((shop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShopCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        shop: shop
                    }, shop.id, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 107,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 105,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🔍"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold text-gray-900 mb-2",
                        children: "No shops found"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 113,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "Try adjusting your search or filters to find what you're looking for."
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setSearchTerm('');
                            setCityFilter('All');
                            setTypeFilter('all');
                        },
                        className: "mt-6 text-pink-600 font-medium hover:underline",
                        children: "Clear all filters"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-amber-500 rounded-full opacity-20 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 px-8 py-16 md:px-16 md:py-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-bold text-white mb-4",
                                        children: "Own a Bakery or Coffee Shop?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ShopDirectory.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-lg mb-8 leading-relaxed",
                                        children: "We'd love to feature your business in our directory! Join our curated list of the best spots in the country and reach thousands of food lovers every day."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ShopDirectory.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-2 text-white font-medium bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/ShopDirectory.tsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Send us a message at ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:contact.sbakery@gmail.com",
                                                        className: "text-pink-400 hover:text-pink-300 underline decoration-2 underline-offset-4",
                                                        children: "contact.sbakery@gmail.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ShopDirectory.tsx",
                                                        lineNumber: 142,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ShopDirectory.tsx",
                                                lineNumber: 142,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ShopDirectory.tsx",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ShopDirectory.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300 max-w-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-2xl",
                                                    children: "🏪"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-gray-900",
                                                            children: "Your Shop Here"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ShopDirectory.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500",
                                                            children: "Join the community"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ShopDirectory.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 148,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded w-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded w-3/4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 bg-gray-100 rounded w-5/6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/ShopDirectory.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ShopDirectory.tsx",
                                            lineNumber: 155,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ShopDirectory.tsx",
                                    lineNumber: 147,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ShopDirectory.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold text-gray-900 mb-4",
                                children: "Recommended Baking Tools & Articles"
                            }, void 0, false, {
                                fileName: "[project]/components/ShopDirectory.tsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 max-w-2xl mx-auto",
                                children: "Level up your baking with our curated selection of essential tools and in-depth reviews."
                            }, void 0, false, {
                                fileName: "[project]/components/ShopDirectory.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: toolSuggestions.map((tool)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolCard, {
                                tool: tool
                            }, tool.id, false, {
                                fileName: "[project]/components/ShopDirectory.tsx",
                                lineNumber: 177,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/ShopDirectory.tsx",
                        lineNumber: 175,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShopDirectory.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ShopDirectory.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_90161a00._.js.map