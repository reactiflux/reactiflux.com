import GithubSlugger from "github-slugger";

// note: using this library to match the `gatsby-remark-autolink-headers` plugin
const slugger = new GithubSlugger();

export function getAnchor(text) {
  slugger.reset();
  return `#${slugger.slug(text)}`;
}
