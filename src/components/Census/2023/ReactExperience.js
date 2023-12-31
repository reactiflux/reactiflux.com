import React from "react";
import { Controller } from "react-hook-form";

import { CensusItem, Question } from "./Styles";

export const ReactExperience = ({ form }) => {
  const { register } = form;

  return (
    <CensusItem>
      <Question>How long have you been using React in your projects?</Question>
      {[
        "Less than one year",
        "1 to 2 years",
        "3 to 5 years",
        "6 to 10 years",
        "More than 10 years",
      ].map((r) => (
        <div key={r}>
          <label>
            <input {...register("react-experience")} type="radio" value={r} />{" "}
            {r}
          </label>
        </div>
      ))}
    </CensusItem>
  );
};
