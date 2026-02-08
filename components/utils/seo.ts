
import { ToolId, toolIdToSlug } from './slugs';
import { BlogPost } from '../../data/blogPosts';

// Define the structure for SEO data
export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  imageUrl?: string;
}

// Helper function to generate a canonical URL
const getCanonicalUrl = (path: string): string => `https://sweetysbakery.com${path}`;

// SEO data for each tool/page
const seoDataMap: Record<string, SeoData> = {
  'home': {
    title: "Free Baking Calculators & Tools | Sweety's Bakery",
    description: "Free baking tools: cake pricing, recipe scaler, conversions & more. Master your baking with professional-grade calculators.",
    keywords: [
      "free baking calculators", "cake pricing calculator", "recipe scaler", "baking conversion chart",
      "sourdough hydration calculator", "macaron troubleshooting guide", "bakery business tools",
      "cake cost calculator", "pastry chef tools", "baking math", "dough calculator",
      "baking", "baking recipes", "easy baking recipes", "baking for beginners",
      "baking soda", "baking powder", "gluten-free baking",
      "cake recipes", "vanilla cake", "chocolate cake", "red velvet cake", "cupcakes recipe", "frosting recipe",
      "cookie recipes", "chocolate chip cookies", "sugar cookies", "peanut butter cookies", "oatmeal cookies", "no-bake cookies", "cookie dough recipe", "soft cookie recipe",
      "brownie recipe", "fudgy brownies", "easy brownies", "blondies recipe", "brownie mix hacks",
      "bread recipes", "banana bread", "zucchini bread", "pumpkin bread", "sourdough bread", "quick bread recipes",
      "cinnamon rolls", "cheesecake recipe", "apple pie", "muffins recipe", "pastries", "desserts",
      "baking tools", "baking calculators", "baker's percentage"
    ],
    imageUrl: getCanonicalUrl('/placeholder-image.jpg'), // Replace with a real general image
  },
  'all-tools': {
    title: "All Baking Tools & Calculators | Sweety's Bakery",
    description: "Browse our complete collection of free baking calculators, converters, and business tools.",
    keywords: ["baking tools", "bakery calculators", "free tools", "converters"],
    imageUrl: getCanonicalUrl('/tools/all-tools.jpg'),
  },
  'bakers-percentage': {
    title: "Baker's Percentage Calculator | Sweety's Bakery",
    description: "Calculate ingredient weights with baker's percentages. accurate and scalable recipes made easy.",
    keywords: ["baker's percentage", "dough calculator", "recipe scaling", "baking math"],
    imageUrl: getCanonicalUrl('/calculators/bakers-percentage.jpg'),
  },
  'baking-pan-converter': {
    title: "Baking Pan Converter | Sweety's Bakery",
    description: "Convert recipes for different pan sizes. Adjust baking times and temps for perfect results.",
    keywords: ["pan converter", "baking pan size", "recipe conversion", "cake pan calculator"],
    imageUrl: getCanonicalUrl('/converters/baking-pan.jpg'),
  },
  'recipe-scaler': {
    title: "Recipe Scaler | Sweety's Bakery",
    description: "Scale recipes up or down precisely. Ideal for party prep, small batches, or pro baking.",
    keywords: ["recipe scaler", "ingredient scaling", "baking adjustments", "quantity converter"],
    imageUrl: getCanonicalUrl('/scalers/recipe-scaler.jpg'),
  },
  'measurement-converter': {
    title: "Baking Measurement Converter | Sweety's Bakery",
    description: "Convert baking ingredients between weight (g, oz) and volume (cups, tbsp) easily.",
    keywords: ["measurement converter", "baking conversion", "grams to cups", "volume to weight"],
    imageUrl: getCanonicalUrl('/converters/measurement.jpg'),
  },
  'baking-blog': {
    title: "Baking Blog | Sweety's Bakery",
    description: "Baking tips, recipes, and in-depth tutorials. Your resource for everything baking.",
    keywords: ["baking blog", "pastry recipes", "baking tutorials", "dessert ideas"],
    imageUrl: getCanonicalUrl('/blog/main-image.jpg'),
  },
  'recipe-index': {
    title: "Recipe Index | Sweety's Bakery",
    description: "Browse our full collection of cookies, cakes, breads, and pastries. Find your next bake.",
    keywords: ["recipe index", "baking recipes", "cookie recipes", "cake recipes", "bread recipes"],
    imageUrl: getCanonicalUrl('/images/recipe-index-seo.png'),
  },

  'investment-calculator': {
    title: "Investment Calculator | Sweety's Bakery",
    description: "Calculate future investment value with our easy, free financial tool.",
    keywords: ["investment calculator", "future value", "compound interest", "investment return"],
    imageUrl: getCanonicalUrl('/calculators/investment-calculator.jpg'),
  },
  'baking-ebooks': {
    title: "Popular Baking Ebooks | Sweety's Bakery",
    description: "Curated baking ebooks: sourdough guides, cookie cookbooks & more. Find inspiration.",
    keywords: ["baking ebooks", "baking cookbooks", "recipe books", "baking guides", "ebooks"],
    imageUrl: getCanonicalUrl('/images/baking-ebooks.jpg'),
  },
  'cake-pricing': {
    title: "Free Cake Pricing Calculator | Sweety's Bakery",
    description: "Calculate cake costs: ingredients, labor, overhead. Price for profit with our free tool.",
    keywords: ["cake pricing calculator", "cake cost calculator", "price my cake", "bakery pricing", "food cost calculator"],
    imageUrl: getCanonicalUrl('/calculators/cake-pricing.jpg'),
  },
  'age-calculator': {
    title: "Free Age Calculator | Sweety's Bakery",
    description: "Calculate your exact age in years, months, days. Simple and fun tool.",
    keywords: ["age calculator", "birthday calculator", "calculate age"],
    imageUrl: getCanonicalUrl('/calculators/age-calculator.jpg'), // Assuming consistent path
  },
  'baking-bucket-list': {
    title: "Baking Bucket List | Sweety's Bakery",
    description: "Track your baking journey with challenges for every skill level.",
    keywords: ["baking bucket list", "baking challenges", "baking goals"],
    imageUrl: getCanonicalUrl('/tools/bucket-list.jpg'),
  },
  'time-calculator': {
    title: "Free Time Calculator | Sweety's Bakery",
    description: "Add or subtract time durations for free. Calculate total work hours, baking time, or travel time easily.",
    keywords: ["time calculator", "time duration calculator", "add time", "subtract time", "work hours calculator"],
    imageUrl: getCanonicalUrl('/calculators/time-calculator.jpg'),
  },
  'payment-calculator': {
    title: "Free Payment Calculator | Sweety's Bakery",
    description: "Calculate loan payments, monthly installments, and payment schedules with our free calculator.",
    keywords: ["payment calculator", "loan calculator", "monthly payment", "installment calculator"],
    imageUrl: getCanonicalUrl('/calculators/payment-calculator.jpg'),
  },
  'ideal-weight-calculator': {
    title: "Free Ideal Weight Calculator | Sweety's Bakery",
    description: "Calculate your ideal body weight based on height, age, and gender with our free tool.",
    keywords: ["ideal weight calculator", "healthy weight", "body weight calculator", "target weight"],
    imageUrl: getCanonicalUrl('/calculators/ideal-weight.jpg'),
  },
  'protein-macro': {
    title: "Free Protein & Macro Calculator | Sweety's Bakery",
    description: "Calculate daily protein requirements and macronutrient goals based on your activity level and fitness goals.",
    keywords: ["protein calculator", "macro calculator", "macronutrient calculator", "daily protein needs"],
    imageUrl: getCanonicalUrl('/calculators/protein-macro.jpg'),
  },
  'digital-notebook': {
    title: "Free Digital Notebook | Sweety's Bakery",
    description: "Keep all your baking notes, recipes, and ideas organized in one place with our free digital notebook.",
    keywords: ["digital notebook", "baking notes", "recipe organizer", "baking journal"],
    imageUrl: getCanonicalUrl('/tools/digital-notebook.jpg'),
  },
  'oven-temp-converter': {
    title: "Free Oven Temperature Converter | Sweety's Bakery",
    description: "Convert oven temperatures between Celsius, Fahrenheit, and gas marks instantly for perfect baking.",
    keywords: ["oven temperature converter", "celsius to fahrenheit", "gas mark converter", "baking temperature"],
    imageUrl: getCanonicalUrl('/converters/oven-temp.jpg'),
  },
  'fondant-calculator': {
    title: "Free Fondant Calculator | Sweety's Bakery",
    description: "Calculate exactly how much fondant you need to cover any cake size with our free calculator.",
    keywords: ["fondant calculator", "fondant coverage", "cake fondant", "fondant amount"],
    imageUrl: getCanonicalUrl('/calculators/fondant.jpg'),
  },
  'body-fat-calculator': {
    title: "Free Body Fat Calculator | Sweety's Bakery",
    description: "Estimate your body fat percentage using various measurement methods with our free calculator.",
    keywords: ["body fat calculator", "body fat percentage", "fat percentage calculator"],
    imageUrl: getCanonicalUrl('/calculators/body-fat.jpg'),
  },
  'frosting-color-mixer': {
    title: "Free Frosting Color Mixer | Sweety's Bakery",
    description: "Get perfect frosting colors every time. Mix food coloring ratios for buttercream and royal icing.",
    keywords: ["frosting color mixer", "food coloring chart", "buttercream colors", "icing color guide"],
    imageUrl: getCanonicalUrl('/tools/color-mixer.jpg'),
  },
  'dough-hydration': {
    title: "Free Dough Hydration Calculator | Sweety's Bakery",
    description: "Calculate dough hydration percentage for perfect bread, pizza, and sourdough recipes.",
    keywords: ["dough hydration calculator", "bread hydration", "sourdough hydration", "baker's percentage"],
    imageUrl: getCanonicalUrl('/calculators/dough-hydration.jpg'),
  },
  'mortgage-affordability': {
    title: "Free Mortgage Affordability Calculator | Sweety's Bakery",
    description: "Calculate how much house you can afford based on income, debts, and down payment.",
    keywords: ["mortgage affordability", "home affordability calculator", "house budget calculator"],
    imageUrl: getCanonicalUrl('/calculators/mortgage-affordability.jpg'),
  },
  'my-art': {
    title: "My Art Gallery | Sweety's Bakery",
    description: "Browse our stunning collection of custom cakes, desserts, and baking creations.",
    keywords: ["cake gallery", "custom cakes", "baking art", "cake designs", "dessert gallery"],
    imageUrl: getCanonicalUrl('/gallery/my-art.jpg'),
  },
  'weight-loss-calculator': {
    title: "Free Weight Loss Calculator | Sweety's Bakery",
    description: "Calculate calories needed for weight loss and estimate time to reach your goal weight.",
    keywords: ["weight loss calculator", "calorie deficit calculator", "weight loss timeline"],
    imageUrl: getCanonicalUrl('/calculators/weight-loss.jpg'),
  },
  'temperature-converter': {
    title: "Free Temperature Converter | Sweety's Bakery",
    description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin instantly.",
    keywords: ["temperature converter", "celsius to fahrenheit", "fahrenheit to celsius"],
    imageUrl: getCanonicalUrl('/converters/temperature.jpg'),
  },
  'yeast-converter': {
    title: "Free Yeast Converter | Sweety's Bakery",
    description: "Convert between active dry yeast, instant yeast, and fresh yeast for perfect bread recipes.",
    keywords: ["yeast converter", "yeast conversion", "active dry yeast", "instant yeast"],
    imageUrl: getCanonicalUrl('/converters/yeast.jpg'),
  },
  'baker-schedule': {
    title: "Free Baker Schedule | Sweety's Bakery",
    description: "Plan your baking schedule with our free checklist and timeline tool for perfect results.",
    keywords: ["baker schedule", "baking timeline", "baking checklist", "baking planner"],
    imageUrl: getCanonicalUrl('/tools/baker-schedule.jpg'),
  },
  'macaron-troubleshooting': {
    title: "Free Macaron Troubleshooting Guide | Sweety's Bakery",
    description: "Fix common macaron problems: cracked shells, no feet, hollows. Visual guide with expert tips.",
    keywords: ["macaron troubleshooting", "macaron problems", "macaron feet", "macaron shells"],
    imageUrl: getCanonicalUrl('/guides/macaron-troubleshooting.jpg'),
  },
  'calorie-calculator': {
    title: "Free Calorie Calculator | Sweety's Bakery",
    description: "Calculate daily calorie needs based on age, gender, weight, height, and activity level.",
    keywords: ["calorie calculator", "daily calorie needs", "TDEE calculator", "calorie intake"],
    imageUrl: getCanonicalUrl('/calculators/calorie.jpg'),
  },
  'bmr-calculator': {
    title: "Free BMR Calculator | Sweety's Bakery",
    description: "Calculate your Basal Metabolic Rate (BMR) to understand your body's calorie needs at rest.",
    keywords: ["BMR calculator", "basal metabolic rate", "metabolism calculator"],
    imageUrl: getCanonicalUrl('/calculators/bmr.jpg'),
  },
  'bmi-calculator': {
    title: "Free BMI Calculator | Sweety's Bakery",
    description: "Calculate your Body Mass Index (BMI) and find your healthy weight range.",
    keywords: ["BMI calculator", "body mass index", "healthy weight calculator"],
    imageUrl: getCanonicalUrl('/calculators/bmi.jpg'),
  },
  'pregnancy-calculator': {
    title: "Free Pregnancy Calculator | Sweety's Bakery",
    description: "Calculate your due date, pregnancy week, and trimester with our free pregnancy calculator.",
    keywords: ["pregnancy calculator", "due date calculator", "pregnancy week calculator"],
    imageUrl: getCanonicalUrl('/calculators/pregnancy.jpg'),
  },
  'date-calculator': {
    title: "Free Date Calculator | Sweety's Bakery",
    description: "Calculate days between dates, add or subtract days, and plan your baking schedule.",
    keywords: ["date calculator", "days between dates", "date difference calculator"],
    imageUrl: getCanonicalUrl('/calculators/date.jpg'),
  },
  'tip-calculator': {
    title: "Free Tip Calculator | Sweety's Bakery",
    description: "Calculate tips and split bills easily with our free tip calculator.",
    keywords: ["tip calculator", "gratuity calculator", "bill splitter"],
    imageUrl: getCanonicalUrl('/calculators/tip.jpg'),
  },
  'volume-converter': {
    title: "Free Volume Converter | Sweety's Bakery",
    description: "Convert between cups, liters, gallons, and other volume units for baking.",
    keywords: ["volume converter", "cups to liters", "volume conversion", "liquid measurements"],
    imageUrl: getCanonicalUrl('/converters/volume.jpg'),
  },
  'weight-converter': {
    title: "Free Weight Converter | Sweety's Bakery",
    description: "Convert between grams, ounces, pounds, and kilograms for accurate baking.",
    keywords: ["weight converter", "grams to ounces", "weight conversion", "baking weights"],
    imageUrl: getCanonicalUrl('/converters/weight.jpg'),
  },
  'sweetener-converter': {
    title: "Free Sweetener Converter | Sweety's Bakery",
    description: "Convert between sugar, honey, maple syrup, stevia, and other sweeteners in recipes.",
    keywords: ["sweetener converter", "sugar substitute", "honey to sugar", "stevia conversion"],
    imageUrl: getCanonicalUrl('/converters/sweetener.jpg'),
  },
  'simple-calculator': {
    title: "Free Simple Calculator | Sweety's Bakery",
    description: "A straightforward, easy-to-use arithmetic calculator for quick math in the kitchen.",
    keywords: ["simple calculator", "basic calculator", "arithmetic calculator"],
    imageUrl: getCanonicalUrl('/calculators/simple.jpg'),
  },
  'percentage-calculator': {
    title: "Free Percentage Calculator | Sweety's Bakery",
    description: "Calculate percentages, percentage increase, decrease, and baker's percentages.",
    keywords: ["percentage calculator", "percent calculator", "percentage increase"],
    imageUrl: getCanonicalUrl('/calculators/percentage.jpg'),
  },
  'buttercream-calculator': {
    title: "Free Buttercream Calculator | Sweety's Bakery",
    description: "Calculate exactly how much buttercream you need for any cake size including filling and piping.",
    keywords: ["buttercream calculator", "frosting calculator", "buttercream amount", "cake frosting"],
    imageUrl: getCanonicalUrl('/calculators/buttercream.jpg'),
  },
  'ganache-calculator': {
    title: "Free Ganache Calculator | Sweety's Bakery",
    description: "Find the perfect chocolate to cream ratio for any type of ganache from drips to firm fillings.",
    keywords: ["ganache calculator", "chocolate ganache", "ganache ratio", "chocolate to cream ratio"],
    imageUrl: getCanonicalUrl('/calculators/ganache.jpg'),
  },
  'dough-temperature': {
    title: "Free Dough Temperature Calculator | Sweety's Bakery",
    description: "Calculate the exact water temperature needed for perfect dough fermentation.",
    keywords: ["dough temperature", "desired dough temperature", "DDT calculator", "bread dough temp"],
    imageUrl: getCanonicalUrl('/calculators/dough-temperature.jpg'),
  },
  'flavor-pairing-guide': {
    title: "Free Flavor Pairing Guide | Sweety's Bakery",
    description: "Discover what flavors go well together with our creative guide for cakes, cookies, and desserts.",
    keywords: ["flavor pairing", "flavor combinations", "flavor wheel", "dessert flavors"],
    imageUrl: getCanonicalUrl('/guides/flavor-pairing.jpg'),
  },
  'ingredient-substitutions': {
    title: "Free Ingredient Substitutions Guide | Sweety's Bakery",
    description: "Find common ingredient swaps and substitutions for baking emergencies.",
    keywords: ["ingredient substitutions", "baking substitutes", "ingredient swaps", "baking alternatives"],
    imageUrl: getCanonicalUrl('/guides/substitutions.jpg'),
  },
  'allergen-guide': {
    title: "Free Allergen Guide | Sweety's Bakery",
    description: "Comprehensive guide to common allergens in baking and how to avoid them.",
    keywords: ["allergen guide", "food allergies", "baking allergens", "allergen-free baking"],
    imageUrl: getCanonicalUrl('/guides/allergen.jpg'),
  },
  'ingredient-glossary': {
    title: "Free Ingredient Glossary | Sweety's Bakery",
    description: "Complete glossary of baking ingredients with descriptions and usage tips.",
    keywords: ["ingredient glossary", "baking ingredients", "ingredient guide"],
    imageUrl: getCanonicalUrl('/guides/ingredients.jpg'),
  },
  'management-dashboard': {
    title: "Free Bakery Management Dashboard | Sweety's Bakery",
    description: "Streamline your bakery operations with inventory tracking, prep lists, and waste logging.",
    keywords: ["bakery management", "bakery dashboard", "inventory management", "bakery operations"],
    imageUrl: getCanonicalUrl('/tools/management-dashboard.jpg'),
  },
  'order-management': {
    title: "Free Bakery Order Management | Sweety's Bakery",
    description: "Manage all your customer orders in one place. Track status, details, and delivery dates.",
    keywords: ["order management", "bakery orders", "order tracking", "customer orders"],
    imageUrl: getCanonicalUrl('/tools/order-management.jpg'),
  },
  'shopping-list': {
    title: "Free Shopping List | Sweety's Bakery",
    description: "Create and manage your baking shopping lists with our free tool.",
    keywords: ["shopping list", "grocery list", "baking ingredients list"],
    imageUrl: getCanonicalUrl('/tools/shopping-list.jpg'),
  },
  'recipe-box': {
    title: "Free Recipe Box | Sweety's Bakery",
    description: "Save and organize your favorite baking recipes in one convenient place.",
    keywords: ["recipe box", "recipe organizer", "save recipes", "recipe collection"],
    imageUrl: getCanonicalUrl('/tools/recipe-box.jpg'),
  },
  'multiple-timer': {
    title: "Free Multiple Timer | Sweety's Bakery",
    description: "Run multiple timers simultaneously for complex baking projects.",
    keywords: ["multiple timer", "baking timer", "kitchen timer", "simultaneous timers"],
    imageUrl: getCanonicalUrl('/tools/multiple-timer.jpg'),
  },
  'stopwatch': {
    title: "Free Stopwatch | Sweety's Bakery",
    description: "Simple stopwatch tool for timing your baking processes.",
    keywords: ["stopwatch", "timer", "baking stopwatch"],
    imageUrl: getCanonicalUrl('/tools/stopwatch.jpg'),
  },
  'dessert-calculator': {
    title: "Free Dessert Calculator | Sweety's Bakery",
    description: "Calculate serving sizes and portions for desserts and baked goods.",
    keywords: ["dessert calculator", "serving calculator", "portion calculator"],
    imageUrl: getCanonicalUrl('/calculators/dessert.jpg'),
  },
  'cost-per-recipe': {
    title: "Free Cost Per Recipe Calculator | Sweety's Bakery",
    description: "Calculate the exact cost of any recipe including ingredients and overhead.",
    keywords: ["recipe cost calculator", "food cost", "recipe pricing", "ingredient cost"],
    imageUrl: getCanonicalUrl('/calculators/cost-per-recipe.jpg'),
  },
  'baking-tutorials': {
    title: "Free Baking Tutorials | Sweety's Bakery",
    description: "Learn from the pros with our curated collection of the best baking video tutorials.",
    keywords: ["baking tutorials", "baking videos", "how to bake", "baking lessons"],
    imageUrl: getCanonicalUrl('/tutorials/baking.jpg'),
  },
  'relaxing-videos': {
    title: "Relaxing Baking Videos | Sweety's Bakery",
    description: "Enjoy calming, satisfying baking videos perfect for relaxation and inspiration.",
    keywords: ["relaxing videos", "satisfying baking", "asmr baking", "calming videos"],
    imageUrl: getCanonicalUrl('/videos/relaxing.jpg'),
  },
  'drinks-videos': {
    title: "Drinks & Beverages Videos | Sweety's Bakery",
    description: "Learn to make delicious drinks and beverages to pair with your baked goods.",
    keywords: ["drinks videos", "beverage recipes", "coffee tutorials", "drink making"],
    imageUrl: getCanonicalUrl('/videos/drinks.jpg'),
  },
  'essential-recipes': {
    title: "Essential Baking Recipes | Sweety's Bakery",
    description: "Master the fundamental recipes every baker should know.",
    keywords: ["essential recipes", "basic baking recipes", "fundamental recipes", "must-know recipes"],
    imageUrl: getCanonicalUrl('/recipes/essential.jpg'),
  },
  'butterfat-converter': {
    title: "Free Butterfat Converter | Sweety's Bakery",
    description: "Convert between different butterfat percentages for cream and dairy products.",
    keywords: ["butterfat converter", "cream converter", "dairy fat percentage"],
    imageUrl: getCanonicalUrl('/converters/butterfat.jpg'),
  },
  'hydration-converter': {
    title: "Free Hydration Converter | Sweety's Bakery",
    description: "Convert dough hydration percentages and calculate water amounts for bread recipes.",
    keywords: ["hydration converter", "dough hydration", "bread hydration calculator"],
    imageUrl: getCanonicalUrl('/converters/hydration.jpg'),
  },
  'pace-calculator': {
    title: "Free Pace Calculator | Sweety's Bakery",
    description: "Calculate running pace, speed, and time for your fitness goals.",
    keywords: ["pace calculator", "running pace", "speed calculator"],
    imageUrl: getCanonicalUrl('/calculators/pace.jpg'),
  },
  'amortization-calculator': {
    title: "Free Amortization Calculator | Sweety's Bakery",
    description: "Calculate loan amortization schedules and payment breakdowns.",
    keywords: ["amortization calculator", "loan calculator", "amortization schedule"],
    imageUrl: getCanonicalUrl('/calculators/amortization.jpg'),
  },
  'mortgage-payoff': {
    title: "Free Mortgage Payoff Calculator | Sweety's Bakery",
    description: "Calculate how to pay off your mortgage faster with extra payments.",
    keywords: ["mortgage payoff", "mortgage calculator", "early payoff calculator"],
    imageUrl: getCanonicalUrl('/calculators/mortgage-payoff.jpg'),
  },
  'inventory-management': {
    title: "Free Inventory Management | Sweety's Bakery",
    description: "Track and manage your bakery inventory with our free tool.",
    keywords: ["inventory management", "stock tracking", "bakery inventory"],
    imageUrl: getCanonicalUrl('/tools/inventory.jpg'),
  },
  'default': {
    title: "Free Baking Tools | Sweety's Bakery",
    description: "Free tools and calculators to help with your baking projects.",
    keywords: ["baking", "tools", "calculator", "free"],
    imageUrl: getCanonicalUrl('/placeholder-default.jpg'),
  }
};

