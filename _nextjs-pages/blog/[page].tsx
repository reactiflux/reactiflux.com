import React from "react";

import { loadBlogIndex } from "@helpers/blog";
import BlogIndex from "@components/BlogIndex";

export default function BlogPageIndex({
  posts,
  page,
  pageCount,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return <BlogIndex posts={posts} page={page} pageCount={pageCount} />;
}

export const getStaticProps = async ({
  params,
}: {
  params: { page: string };
}) => {
  const { page: pageString } = params;
  const page = Number(pageString);
  const { posts, pageCount } = await loadBlogIndex("src/blog", page);

  return {
    props: { posts, page, pageCount },
  };
};
export const getStaticPaths = async () => {
  const { pageCount } = await loadBlogIndex("src/blog", 1);

  // TODO: support localization
  return {
    paths: Array.from({ length: pageCount }).map((_, i) => ({
      params: { page: `${i + 1}` },
    })),
    fallback: false,
  };
};
