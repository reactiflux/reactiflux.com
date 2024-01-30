import { pink, foreground } from "@utils/theme";
import styled, { css } from "styled-components";

export const RadioGroup = styled.div``;
const RadioGroupItem = styled.input`
  margin-right: 1rem;
`;
const Label = styled.label`
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

export const SalesRadio = ({ children, highlight = false, ...props }) => {
  return (
    <Label highlight={highlight}>
      <RadioGroupItem {...props} />
      <Body>{children}</Body>
    </Label>
  );
};
