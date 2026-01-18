export type ToolId =
  | 'baking-sources'
  | 'all-tools'
  | 'home'
  | 'products'
  | 'bakers-percentage'
  | 'baking-pan-converter'
  | 'recipe-scaler'
  | 'measurement-converter'
  | 'baking-blog'
  | 'recipe-index'
  | 'about'
  | 'contact-us'
  | 'privacy-policy'
  | 'terms-of-use'

  | 'allergen-guide'
  | 'amortization-calculator'
  | 'baker-schedule'
  | 'baking-bucket-list'
  | 'baking-tutorials'
  | 'bmi-calculator'
  | 'bmr-calculator'
  | 'body-fat-calculator'
  | 'buttercream-calculator'
  | 'butterfat-converter'
  | 'cake-pricing'
  | 'calorie-calculator'
  | 'cost-per-recipe'
  | 'date-calculator'
  | 'dessert-calculator'
  | 'dough-temperature'
  | 'digital-notebook'
  | 'dough-hydration'
  | 'drinks-videos'
  | 'essential-recipes'
  | 'flavor-pairing-guide'
  | 'fondant-calculator'
  | 'frosting-color-mixer'
  | 'ganache-calculator'
  | 'hydration-converter'
  | 'ideal-weight-calculator'
  | 'ingredient-glossary'
  | 'ingredient-substitutions'
  | 'baking-ebooks'
  | 'premium-templates'

  | 'inventory-management'
  | 'macaron-troubleshooting'
  | 'management-dashboard'
  | 'my-art'
  | 'mortgage-affordability'
  | 'mortgage-payoff'

  | 'multiple-timer'

  | 'order-management'
  | 'oven-temp-converter'
  | 'pace-calculator'
  | 'payment-calculator'
  | 'percentage-calculator'

  | 'pregnancy-calculator'
  | 'protein-macro'
  | 'recipe-box'
  | 'relaxing-videos'
  | 'shopping-list'
  | 'simple-calculator'
  | 'stopwatch'
  | 'sweetener-converter'
  | 'temperature-converter'
  | 'time-calculator'
  | 'tip-calculator'
  | 'volume-converter'
  | 'weight-converter'
  | 'weight-loss-calculator'
  | 'yeast-converter'
  | 'age-calculator'
  | 'investment-calculator'
  | 'custom-cake-order-builder'
  | 'recipe-scaling-costing'
  | 'cake-design-creator'
  | 'bakery-order-planner'
  | 'disclaimer'
  | 'label-generator'
  | 'shop-directory'
  | 'kitchenaid-reviews'
  // Categories
  | 'core'
  | 'converters'
  | 'management'
  | 'utilities'
  | 'kitchen'
  | 'family'
  | 'financial'
  | 'resources'
  | 'beverages';

