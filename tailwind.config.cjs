/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        maps: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '100' },
        }
      },
      animation: {
        maps: 'maps 3s ease-in-out infinite',
      }
    },
	},
	plugins: [
    require('@tailwindcss/forms')
  ],
}
