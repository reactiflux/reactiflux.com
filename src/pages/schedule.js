import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import { Layout, Link } from "@components";
import { groupBy, partition } from "@utils/array";

const EventsDivider = styled.hr`
  margin: 6rem 0;
`;

const ONE_DAY = 24 * 60 * 60 * 1000;

export default function Schedule({ data }) {
  const { nodes } = data.transcripts;

  // transcripts are displayed as "upcoming" until the day *after* they
  // happen, so we compare the node's date to yesterday's date
  const today = new Date();
  const yesterday = new Date(today.getTime() - ONE_DAY);

  const [pastEventNodes, upcomingEventNodes] = partition(
    (node) => yesterday <= new Date(node.date),
    nodes.map(simplifyNode),
  );

  const upcomingEvents = groupBy("dateGroup", upcomingEventNodes);
  const pastEvents = groupBy("dateGroup", pastEventNodes);

  return (
    <Layout title="Q&A Schedule">
      <h1>Q&A Schedule</h1>
      <div>
        <p>
          We host one or two Q&A’s per month with Facebook Engineers and other
          interesting developers in the React community. These Q&A’s usually
          take place on Thursdays from 1pm - 2pm PT. If you want to hear from
          someone specific in the community, let us know by contacting us via{" "}
          <Link to="https://twitter.com/reactiflux">Twitter</Link> or ping an
          admin or moderator in the{" "}
          <Link to="https://discord.gg/BkSU7Ju">#reactiflux-moderation</Link>{" "}
          channel on discord.
        </p>
        {Object.keys(upcomingEvents).length > 0 && (
          <>
            <hr />
            <h2>Upcoming Q&A's & Meetups</h2>
            {Object.entries(upcomingEvents)
              .reverse()
              .map(([dateGroup, events]) => (
                <div key={dateGroup}>
                  <h2>{dateGroup}</h2>
                  {events.map((event) => (
                    <Event key={event.name} {...event} isUpcoming />
                  ))}
                </div>
              ))}
          </>
        )}
        <EventsDivider />
        <h2>Past Q&A's & Meetups</h2>
        {Object.entries(pastEvents).map(([dateGroup, events]) => (
          <React.Fragment key={dateGroup}>
            <h2>
              <s>{dateGroup}</s>
            </h2>
            {events.map((event) => (
              <Event key={event.name} {...event} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
}

const simplifyNode = (node) => {
  const {
    childMarkdownRemark: { html, frontmatter },
    name,
    relativeDirectory,
  } = node;
  return {
    ...frontmatter,
    html,
    name,
    relativeDirectory,
  };
};

const Event = ({
  isUpcoming,
  html,
  dateString,
  description,
  location,
  people,
  recording,
  time,
  title,
  name,
  relativeDirectory,
}) => {
  return (
    <article>
      <h3>{title}</h3>
      <ul>
        {[
          people,
          description,
          dateString,
          isUpcoming && time,
          location,
          recording,
        ]
          .filter(Boolean)
          .map((field) => (
            <li
              key={`${name}-${field}`}
              dangerouslySetInnerHTML={{ __html: field }}
            />
          ))}
        {html && !isUpcoming ? (
          <li>
            <Link
              to={`/transcripts${
                relativeDirectory ? `/${relativeDirectory}` : ""
              }/${name}`}
            >
              Transcript
            </Link>
          </li>
        ) : null}
      </ul>
    </article>
  );
};

export const pageQuery = graphql`
  query ScheduleTranscripts {
    transcripts: allFile(
      filter: { sourceInstanceName: { eq: "transcripts" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        name
        relativeDirectory
        childMarkdownRemark {
          html
          frontmatter {
            date
            dateGroup: date(formatString: "MMMM YYYY")
            dateString: date(formatString: "dddd MMMM Do, YYYY")
            description
            location
            people
            recording
            time
            title
          }
        }
      }
    }
  }
`;
