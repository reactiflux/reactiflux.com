import { background, foreground, pink } from "@utils/theme";
import React from "react";
import styled from "styled-components";

const SecretInput = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
const Shrinkable = styled.div`
  position: relative;

  ${SecretInput}:not(:checked) ~ & {
    max-height: 25rem;
    overflow: hidden;
  }
`;
const ShowMoreLabel = styled.label`
  &::before {
    content: "Show more";
    display: block;
  }
  ${SecretInput}:checked ~ ${Shrinkable} &::before {
    content: "Show less";
  }

  font-size: 1.5rem;
  text-align: center;
  color: ${foreground};
  position: absolute;
  top: 0;
  right: 0;
  height: 2rem;
  width: 10rem;
  background: ${background};
  border-bottom-left-radius: 0.5rem;
  border-left: 2px solid ${pink};
  border-bottom: 2px solid ${pink};
`;

export const ShowMore = ({ children }: { children: React.ReactChildren }) => {
  const name = React.useMemo(() => Math.random().toString(), []);
  return (
    <>
      <SecretInput id={name} />
      <Shrinkable>
        {children}
        <ShowMoreLabel htmlFor={name}></ShowMoreLabel>
      </Shrinkable>
    </>
  );
};
