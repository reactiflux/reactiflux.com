import React from "react";
import styled from "styled-components";
import {
  compareDesc,
  format,
  parseISO,
  isAfter,
  add,
  sub,
  parse,
} from "date-fns";

import { Layout, Link } from "@components";
import { groupBy, partition } from "@helpers/array";
import { pick } from "@helpers/object";
import { loadAllMd, processMd, Transcript } from "@helpers/retrieveMdPages";

const EventsDivider = styled.hr`
  margin: 6rem 0;
`;

const LiEl = styled.li`
  & p {
    margin: 0;
  }
`;

export default function Schedule({
  upcomingEvents,
  pastEvents,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <Layout
      title="Q&amp;A Schedule"
      as={undefined}
      description="Upcoming Q&A events in Reactiflux"
    >
      <h1>Q&A Schedule</h1>
      <div>
        <p>
          We host one or two Q&A’s per month with Facebook Engineers and other
          interesting developers in the React community. These Q&A’s usually
          take place on Thursdays from 1pm - 2pm PT. If you want to hear from
          someone specific in the community, let us know by contacting us via{" "}
          <Link href="https://twitter.com/reactiflux">Twitter</Link> or ping an
          admin or moderator in the{" "}
          <Link href="https://discord.gg/BkSU7Ju">#reactiflux-moderation</Link>{" "}
          channel on discord.
        </p>
        {Object.keys(upcomingEvents).length > 0 && (
          <>
            <hr />
            <h2>Upcoming Q&A’s & Meetups</h2>
            {Object.entries(upcomingEvents)
              .reverse()
              .map(([dateGroup, events]) => (
                <div key={dateGroup}>
                  <h2>{dateGroup}</h2>
                  {events.map((event) => (
                    <Event key={event.slug} {...event} isUpcoming />
                  ))}
                </div>
              ))}
          </>
        )}
        <EventsDivider />
        <h2>Past Q&A’s & Meetups</h2>
        {Object.entries(pastEvents).map(([dateGroup, events]) => (
          <React.Fragment key={dateGroup}>
            <h2>
              <s>{dateGroup}</s>
            </h2>
            {events.map((event) => (
              <Event key={event.slug} {...event} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
}

interface EventProps {
  slug: string;
  isUpcoming?: boolean;
  hasTranscript?: boolean;
  description?: string;
  location?: string;
  people?: string;
  recording?: string;
  time?: string;
  date?: string;
  title: string;
}

const Event = ({
  slug,
  isUpcoming = false,
  hasTranscript = false,
  description,
  location,
  people,
  recording,
  time,
  date,
  title,
}: EventProps) => {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {[
          people,
          description,
          date,
          isUpcoming ? time : "",
          location,
          recording,
        ]
          .filter((x): x is string => Boolean(x))
          .map((value) => (
            <LiEl
              key={`${slug}-${value}`}
              dangerouslySetInnerHTML={{ __html: value }}
            />
          ))}
        {hasTranscript && !isUpcoming ? (
          <LiEl>
            <Link href={`/transcripts/${slug}`}>Transcript</Link>
          </LiEl>
        ) : null}
      </ul>
    </article>
  );
};

export async function getStaticProps() {
  const transcripts = await loadAllMd<Transcript>("src/transcripts");
  const all = transcripts
    .sort((a, b) =>
      a.date && b.date ? compareDesc(parseISO(a.date), parseISO(b.date)) : 1,
    )
    .map((x) => ({
      ...pick(["slug", "title", "time"], x),
      dateGroup: format(parseISO(x.date), "MMMM yyyy"),
      // These dates are fucking stupid and account for timezones. it's wrong locally and correct in production
      date: format(parseISO(x.date), "PPPPP"),
      people: processMd(x.people).html,
      location: processMd(x.location).html,
      description: processMd(x.description).html,
      hasTranscript: x.content !== "",
    }));

  // transcripts are displayed as "upcoming" until the day *after* they
  // happen, so we compare the node's date to yesterday's date
  const now = new Date();
  const today = now;
  const yesterday = sub(today, { days: 1 });

  const [past, upcoming] = partition(
    (node) => isAfter(parse(node.date, "PPPP", now), yesterday),
    all,
  );

  const upcomingEvents = groupBy("dateGroup", upcoming);
  const pastEvents = groupBy("dateGroup", past);
  return {
    props: {
      pastEvents,
      upcomingEvents,
    },
  };
}
