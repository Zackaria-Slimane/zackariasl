import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePluginRadar({
			analytics: {
				id: "G-S363TBDWEH",
			},
			config: {
				cookie_domain: "auto",
				cookie_expires: 63072000,
				cookie_prefix: "none",
				cookie_update: true,
				cookie_flags: "SameSite=None;Secure",
				send_page_view: true,
				allow_google_signals: true,
				allow_ad_personalization_signals: true,
			},
			consentDefaults: {
				analytics_storage: "granted",
				ad_storage: "denied",
				wait_for_update: 500,
			},
			gtm: { id: "GTM-TX45GD23" },
		}),
	],
});
