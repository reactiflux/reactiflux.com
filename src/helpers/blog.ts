import { BlogPost, loadAllMd } from "@helpers/retrieveMdPages";
import { pick } from "@helpers/object";

const POSTS_PER_PAGE = 15;

export const loadBlogIndex = async (directory: string, page: number) => {
  const md = await loadAllMd<BlogPost>(directory);
  const posts = md
    .map((x) => pick(["slug", "description", "title"], x))
    .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  const pageCount = Math.ceil(md.length / POSTS_PER_PAGE);

  return { posts, pageCount };
};
