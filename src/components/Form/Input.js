import React from 'react';
import styled from 'styled-components';

import { blue, darkPink, pink } from '@utils/theme';

const P = styled.p`
  label {
    color: ${blue};
    font-weight: bold;
  }

  input,
  textarea {
    background: transparent;
    border: none;
    border-bottom: 2px solid ${pink};
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
      border-color: ${darkPink};
      color: ${darkPink};
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
