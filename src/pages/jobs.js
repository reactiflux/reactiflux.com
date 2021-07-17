import React from "react";
import styled from "styled-components";

import {
  Button,
  FocusBoundary,
  Form,
  Layout,
  Link,
  Modal,
  Offer,
} from "@components";
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

const LOADING = "LOADING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

const fields = [
  {
    name: "type",
    type: "select",
    defaultValue: "hiring",
    options: [
      { value: "hiring", label: "I'm looking for a job" },
      { value: "for-hire", label: "I'm looking for an employee" },
    ],
  },
  {
    name: "range",
    type: "select",
    defaultValue: "180",
    options: [
      { value: "7", label: "offers posted in last week" },
      { value: "30", label: "offers posted in last 30 days" },
      { value: "90", label: "offers posted in last 3 months" },
      { value: "180", label: "offers posted in last 6 months" },
      { value: "365", label: "offers posted in last year" },
    ],
  },
  {
    name: "limit",
    type: "select",
    defaultValue: "50",
    options: [
      { value: "50", label: "load 50 results at a time" },
      { value: "100", label: "load 100 results at a time" },
    ],
  },
  {
    name: "query",
    type: "text",
    placeholder: "Text search",
  },
  {
    label: "Employer helps with visa",
    name: "provideVisa",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Accepts remote candidates",
    name: "allowRemote",
    type: "checkbox",
    defaultValue: false,
  },
  {
    label: "Offer is an internship / no exp. required",
    name: "internship",
    type: "checkbox",
    defaultValue: false,
  },
];

const Jobs = () => {
  const debounceTimer = React.useRef();
  const [state, setState] = React.useState({});
  const { limit, next, results = [], status = LOADING, url } = state;
  const [showModal, setModal] = React.useState(false);
  const toggleModal = () => setModal((prev) => !prev);

  const onChangeQuery = React.useCallback(
    (query) => {
      setState((_state) => ({
        ..._state,
        clearResults: true,
        limit: parseInt(query.limit, 10),
        url: `https://reactistory.com:8443/api/job?${toQueryString(query)}`,
      }));
    },
    [setState],
  );

  const onClickNext = () =>
    setState((_state) => ({
      ..._state,
      next: undefined,
      status: LOADING,
      url: _state.next,
    }));

  React.useEffect(() => {
    if (url) {
      clearTimeout(debounceTimer.current);

      debounceTimer.current = setTimeout(() => {
        setState((_state) => ({
          ..._state,
          clearResults: undefined,
          results: _state.clearResults ? [] : _state.results,
          status: LOADING,
        }));

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setState((_state) => ({
              ..._state,
              status: SUCCESS,
              results: _state.results.concat(data.messages),
              next:
                data.messages.length === limit
                  ? `https://reactistory.com:8443${data.paginate.prev}`
                  : undefined,
            }));
          })
          .catch(() => {
            setState((_state) => ({ ..._state, status: ERROR }));
          });
      }, 400);
    }
  }, [limit, url]);

  return (
    <Layout title="Jobs" largeTitle sidebar>
      {(setSidebar) => (
        <>
          <h1>
            Reactiflux <span>Jobs</span>
          </h1>
          <FocusBoundary onChange={setSidebar}>
            <Form
              allowSubmit={false}
              fields={fields}
              onChange={onChangeQuery}
            />
          </FocusBoundary>
          <div>
            {results.map((result, i) => (
              <Offer
                {...result}
                key={result.id}
                last={i === results.length - 1}
                onClickGetInTouch={toggleModal}
              />
            ))}
            <ResultsFooter>
              {status === LOADING ? (
                <p>Fetching posts...</p>
              ) : next ? (
                <Button onClick={onClickNext}>Fetch More Results</Button>
              ) : null}
              {status === ERROR ? (
                <p>
                  Something went wrong - please try again! If this problem
                  persists, please <Link to="/contact/">let us know</Link>.
                </p>
              ) : status === SUCCESS && results.length === 0 ? (
                <p>
                  We couldn't find any results for your query - try something
                  different!
                </p>
              ) : null}
            </ResultsFooter>
          </div>
          <Modal close={() => setModal(false)} isOpen={showModal}>
            <p>
              If the job post does not contain a dedicated email, link, or phone
              number, you can click either the offer date to open the original
              message in our{" "}
              <Link to="https://discord.gg/R942bNb">
                <strong>#job-board</strong> channel
              </Link>
              , or the name of the user that posted the job. You can then
              contact the person by sending them a direct message.
            </p>
            <p>
              If you don't already have one, you will need to create a (free!){" "}
              <Link to="https://discord.com/">Discord</Link> account.
            </p>
          </Modal>
        </>
      )}
    </Layout>
  );
};

export default Jobs;
