// note: using this library to match the `rehype-slug` plugin
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();

export function getAnchor(text) {
  slugger.reset();
  return `#${slugger.slug(text)}`;
}
