import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";
import { remarkR2Images } from "./src/plugins/remark-r2-images.mjs";

export default defineConfig({
  site: "https://hoangnamcantho.com/",
  integrations: [sitemap(), icon(), mdx()],
  markdown: {
    remarkPlugins: [
      [remarkR2Images, { base: "https://images.hoangnamcantho.com" }],
      remarkReadingTime,
      () => {
        return function (tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
