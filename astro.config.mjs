import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// The production domain is not decided yet; set SITE_URL at build time once it is.
const site = process.env.SITE_URL ?? "https://pesaclarity.github.io";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "ignore",
  build: { format: "directory" },
  integrations: [sitemap({ filter: (page) => !page.includes("/404") })],
});
