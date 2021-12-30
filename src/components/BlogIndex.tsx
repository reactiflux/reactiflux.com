import React from "react";

import { ArticleLink, Layout, Link, Pagination } from "@components";
import { BlogPost } from "@helpers/retrieveMdPages";

interface Props {
  posts: Pick<BlogPost, "slug" | "title" | "description">[];
  page: number;
  pageCount: number;
}

export default function BlogIndex({ posts, page, pageCount }: Props) {
  return (
    <Layout
      title={`Blog • Page ${page}`}
      as={undefined}
      description={undefined}
    >
      <h1>Reactiflux Blog</h1>
      <div>
        {posts.map((post) => (
          <ArticleLink key={post.slug} {...post} />
        ))}
        {pageCount > 1 ? (
          <Pagination>
            {Array.from({ length: pageCount }, (_, i) => {
              const p = i + 1;
              return (
                <li key={p}>
                  <Link
                    aria-current={p === page ? "page" : undefined}
                    href={`/blog/${p > 1 ? p : ""}`}
                  >
                    {p}
                  </Link>
                </li>
              );
            })}
          </Pagination>
        ) : null}
      </div>
    </Layout>
  );
}
