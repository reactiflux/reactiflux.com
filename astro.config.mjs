import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeWrapTimecodes from "./src/plugins/rehype-wrap-timecodes.ts";
import rehypeWrapFirstList from "./src/plugins/rehype-wrap-first-list.ts";
import { lastModifiedForUrl } from "./src/utils/gitDate.ts";

export default defineConfig({
  site: "https://reactiflux.com",
  output: "static",
  adapter: netlify(),
  integrations: [
    react(),
    sitemap({
      serialize(item) {
        try {
          const { pathname } = new URL(item.url);
          const lastmod = lastModifiedForUrl(pathname);
          if (lastmod) {
            item.lastmod = lastmod;
          }
        } catch {
          // Leave lastmod unset if URL parsing fails
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeWrapTimecodes, rehypeWrapFirstList],
  },
  redirects: {
    "/guidelines": "/conduct",
  },
});
