import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import { Button, FocusBoundary, Form, Link, Offer } from "@components";
import { toQueryString } from "@utils/toQueryString";

const ResultsFooter = styled.div`
  margin: 8rem 2rem;
  text-align: center;

  @media (min-width: 600px) {
    margin: 8rem;
  }

  > button {
    margin: 0;
  }
`;

const fields = [
  {
    name: "type",
    type: "select",
    value: "hiring",
    options: [
      { value: "hiring", label: "I'm looking for a job" },
      { value: "forhire", label: "I'm looking for an employee" },
    ],
  },
  {
    name: "limit",
    type: "select",
    value: "10",
    options: [
      { value: "10", label: "load 10 results at a time" },
      { value: "25", label: "load 25 results at a time" },
      { value: "50", label: "load 50 results at a time" },
    ],
  },
  {
    label: "Part time role",
    name: "part time",
    type: "checkbox",
    value: false,
  },
  {
    label: "Full time role",
    name: "full time",
    type: "checkbox",
    value: false,
  },
  {
    label: "Employer helps with visa",
    name: "visa",
    type: "checkbox",
    value: false,
  },
  {
    label: "Accepts remote candidates",
    name: "remote",
    type: "checkbox",
    value: false,
  },
  {
    label: "Offer is an internship / no exp. required",
    name: "intern",
    type: "checkbox",
    value: false,
  },
];

interface JobPostQuery {
  count: number;
  page: number;
  pages: number;
  limit: number;
  data: {
    tags: string[];
    type: "hiring" | "forhire";
    createdAt: string;
    description: string;
    messageLink: string;
    reactions: [string, number][];
    author: {
      username: string;
      displayName: string;
      avatar: string;
    };
  }[];
}

const toQueryStringArray = (
  tags: Record<string, boolean>,
  queryValue: string,
): string =>
  Object.entries(tags)
    .filter(([k, v]) => v)
    .map(([k]) => `${queryValue}[]=${k}`)
    .join("&");

const JobSearch = ({
  toggleModal,
  setSidebar,
}: {
  toggleModal: () => void;
  setSidebar: (open: boolean) => void;
}) => {
  const debounceTimer = React.useRef();
  const [state, setState] = React.useState({
    type: "hiring",
    limit: 10,
    page: 1,
    "part time": false,
    "full time": false,
    visa: false,
    remote: false,
    intern: false,
  });
  const {
    type,
    page,
    limit,
    visa,
    remote,
    intern,
    "full time": ft,
    "part time": pt,
  } = state;
  const { status, data, error } = useQuery({
    queryKey: ["jobPosts", type, page, limit, visa, remote, intern, ft, pt],

    queryFn: async ({ pageParam }): Promise<JobPostQuery> => {
      const requiredTags = toQueryStringArray(
        {
          visa,
          remote,
          intern,
          fulltime: ft,
          parttime: pt,
        },
        "requiredTags",
      );
      console.log({ type, requiredTags });
      const url = `/api/jobs/${type}?${toQueryString({
        limit,
        page: pageParam,
      })}${requiredTags ? `&${requiredTags}` : ""}`;
      const res = await fetch(url);
      return await res.json();
    },
  });
  const onChangeQuery = React.useCallback((query) => {
    console.log({ query });
    setState((_state) => ({
      ..._state,
      ...query,
      limit: parseInt(query.limit, 10),
    }));
  }, []);

  const onClickNext = () => {
    if (page < (data?.pages || Infinity)) {
      setState((_s) => ({
        ..._s,
        page: _s.page + 1,
      }));
    }
  };

  return (
    <>
      {/* @ts-expect-error */}
      <FocusBoundary onChange={setSidebar}>
        {/* @ts-expect-error */}
        <Form allowSubmit={false} fields={fields} onChange={onChangeQuery} />
      </FocusBoundary>
      <div>
        {status === "success" &&
          data?.data.map((result, i) => (
            <Offer
              key={result?.createdAt}
              description={result.description}
              tags={result.tags}
              author={result.author}
              createdAt={result.createdAt}
              reactions={result.reactions}
              messageLink={result.messageLink}
              onClickGetInTouch={toggleModal}
            />
          ))}
        <ResultsFooter>
          {status === "pending" ? (
            <p>Fetching posts...</p>
          ) : (
            <Button onClick={onClickNext}>Fetch More Results</Button>
          )}
          {status === "error" ? (
            <p>
              Something went wrong - please try again! If this problem persists,
              please <Link href="/contact/">let us know</Link>.
            </p>
          ) : status === "success" && data?.data.length === 0 ? (
            <p>
              We couldn’t find any results for your query - try something
              different!
            </p>
          ) : null}
        </ResultsFooter>
      </div>
    </>
  );
};

export default JobSearch;
