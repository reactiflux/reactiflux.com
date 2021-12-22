import fs from "fs/promises";
import { join } from "path";
import { format } from "date-fns";
import matter from "gray-matter";
import { unified } from "unified";
import parse from "remark-parse";
import stringify from "remark-stringify";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import remarkHeadings, { hasHeadingsData } from "@vcarl/remark-headings";

const loadMd = async (path: string) => {
  const fullPath = join(process.cwd(), `${path}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");
  return matter(fileContents);
};

const stripSuffix = (filename: string, suffix: string) =>
  filename.replace(new RegExp(`\.${suffix}`), "");

const remarkHtmlProcessor = unified()
  .use(parse)
  .use(stringify)
  .use(remarkRehype)
  .use(remarkHeadings)
  .use(rehypeSlug)
  .use(rehypeStringify);

export const processMd = (mdSource: string) => {
  const vfile = remarkHtmlProcessor.processSync(mdSource);
  if (hasHeadingsData(vfile.data)) {
    return { html: vfile.toString(), headings: vfile.data.headings };
  }
  return { html: vfile.toString(), headings: [] };
};

export const loadAllMd = async <Frontmatter>(directory: string) => {
  const postsDirectory = join(process.cwd(), directory);
  const slugs = await fs
    .readdir(postsDirectory)
    .then((files) =>
      files.filter((f) => f.endsWith(".md")).map((x) => stripSuffix(x, "md")),
    );

  return Promise.all(
    slugs.map((slug) => loadMdBySlug<Frontmatter>(directory, slug)),
  );
};

export interface Transcript {
  content: string;
  slug: string;
  date: string;
  time: string;
  title: string;
  description: string;
  location: string;
  people: string;
  [k: string]: string | boolean | undefined;
}
export interface MdPage {
  content: string;
  title: string;
  sidebar?: boolean;
  [k: string]: string | boolean | undefined;
}
export const loadMdBySlug = async <Frontmatter>(
  directory: string,
  slug: string,
) => {
  const { data, content } = await loadMd(join(directory, slug));
  const mapped = Object.entries(data).map((pair) => {
    // Next doesn't like getting Date instances, so strip them to strings
    // It's really annoying that the parser doesn't let us do this
    if (pair[1] instanceof Date) {
      return [pair[0], format(pair[1], "yyyy-MM-dd")];
    }
    return pair;
  });
  mapped.push(["slug", slug]);
  mapped.push(["content", content]);
  return Object.fromEntries(mapped) as Frontmatter;
};
