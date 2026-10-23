/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B0F19',
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
          cardText: '#1E293B',
          bg: '#E3E9EF',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        syne: ["'Syne'", 'sans-serif'],
        cormorant: ["'Cormorant'", "'Cormorant Garamond'", 'Georgia', 'serif'],
        fraunces: ["'Fraunces'", 'Georgia', 'serif'],
        'alegreya-sans': ["'Alegreya Sans'", 'sans-serif'],
        'homemade-apple': ["'Homemade Apple'", 'cursive'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
    },
  },
  plugins: [],
}
