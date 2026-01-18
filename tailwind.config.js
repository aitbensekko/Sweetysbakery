/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-background': '#FBF9F7', // Warm, creamy off-white
        'brand-pink': '#E65A88',       // Vibrant, saturated pink
        'brand-pink-light': '#FDF0F4', // A very light, subtle pink for backgrounds
        'brand-text-title': '#4A3F3F',   // Dark, rich brown/charcoal
        'brand-text-body': '#746868',    // Lighter, softer brown
        'brand-border': '#EDE7E4',       // Light, warm gray for borders
        'brand-gold': '#D4AF37',         // Classic gold for accents
        'brand-cream': '#FBF9F7',        // Creamy off-white (same as background or slightly different)
        'brand-brown': '#4A3F3F',        // Alias for text-title for backward compatibility
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