export const toolIdToSlug = (toolId: ToolId): string => {
  switch (toolId) {
    case 'home':
      return '/';
    case 'products':
      return '/products';
    case 'baking-sources':
      return '/tools/baking-sources';
    case 'all-tools':
      return '/tools/all-tools';
    case 'bakers-percentage':
      return '/tools/bakers-percentage';
    case 'baking-pan-converter':
      return '/tools/baking-pan-converter';
    case 'recipe-scaler':
      return '/tools/recipe-scaler';
    case 'measurement-converter':
      return '/tools/measurement-converter';
    case 'baking-blog':
      return '/blog';
    case 'recipe-index':
      return '/recipes';
    case 'about':
      return '/about';
    case 'contact-us':
      return '/contact-us';
    case 'privacy-policy':
      return '/privacy-policy';
    case 'terms-of-use':
      return '/terms-of-use';
    case 'disclaimer':
      return '/disclaimer';
    case 'shop-directory':
      return '/coffee-shop-directory';

    case 'allergen-guide':
      return '/tools/allergen-guide';
    case 'amortization-calculator':
      return '/tools/amortization-calculator';
    case 'baker-schedule':
      return '/tools/baker-schedule';
    case 'baking-bucket-list':
      return '/tools/baking-bucket-list';
    case 'baking-tutorials':
      return '/tools/baking-tutorials';
    case 'bmi-calculator':
      return '/tools/bmi-calculator';
    case 'bmr-calculator':
      return '/tools/bmr-calculator';
    case 'body-fat-calculator':
      return '/tools/body-fat-calculator';
    case 'buttercream-calculator':
      return '/tools/buttercream-calculator';
    case 'butterfat-converter':
      return '/tools/butterfat-converter';
    case 'cake-pricing':
      return '/tools/cake-pricing';
    case 'calorie-calculator':
      return '/tools/calorie-calculator';
    case 'cost-per-recipe':
      return '/tools/cost-per-recipe';
    case 'date-calculator':
      return '/tools/date-calculator';
    case 'dough-temperature':
      return '/tools/dough-temperature';
    case 'dessert-calculator':
      return '/tools/dessert-calculator';
    case 'digital-notebook':
      return '/tools/digital-notebook';
    case 'dough-hydration':
      return '/tools/dough-hydration';
    case 'drinks-videos':
      return '/tools/drinks-videos';
    case 'essential-recipes':
      return '/essential-recipes';
    case 'flavor-pairing-guide':
      return '/tools/flavor-pairing-guide';
    case 'fondant-calculator':
      return '/tools/fondant-calculator';
    case 'frosting-color-mixer':
      return '/tools/frosting-color-mixer';
    case 'ganache-calculator':
      return '/tools/ganache-calculator';
    case 'hydration-converter':
      return '/tools/hydration-converter';
    case 'ideal-weight-calculator':
      return '/tools/ideal-weight-calculator';
    case 'ingredient-glossary':
      return '/tools/ingredient-glossary';
    case 'ingredient-substitutions':
      return '/tools/ingredient-substitutions';

    case 'inventory-management':
      return '/tools/inventory-management';
    case 'macaron-troubleshooting':
      return '/tools/macaron-troubleshooting';
    case 'management-dashboard':
      return '/tools/management-dashboard';

    case 'mortgage-affordability':
      return '/tools/mortgage-affordability';
    case 'mortgage-payoff':
      return '/tools/mortgage-payoff';
    case 'my-art':
      return '/tools/my-art';
    case 'multiple-timer':
      return '/tools/multiple-timer';

    case 'order-management':
      return '/tools/order-management';
    case 'oven-temp-converter':
      return '/tools/oven-temp-converter';
    case 'pace-calculator':
      return '/tools/pace-calculator';
    case 'payment-calculator':
      return '/tools/payment-calculator';
    case 'percentage-calculator':
      return '/tools/percentage-calculator';

    case 'pregnancy-calculator':
      return '/tools/pregnancy-calculator';
    case 'protein-macro':
      return '/tools/protein-macro';
    case 'recipe-box':
      return '/tools/recipe-box';
    case 'relaxing-videos':
      return '/tools/relaxing-videos';
    case 'shopping-list':
      return '/tools/shopping-list';
    case 'simple-calculator':
      return '/tools/simple-calculator';
    case 'stopwatch':
      return '/tools/stopwatch';
    case 'sweetener-converter':
      return '/tools/sweetener-converter';
    case 'temperature-converter':
      return '/tools/temperature-converter';
    case 'time-calculator':
      return '/tools/time-calculator';
    case 'tip-calculator':
      return '/tools/tip-calculator';
    case 'volume-converter':
      return '/tools/volume-converter';
    case 'weight-converter':
      return '/tools/weight-converter';
    case 'weight-loss-calculator':
      return '/tools/weight-loss-calculator';
    case 'yeast-converter':
      return '/tools/yeast-converter';
    case 'age-calculator':
      return '/tools/age-calculator';
    case 'investment-calculator':
      return '/tools/investment-calculator';
    case 'custom-cake-order-builder':
      return '/tools/custom-cake-order-builder';
    case 'recipe-scaling-costing':
      return '/tools/recipe-scaling-costing';
    case 'cake-design-creator':
      return '/tools/cake-design-creator';
    case 'bakery-order-planner':
      return '/tools/bakery-order-planner';
    case 'label-generator':
      return '/tools/label-generator';
    case 'baking-ebooks':
      return '/baking-ebooks';
    case 'premium-templates':
      return '/premium-templates';
    case 'shop-directory':
      return '/coffee-shop-directory';
    case 'kitchenaid-reviews':
      return '/tools/kitchenaid-reviews';

    // Categories
    case 'core': return '/tools/core';
    case 'converters': return '/tools/converters';
    case 'management': return '/tools/management';
    case 'utilities': return '/tools/utilities';
    case 'kitchen': return '/tools/kitchen';
    case 'family': return '/tools/family';
    case 'financial': return '/tools/financial';
    case 'resources': return '/tools/resources';
    case 'beverages': return '/tools/beverages';


    default:
      return '/';
  }
};

