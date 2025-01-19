import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#eef6ff",
					"100": "#e0eeff",
					"200": "#c8defd",
					"300": "#a6c8fb",
					"400": "#94b4f8",
					"500": "#6487f0",
					"600": "#4863e3",
					"700": "#394fc9",
					"800": "#3144a2",
					"900": "#2f3e80",
					"950": "#1b234b",
				},
				base: {
					white: "#f6f6f6",
					50: "#E8E8E8",
					100: "#DBDBDB",
					200: "#C4C4C4",
					300: "#ADADAD",
					400: "#969696",
					500: "#808080",
					600: "#696969",
					700: "#525252",
					800: "#3B3B3B",
					900: "#242424",
					950: "#171717",
				},
			},
		},
	},

	plugins: [],
} satisfies Config;
