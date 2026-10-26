import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// SITE_URL wins; on Netlify, URL is the site's primary address.
const site =
  process.env.SITE_URL ?? process.env.URL ?? "https://pesaclarity.github.io";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
});