// Function to get SEO data for a given tool
export const getToolSeoData = (toolId: ToolId): SeoData => {
  return seoDataMap[toolId] || seoDataMap.default;
};

// Function to update the JSON-LD schema in the document head
// Function to update the JSON-LD schema in the document head
export const updateSchema = (toolId: ToolId, seoData: SeoData, post: BlogPost | null) => {
  if (typeof window === 'undefined') return;

  let schema = {};
  const url = getCanonicalUrl(toolIdToSlug(toolId));

  // Helper to extract list items from HTML content based on a header
  const extractListFromHtml = (html: string, headerKeywords: string[]): string[] => {
    if (typeof window === 'undefined') return []; // Ensure we are on client side
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const headers = Array.from(doc.querySelectorAll('h1, h2, h3, h4, h5, h6'));

      const targetHeader = headers.find(header =>
        headerKeywords.some(keyword => header.textContent?.toLowerCase().includes(keyword.toLowerCase()))
      );

      if (targetHeader) {
        let sibling = targetHeader.nextElementSibling;
        while (sibling) {
          if (sibling.tagName === 'UL' || sibling.tagName === 'OL') {
            return Array.from(sibling.children).map(li => li.textContent?.trim() || '').filter(Boolean);
          }
          sibling = sibling.nextElementSibling;
        }
      }
    } catch (e) {
      console.error('Error parsing HTML for schema:', e);
    }
    return [];
  };

  if ((toolId as string) !== 'default' && !post) {
    // Specialized SoftwareApplication Schema for Tools
    const isCalculator =
      seoData.title.toLowerCase().includes('calculator') ||
      seoData.title.toLowerCase().includes('converter') ||
      toolId.includes('calculator') ||
      toolId.includes('converter') ||
      toolId.includes('generator') ||
      toolId === 'recipe-scaler';

    if (isCalculator) {
      schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": seoData.title,
        "description": seoData.description,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": "Sweety's Bakery",
          "url": "https://sweetysbakery.com",
          "telephone": "07 19 43 28 24"
        },
        "featureList": seoData.description,
        ...(toolId === 'recipe-scaler' && { "applicationCategory": "UtilityApplication" })
      };
    } else {
      // Fallback for other tools
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": url,
        "name": seoData.title,
        "description": seoData.description,
        "publisher": {
          "@type": "Organization",
          "name": "Sweety's Bakery",
          "telephone": "07 19 43 28 24",
          "logo": {
            "@type": "ImageObject",
            "url": getCanonicalUrl("/placeholders/logo.png")
          }
        }
      };
    }
  } else if (post) {
    const isRecipe = post.type === 'recipe';
    const canonicalId = getCanonicalUrl(`/${isRecipe ? 'recipes' : 'blog'}/${post.slug}`);

    if (isRecipe) {
      const ingredients = extractListFromHtml(post.content, ['ingredients']);
      const instructions = extractListFromHtml(post.content, ['instructions', 'directions', 'method']);

      schema = {
        "@context": "https://schema.org",
        "@type": "Recipe",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalId
        },
        "name": post.title.split('|')[0].trim(),
        "image": [
          getCanonicalUrl(post.imageUrl)
        ],
        "author": {
          "@type": "Organization",
          "name": "Sweety's Bakery"
        },
        "datePublished": post.date,
        "description": post.excerpt,
        "recipeIngredient": ingredients,
        "recipeInstructions": instructions.map(step => ({
          "@type": "HowToStep",
          "text": step
        })),
        "recipeCategory": post.category,
        // Enhanced fields for Google Rich Results
        ...(post.recipeData?.prepTime && { "prepTime": post.recipeData.prepTime }),
        ...(post.recipeData?.cookTime && { "cookTime": post.recipeData.cookTime }),
        ...(post.recipeData?.totalTime && { "totalTime": post.recipeData.totalTime }),
        ...(post.recipeData?.recipeYield && { "recipeYield": post.recipeData.recipeYield }),
        ...(post.recipeData?.calories && {
          "nutrition": {
            "@type": "NutritionInformation",
            "calories": `${post.recipeData.calories} calories`
          }
        }),
        ...(post.recipeData?.rating && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": post.recipeData.rating.ratingValue,
            "ratingCount": post.recipeData.rating.ratingCount
          }
        })
      };
    } else {
      // Schema for a blog post
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalId
        },
        "headline": post.title.split('|')[0].trim(),
        "description": post.excerpt,
        "image": getCanonicalUrl(post.imageUrl),
        "author": {
          "@type": "Organization",
          "name": "Sweety's Bakery",
          "url": "https://sweetysbakery.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Sweety's Bakery",
          "logo": {
            "@type": "ImageObject",
            "url": getCanonicalUrl("/placeholders/logo.png")
          }
        },
        "datePublished": post.date,
        "articleSection": post.category
      };
    }
  } else {
    // Generic schema for a tool or webpage
    schema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "url": url,
      "name": seoData.title,
      "description": seoData.description,
      "publisher": {
        "@type": "Organization",
        "name": "Sweety's Bakery",
        "telephone": "07 19 43 28 24",
        "logo": {
          "@type": "ImageObject",
          "url": getCanonicalUrl("/placeholders/logo.png")
        }
      }
    };
  }

  // Remove existing schema script if it exists
  const existingScript = document.getElementById('json-ld-schema');
  if (existingScript) {
    existingScript.remove();
  }

  // Add new schema script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'json-ld-schema';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
};
