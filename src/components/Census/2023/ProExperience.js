import React from "react";
import { Controller } from "react-hook-form";

import { CensusItem, Question } from "./Styles";

export const ProExperience = ({ form }) => {
  const { register } = form;

  return (
    <CensusItem>
      <Question>How much professional experience do you have?</Question>
      {[
        "None",
        "Less than one year",
        "1 to 2 years",
        "3 to 5 years",
        "6 to 10 years",
        "11 to 20 years",
        "More than 20 years",
      ].map((r) => (
        <div key={r}>
          <label>
            <input {...register("pro-experience")} type="radio" value={r} /> {r}
          </label>
        </div>
      ))}
    </CensusItem>
  );
};
