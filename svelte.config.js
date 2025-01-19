import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false,
			strict: true,
		}),
		alias: {
			"$lib/*": "./src/lib/*",
			"~/*": "./src/*",
			"$paraglide/*": "./src/lib/paraglide/*",
			$messages: "./src/lib/paraglide/messages.js",
		},
	},
};

export default config;
