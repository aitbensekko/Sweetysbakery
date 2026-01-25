
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
