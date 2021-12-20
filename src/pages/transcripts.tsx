import React from "react";
import { add, format, compareDesc, parseISO } from "date-fns";

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
            <p>
              <em>
                Transcript from{" "}
                {format(add(parseISO(latest.date), { days: 1 }), "EEEE PPP")}
              </em>
            </p>
            <div dangerouslySetInnerHTML={{ __html: latest.html }} />
          </div>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const transcripts = await loadAllMd<Transcript>("src/transcripts");
  const all = transcripts
    .filter((x) => Boolean(x) && x.content !== "")
    .sort((a, b) =>
      a.date && b.date ? compareDesc(parseISO(a.date), parseISO(b.date)) : 1,
    );
  const latest = all[0];
  if (!latest) {
    throw new Error("No transcripts found!");
  }
  return {
    props: {
      all: all.map((t) => ({
        title: t.title,
        hasContent: Boolean(t.content),
        path: `/transcripts/${t.slug}`,
      })),
      latest: {
        title: latest.title,
        date: latest.date,
        html: mdToHtml(latest.content),
      },
    },
  };
}
