/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/packages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-inter)', 'Gilroy', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
    },
    extend: {
      keyframes: require('./tailwind/utils/keyframes'),
    }
  },
  plugins: []
};
