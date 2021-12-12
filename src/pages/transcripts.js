import React from "react";

import { FocusBoundary, Layout, Link } from "@components";
import { getAllPages, getPostBySlug } from "../helpers/retrieveMdPages";

export default function Transcripts({ data }) {
  const articles = data.transcripts.nodes
    .filter((node) => node.childMarkdownRemark.html.trim().length)
    .map((node) => ({
      title: node.childMarkdownRemark.frontmatter.title,
      path: node.name,
      html: node.childMarkdownRemark.html,
    }));

  const newestArticle = articles[0];

  return (
    <Layout title="Transcripts" sidebar>
      {(setSidebar) => (
        <>
          <h1>{newestArticle.title}</h1>
          <FocusBoundary onChange={setSidebar}>
            <nav>
              <ol>
                {articles.map((article) => (
                  <li key={article.path}>
                    <Link href={"/transcripts/" + article.path}>
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </FocusBoundary>
          <div>
            <time>Transcript from {newestArticle.date}</time>
            <div dangerouslySetInnerHTML={{ __html: newestArticle.html }} />
          </div>
        </>
      )}
    </Layout>
  );
}

// TODO: this is Next code but definitely broken
export async function getStaticProps({ params }) {
  const doc = getPostBySlug(params.slug);
  const content = await markdownToHtml(doc.content || "");

  return {
    props: {
      ...doc,
      content,
    },
  };
}
