import React from "react";
import { Controller } from "react-hook-form";

import { CensusItem, Question } from "./Styles";

export const OrgSize = ({ form }) => {
  const { register } = form;

  return (
    <CensusItem>
      <Question>
        How many people work at your organization, including you?
      </Question>
      {[
        "Just me",
        "2 to 10",
        "11 to 50",
        "51 to 100",
        "101 to 1000",
        "More than 1000",
        "🚫 Not Applicable",
      ].map((r) => (
        <div key={r}>
          <label>
            <input {...register("org-size")} type="radio" value={r} /> {r}
          </label>
        </div>
      ))}
    </CensusItem>
  );
};
