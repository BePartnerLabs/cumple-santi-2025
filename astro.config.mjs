import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://cumple-santi.giorgiosaud.io",
	output: "server",
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
	// La DB es Cloudflare D1 (binding `DB` en wrangler.jsonc); no hay secrets.
	adapter: cloudflare({
		imageService: "passthrough",
	}),
});
