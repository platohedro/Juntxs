/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#5596c0',
        'secondary': '#294a60',
        'j2-primary': '#10004c',
        'j2-secondary': '#1c0574',
        'j2-accent': '#ff5edb',
        'j2-highlight': '#c2ff3b',
        'j2-light': '#c5cafc',
        'j2-deep': '#040018',
      },
    },
  },
  plugins: [],
}
