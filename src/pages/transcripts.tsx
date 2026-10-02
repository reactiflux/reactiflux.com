import React from "react";
import { add, format, compareDesc, parseISO } from "date-fns";

import { FocusBoundary, Layout, Link } from "@components";
import {
  loadAllMd,
  processMdPlaintext,
  Transcript,
} from "@helpers/retrieveMdPages";

// Dates are stored as midnight UTC; a day's offset keeps them from rendering
// as the previous day in US time zones, same as the transcript pages.
const toDay = (date: string) => add(parseISO(date), { days: 1 });

const truncate = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

export default function Transcripts({
  all,
  firstYear,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <Layout
      title="Q&A transcripts"
      sidebar
      as={undefined}
      description={`Every Reactiflux Q&A transcript since ${firstYear}: the people who build React, React Native, Redux, GraphQL and the tools around them, answering questions from the community.`}
    >
      {(setSidebar: any) => (
        <>
          <h1>Q&amp;A transcripts</h1>
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
          <div className="markdown">
            <p>
              Since {firstYear}, Reactiflux has hosted Q&amp;As with the people
              who build React, React Native, and the libraries and tools around
              them. Members bring the questions; these are the transcripts,
              newest first.
            </p>
            <p>
              Looking for This Month in React? Episodes, show notes and
              transcripts are at{" "}
              <Link href="https://tmir.reactiflux.com/">
                tmir.reactiflux.com
              </Link>
              .
            </p>
            <ul>
              {all.map((transcript) => (
                <li key={transcript.path}>
                  <Link href={transcript.path}>{transcript.title}</Link>,{" "}
                  {transcript.month}
                  {transcript.blurb ? `: ${transcript.blurb}` : null}
                </li>
              ))}
            </ul>
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
  if (all.length === 0) {
    throw new Error("No transcripts found!");
  }
  const years = all
    .filter((t) => t.date)
    .map((t) => toDay(t.date).getFullYear());
  return {
    props: {
      firstYear: Math.min(...years),
      all: all.map((t) => ({
        title: t.title,
        path: `/transcripts/${t.slug}`,
        month: t.date ? format(toDay(t.date), "MMMM yyyy") : "",
        blurb: truncate(
          processMdPlaintext(t.description ?? "")
            .html.replace(/\s+/g, " ")
            .trim(),
          160,
        ),
      })),
    },
  };
}
