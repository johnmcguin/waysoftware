/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        way_blue: '#90A9BC',
        way_yellow: '#E9D985',
        way_orange: '#F6A57F',
        way_green: '#A4C3B2',
      }
    },
  },
  plugins: [],
};
