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
      }
    }
  },
  plugins: []
} satisfies Config
