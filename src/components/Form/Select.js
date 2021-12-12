import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";

import { background, darkPink, pink } from "@utils/theme";

const SelectElement = styled.select`
  appearance: none;
  background-color: ${background};
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23dc1d64%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-position: right 1rem top 50%;
  background-repeat: no-repeat;
  background-size: 1rem auto, 100%;
  border: 2px solid ${(props) => transparentize(0.8, pink(props))};
  border-radius: 0.5em;
  color: ${darkPink};
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 2;
  margin: 0;
  max-width: 100%;
  padding: 0 1rem;
  width: 100%;

  &:hover {
    border-color: ${pink};
  }

  &:focus {
    border-color: ${pink};
    box-shadow: 0 0 0 2px ${pink};
    outline: none;
  }

  option {
    font-weight: normal;
  }
`;

export const Select = ({ label, options, ...props }) => (
  <p>
    <label>
      {label}
      <SelectElement {...props}>
        {options.map(({ label, value }) => (
          <option value={value}>{label || value}</option>
        ))}
      </SelectElement>
    </label>
  </p>
);
