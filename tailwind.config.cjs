/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      keyframes: {
        maps: {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '100' },
        },
        "opacity01": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "translatex150": {
          "0%": { transform: "translateX(150px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "translatex150andopacity01": {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
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
