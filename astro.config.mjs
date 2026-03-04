import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeWrapTimecodes from "./src/plugins/rehype-wrap-timecodes.ts";
import rehypeWrapFirstList from "./src/plugins/rehype-wrap-first-list.ts";

export default defineConfig({
  site: "https://reactiflux.com",
  output: "static",
  adapter: netlify(),
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
