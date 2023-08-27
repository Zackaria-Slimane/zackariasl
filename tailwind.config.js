/** @type {import('tailwindcss').Config} */
export const darkMode = "class";
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const mode = "jit";
export const theme = {
	extend: {
		animation: {
			"bounce-slow": "bounce 3s linear infinite",
		},
		backdropBlur: {
			zs: "5.5px",
		},
		fontFamily: {
			jetBrain: ["JetBrains Mono", "monospace", "cursive"],
			heebo: ["Heebo", "sans-serif"],
		},
		colors: {
			sunflower: "#E9DF00",
			lavender: "#E6E6FA",
			skyblue: "#5998C5",
			peach: "#FFDAB9",
			cream: "#F1F6F9",
			navy: "#102C57",
			powder: "#FAFFFD",
			coral: "#FA824C",
			darkpink: "#995D81",
		},
	},
};
