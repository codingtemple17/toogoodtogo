/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tgtg-primary': '#004C45',
        'tgtg-accent': '#00635B',
        'tgtg-star': '#1F8B7E',
        'tgtg-rating-bar': '#3BB8A8',
        'tgtg-availability-bg': '#FFF8DC',
        'tgtg-bg': '#FFFFFF',
        'tgtg-gray-bg': '#F5F5F5',
        'tgtg-text': '#1A1A1A',
        'tgtg-text-secondary': '#6B6B6B',
        'tgtg-text-muted': '#999999',
        'tgtg-border': '#E8E8E8',
        'tgtg-desktop-bg': '#F0F0F0',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
