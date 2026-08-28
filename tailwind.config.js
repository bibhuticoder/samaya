/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/extension/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      colors: {
        samaya: {
          blue: '#82c7eb',
          'blue-dark': '#4fa8d8',
          accent: '#38bdf8',
          dark: '#0f172a',
          card: 'rgba(15, 23, 42, 0.75)',
          border: 'rgba(255, 255, 255, 0.12)',
        },
      },
      fontFamily: {
        mukta: ['Mukta', 'var(--font-mukta)', 'sans-serif'],
        rhodium: ['"Rhodium Libre"', 'var(--font-rhodium)', 'serif'],
        sans: ['Inter', 'var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
