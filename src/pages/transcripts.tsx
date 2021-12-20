import React from "react";
import { compareDesc, parseISO } from "date-fns";

import { FocusBoundary, Layout, Link } from "@components";
import { loadAllMd, mdToHtml, Transcript } from "@helpers/retrieveMdPages";

export default function Transcripts({
  all,
  latest,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <Layout title="Transcripts" sidebar as={undefined} description={undefined}>
      {(setSidebar: any) => (
        <>
          <h1>{latest.title}</h1>
          <FocusBoundary
            onChange={setSidebar}
            onEnter={undefined}
            onExit={undefined}
          >
            <nav>
              <ol>
                {all.map((transcript) => (
                  <li key={transcript.path}>
                    <Link href={transcript.path}>{transcript.title}</Link>
                  </li>
                ))}
              </ol>
            </nav>
          </FocusBoundary>
          <div>
            <time>Transcript from {latest.date}</time>
            <div dangerouslySetInnerHTML={{ __html: latest.html }} />
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const transcripts = await loadAllMd<Transcript>("src/transcripts");
  const all = transcripts.sort((a, b) =>
    a.date && b.date ? compareDesc(parseISO(a.date), parseISO(b.date)) : 1,
  );
  // Find first (most recent) transcript with content and generate html
  const latest = all.find((t) => t.content !== "");
  if (!latest) {
    throw new Error("No transcripts found!");
  }
  return {
    props: {
      all: all.map(
        ({ content, description, time, location, people, ...t }) => ({
          ...t,
          hasContent: Boolean(content),
          path: `/transcripts/${t.slug}`,
        }),
      ),
      latest: { ...latest, html: mdToHtml(latest.content) },
    },
  };
}
