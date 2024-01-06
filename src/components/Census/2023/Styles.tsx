import type { ReactElement } from "react";
import styled from "styled-components";

import { pink } from "@utils/theme";

export const CensusItem = styled.div`
  font-size: 0.9em;
  padding: 1rem;
`;
export const CensusSubItem = styled(CensusItem)`
  padding: 0.5rem;
`;
export const Question = styled.div`
  margin-left: -1rem;
  margin-bottom: 0.5rem;
  color: ${pink};
  font-size: 0.9em;
`;

const ExpEl = styled.details`
  font-size: 0.75em;
  margin-top: 0.5rem;
`;
export const Explanation = ({
  summary,
  children,
}: {
  summary: string;
  children: ReactElement;
}) => {
  return (
    <ExpEl>
      <summary>{summary}</summary>
      {children}
    </ExpEl>
  );
};
