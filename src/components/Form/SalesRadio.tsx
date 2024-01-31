import React from "react";
import styled, { css } from "styled-components";
import { pink, foreground } from "@utils/theme";

export const RadioGroup = styled.div``;
const RadioGroupItem = styled.input`
  margin-right: 1rem;
`;

const Label = styled.label<{ highlight: boolean }>`
  border: ${({ highlight }) =>
    highlight ? css`2px solid ${pink}` : css`1px solid ${foreground}`};
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  border-radius: 1rem;

  p:last-of-type {
    margin-bottom: 0.5rem;
  }
`;

const Body = styled.div``;

export const SalesRadio = React.forwardRef<
  unknown,
  { children: any; highlight?: boolean; input: any }
>(function SalesRadio({ children, highlight = false, input }, ref) {
  return (
    <Label highlight={highlight}>
      <RadioGroupItem ref={ref} {...input} />
      <Body>{children}</Body>
    </Label>
  );
});
