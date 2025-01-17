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
					"50": "#f6f6f6",
					"100": "#e7e7e7",
					"200": "#d1d1d1",
					"300": "#b0b0b0",
					"400": "#888888",
					"500": "#6d6d6d",
					"600": "#5d5d5d",
					"700": "#4f4f4f",
					"800": "#454545",
					"900": "#3d3d3d",
					"950": "#171717",
				},
			},
		},
	},

	plugins: [],
} satisfies Config;
