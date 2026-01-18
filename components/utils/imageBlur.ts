// Generate blur placeholder data URLs for Next.js Image component
// These create lightweight SVG gradients that display instantly while images load

/**
 * Generate a generic blur data URL with brand colors
 * @param width - SVG width (default: 10)
 * @param height - SVG height (default: 10)
 * @returns Base64 encoded SVG data URL
 */
export const getBlurDataURL = (width: number = 10, height: number = 10): string => {
    const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FBF9F7;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F5E6E8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
    </svg>
  `;

    const base64 = Buffer.from(svg).toString('base64');
    return `data:image/svg+xml;base64,${base64}`;
};

/**
 * Generate a food-themed blur data URL with warm tones
 * Perfect for recipe and food images
 * @returns Base64 encoded SVG data URL with warm gradient
 */
export const getFoodBlurDataURL = (): string => {
    const svg = `
    <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="food" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#FFE5E5;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#FFF5E1;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#FFE5CC;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#food)"/>
    </svg>
  `;

    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};
