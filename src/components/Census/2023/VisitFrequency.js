import React from "react";
import { Controller } from "react-hook-form";

import { CensusItem, Question } from "./Styles";

export const VisitFrequency = ({ form }) => {
  const { register } = form;

  return (
    <CensusItem>
      <Question>How often do you visit Reactiflux?</Question>
      {["Daily", "Weekly", "Monthly", "Rarely — only when I need help"].map(
        (r) => (
          <div key={r}>
            <label>
              <input {...register("visit-frequency")} type="radio" value={r} />{" "}
              {r}
            </label>
          </div>
        ),
      )}
    </CensusItem>
  );
};
