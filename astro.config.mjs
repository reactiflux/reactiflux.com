import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeWrapTimecodes from "./src/plugins/rehype-wrap-timecodes.ts";
import rehypeWrapFirstList from "./src/plugins/rehype-wrap-first-list.ts";

export default defineConfig({
  site: "https://reactiflux.com",
  output: "static",
  adapter: cloudflare(),
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
