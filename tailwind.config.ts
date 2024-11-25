import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        'text-color': 'var(--text-color)',
        container: 'var(--container-color)',
        primary: 'var(--primary-color)',
        secundary: 'var(--secundary-color)'
      },
      boxShadow: {
        calendar: '0px 4px 6px rgba(0, 0, 0, 0.4)'
      },
      backgroundImage: {
        calendar: 'linear-gradient(0deg, #0b0b0b 50%, rgba(12, 12, 12, 0.6))'
      }
    }
  },
  plugins: []
} satisfies Config
