import React from "react";
import styled from "styled-components";

import { background, pink } from "@utils/theme";

const Checkmark = styled.span`
  align-items: center;
  color: ${background};
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 2rem;
`;

const Label = styled.label`
  align-items: stretch;
  color: ${pink};
  cursor: pointer;
  display: flex;
  position: relative;
  width: 100%;

  &:focus {
    border: 2px solid ${pink};
  }

  input {
    appearance: none;
    background: ${background};
    border: 2px solid ${pink};
    border-radius: 0.5rem;
    flex-shrink: 0;
    height: 2rem;
    margin-right: 0.5rem;
    outline: none;
    width: 2rem;
  }

  input:checked {
    background: ${pink};
  }

  input:hover,
  input:focus {
    box-shadow: 0 0 0 2px ${pink};
  }

  input:focus + span {
    box-shadow: 0 2px 0 0 ${pink};
  }
`;

const createChangeHandler = (props) => (e) =>
  props.onChange({
    target: {
      name: e.target.name,
      value: !props.value,
    },
  });

export const Checkbox = ({ label, ...props }) => {
  const onChange = createChangeHandler(props);
  return (
    <p>
      <Label for={props.name}>
        <Checkmark hidden={!props.value}>✔</Checkmark>
        <input
          checked={props.value}
          id={props.name}
          type="checkbox"
          {...props}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              onChange(e);
            }
          }}
          onChange={onChange}
        />
        <span>{label}</span>
      </Label>
    </p>
  );
};
