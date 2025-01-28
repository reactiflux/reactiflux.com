import styled from "styled-components";

import { background, pink } from "@utils/theme";

export const Tag = styled.span`
  background: ${pink};
  border-radius: 0.5rem;
  color: ${background};
  display: inline-block;
  font-size: 1.4rem;
  line-height: 2;
  margin-right: 0.5rem;
  padding: 0 1rem;
  text-transform: uppercase;
`;
export const Reaction = styled(Tag)`
  background: ${background};
  color: ${pink};
  border: 2px solid ${pink};
  line-height: 1.75;
`;