export const allToolIds: ToolId[] = [
  'home', 'products', 'bakers-percentage', 'baking-pan-converter', 'baking-sources', 'all-tools', 'recipe-scaler', 'measurement-converter',
  'baking-blog', 'recipe-index', 'about', 'contact-us', 'privacy-policy', 'terms-of-use',
  'allergen-guide', 'amortization-calculator', 'baker-schedule', 'baking-bucket-list', 'baking-tutorials', 'dough-temperature', 'my-art',
  'bmi-calculator', 'bmr-calculator', 'body-fat-calculator', 'buttercream-calculator', 'butterfat-converter', 'mortgage-payoff',
  'cake-pricing', 'calorie-calculator', 'cost-per-recipe', 'date-calculator', 'dessert-calculator', 'mortgage-affordability',
  'digital-notebook', 'dough-hydration', 'drinks-videos', 'essential-recipes', 'flavor-pairing-guide',
  'fondant-calculator', 'frosting-color-mixer', 'ganache-calculator', 'hydration-converter', 'ideal-weight-calculator',
  'ingredient-glossary', 'ingredient-substitutions', 'inventory-management',
  'macaron-troubleshooting', 'management-dashboard', 'multiple-timer',
  'order-management', 'oven-temp-converter', 'pace-calculator', 'payment-calculator', 'percentage-calculator',
  'pregnancy-calculator', 'protein-macro', 'recipe-box', 'relaxing-videos',
  'shopping-list', 'simple-calculator', 'stopwatch', 'sweetener-converter', 'temperature-converter',
  'time-calculator', 'tip-calculator', 'volume-converter', 'weight-converter', 'weight-loss-calculator',
  'yeast-converter', 'age-calculator', 'investment-calculator', 'custom-cake-order-builder', 'recipe-scaling-costing', 'cake-design-creator', 'disclaimer',
  'shop-directory', 'baking-ebooks', 'premium-templates', 'bakery-order-planner', 'label-generator', 'kitchenaid-reviews',
  // Categories
  'core', 'converters', 'management', 'utilities', 'kitchen', 'family', 'financial', 'resources', 'beverages',
];

export const slugToToolId = (slug: string): ToolId | undefined => {
  if (slug === '/') return 'home';
  if (slug === '/blog') return 'baking-blog';
  if (slug === '/recipes') return 'recipe-index';
  if (slug === '/about') return 'about';
  if (slug === '/contact-us') return 'contact-us';
  if (slug === '/privacy-policy') return 'privacy-policy';
  if (slug === '/terms-of-use') return 'terms-of-use';
  if (slug === '/disclaimer') return 'disclaimer';
  if (slug === '/baking-ebooks') return 'baking-ebooks';
  if (slug === '/premium-templates') return 'premium-templates';
  if (slug === '/bakery-directory' || slug === '/coffee-shop-directory') return 'shop-directory';


  if (slug === '/essential-recipes' || slug.startsWith('/essential-recipes/')) return 'essential-recipes';

  const toolId = slug.replace('/tools/', '') as ToolId;

  if (allToolIds.includes(toolId)) {
    return toolId;
  }

  return undefined;
};
