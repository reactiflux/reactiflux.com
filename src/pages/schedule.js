import React from 'react';
import { graphql } from 'gatsby';

import { Layout, Link } from '@components';
import { groupBy, partition } from '@utils/array';

export default function Schedule({ data }) {
  const currentDate = new Date();
  const { nodes } = data.transcripts;

  const [pastEventNodes, upcomingEventNodes] = partition(
    (node) => currentDate <= new Date(node.date),
    nodes.map(simplifyNode),
  );

  const upcomingEvents = groupBy('dateGroup', upcomingEventNodes);
  const pastEvents = groupBy('dateGroup', pastEventNodes);

  return (
    <Layout title="Q&A Schedule">
      <h1>Q&A Schedule</h1>
      <div>
        <p>
          We host one or two Q&A’s per month with Facebook Engineers and other
          interesting developers in the React community. These Q&A’s usually
          take place on Thursdays from 1pm - 2pm PT. If you want to hear from
          someone specific in the community, let us know by contacting us via{' '}
          <Link to="https://twitter.com/reactiflux">Twitter</Link> or ping an
          admin or moderator in the{' '}
          <Link to="https://discord.gg/BkSU7Ju">#reactiflux-admin</Link> channel
          on discord.
        </p>
        {Object.keys(upcomingEvents).length > 0 && (
          <>
            <hr />
            <h2>Upcoming Q&A's & Meetups</h2>
            {Object.entries(upcomingEvents).map(([dateGroup, events]) => (
              <React.Fragment key={dateGroup}>
                <h2>{dateGroup}</h2>
                {events.map((event) => (
                  <Event key={event.name} {...event} isUpcoming />
                ))}
              </React.Fragment>
            ))}
          </>
        )}
        <hr />
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
            <li key={field} dangerouslySetInnerHTML={{ __html: field }} />
          ))}
        {html && !isUpcoming ? (
          <li>
            <Link to={`/transcripts/${relativeDirectory}/${name}`}>
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
