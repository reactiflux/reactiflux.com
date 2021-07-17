import React from "react";
import styled from "styled-components";

import { blue, pink } from "@utils/theme";

const P = styled.p`
  label {
    color: ${blue};
    font-weight: bold;
  }

  input,
  textarea {
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
  }
`;

export const Input = ({ hidden, label, ...props }) => (
  <P hidden={hidden}>
    <label>
      {label}
      <input {...props} />
    </label>
  </P>
);

export const Textarea = ({ hidden, label, ...props }) => (
  <P hidden={hidden}>
    <label>
      {label}
      <textarea {...props} />
    </label>
  </P>
);
