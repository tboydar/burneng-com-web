import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ember: '#FF6B35',
        flame: '#F7931E',
        coal: '#1A1A1A',
        ash: '#F5F1EB',
        glow: '#FFD166',
        ink: '#2B2B2B',
        muted: '#6B7280',
        accent: '#06A77D',
      },
      fontFamily: {
        sans: ['"Noto Sans TC Variable"', 'Inter Variable', 'system-ui', 'sans-serif'],
        inter: ['Inter Variable', 'system-ui', 'sans-serif'],
      },
    },
  },
} satisfies Config;
