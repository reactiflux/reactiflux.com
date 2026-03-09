import React from "react";

import { loadBlogIndex } from "@helpers/blog";
import BlogIndex from "@components/BlogIndex";

export default function Blog({
  posts,
  page,
  pageCount,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return <BlogIndex posts={posts} page={page} pageCount={pageCount} />;
}

export const getStaticProps = async () => {
  const page = 1;
  const { posts, pageCount } = await loadBlogIndex("src/blog", page);

  // TODO: support localization
  return {
    props: { posts, page, pageCount },
  };
};
