import React from "react";

import { FocusBoundary, Layout, Link } from "@components";
import { getAnchor } from "@utils/anchor";
import {
  loadAllMd,
  loadMdBySlug,
  MdPage,
  processMd,
} from "@helpers/retrieveMdPages";
import { pick } from "@helpers/object";

export default function MarkdownPage({
  html,
  title,
  headings,
  sidebar,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <Layout
      title={title}
      sidebar={sidebar}
      as={undefined}
      description={undefined}
    >
      {(setSidebar: any) => (
        <>
          <h1>{title}</h1>
          {sidebar ? (
            <FocusBoundary
              onChange={setSidebar}
              onEnter={undefined}
              onExit={undefined}
            >
              <nav>
                <ol>
                  {headings
                    .filter((heading) => heading.depth < 3)
                    .map(({ value }) => (
                      <li key={value}>
                        <Link
                          href={getAnchor(value)}
                          onClick={() => {
                            setSidebar(false);
                            const heading = document.getElementById(
                              getAnchor(value).replace("#", ""),
                            );
                            heading?.querySelector("a")?.focus();
                          }}
                        >
                          {value}
                        </Link>
                      </li>
                    ))}
                </ol>
              </nav>
            </FocusBoundary>
          ) : null}
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </>
      )}
    </Layout>
  );
}

export const getStaticProps = async ({
  params,
}: {
  params: { ["md-page"]: string };
}) => {
  const doc = await loadMdBySlug<MdPage>("src/md-pages", params["md-page"]);
  const { html, headings } = processMd(doc.content);

  return {
    props: {
      ...pick(["title", "sidebar"], doc),
      headings,
      html,
    },
  };
};

export const getStaticPaths = async () => {
  const pages = await loadAllMd<MdPage>("src/md-pages");
  return {
    paths: pages.map(({ slug }) => ({ params: { ["md-page"]: slug } })),
    fallback: false,
  };
};
