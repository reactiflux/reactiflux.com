import React from "react";
import styled from "styled-components";

import { blue, pink } from "@utils/theme";

export const InputEl = styled.input`
  background: transparent;
  border: none;
  box-shadow: inset 0 -2px 0 0 ${pink};
  color: ${pink};
  font-size: inherit;
  outline: none;
  padding: 1rem 0;
  resize: vertical;
  width: 100%;

  ::placeholder {
    color: ${pink};
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 -4px 0 0 ${pink};
  }
`;
export const TextareaEl = styled(InputEl).attrs({ as: "textarea" })``;

export const LabelEl = styled.label`
  color: ${blue};
  font-weight: bold;
`;

export const Input = React.forwardRef<
  HTMLInputElement,
  React.HTMLProps<HTMLInputElement> & { label: string }
>(function Input({ hidden, label, ...props }, ref) {
  return (
    <p hidden={hidden}>
      <label>
        {label}
        {/* @ts-ignore */}
        <InputEl ref={ref} {...props} />
      </label>
    </p>
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.HTMLProps<HTMLTextAreaElement> & { label: string }
>(function Textarea({ hidden, label, ...props }, ref) {
  return (
    <p hidden={hidden}>
      <label>
        {label}
        {/* @ts-ignore */}
        <TextareaEl ref={ref} {...props} />
      </label>
    </p>
  );
});

export const TextareaInner = styled.textarea`
  background: transparent;
  border: none;
  box-shadow: inset 0 -2px 0 0 ${pink};
  color: ${pink};
  font-size: inherit;
  outline: none;
  padding: 1rem 0;
  resize: vertical;
  width: 100%;

  ::placeholder {
    color: ${pink};
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    box-shadow: inset 0 -4px 0 0 ${pink};
  }
`;
