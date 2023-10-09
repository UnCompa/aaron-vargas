/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				over: {
					"0%": {opacity: 0},
					"100%": {opacity: 1}
				},
				loading1: {
					"0%": {widht: "0%"},
					"100%": {width: "25%"}
				},
				loading2: {
					"0%": {widht: "0%"},
					"100%": {width: "50%"}
				},
				loading3: {
					"0%": {widht: "0%"},
					"100%": {width: "75%"}
				},
				loading4: {
					"0%": {widht: "0%"},
					"100%": {width: "100%"}
				},
			},
			animation: {
				"over": "over 2s forwards",
				"over-1": "over 1s 1.1s forwards",
				"over-2": "over 1s 1.2s forwards",
				"over-3": "over 1s 1.3s forwards",
				"over-4": "over 1s 1.4s forwards",
				"over-5": "over 1s 1.5s forwards",
				"over-6": "over 1s 1.6s forwards",
				"load-1": "loading1 5s cubic-bezier(.4,1.01,1,1) forwards",
				"load-2": "loading2 5s cubic-bezier(.4,1.01,1,1) forwards",
				"load-3": "loading3 5s cubic-bezier(.4,1.01,1,1) forwards",
				"load-4": "loading4 5s cubic-bezier(.4,1.01,1,1) forwards"
			},
			gridTemplateColumns: {
				"layout": "20% 60% 20%"
			},
			fontFamily: {
				'poppins': ['"Poppins", sans-serif']
			},
			height: {
				"caja": "500px",
				"circulo": "250px"
			},
			width: {
				"circulo": "250px"
			},
			boxShadow: {
				"caja": '10px 10px 12px 5px rgba(0,0,0,.2)'
			}
		},
		
	},
	plugins: [],
}
