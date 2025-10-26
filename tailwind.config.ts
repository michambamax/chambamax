import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        primary: '#1E3A8A',
        secondary: '#3B82F6',
        accent: '#14B8A6',
        highlight: '#F97316',
        light: '#FFFFFF',
        muted: '#E5E7EB',
      },
      boxShadow: { card: '0 10px 30px rgba(0,0,0,.25)' },
      borderRadius: { xl2: '16px' }
    },
  },
  plugins: [],
} satisfies Config
