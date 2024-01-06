import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

import { CensusItem, CensusSubItem, Question } from "./Styles";

const getExperience = (a) => {
  switch (a) {
    case "Hobbyist":
      return [];
    case "Pre-career":
      return [
        "Self-taught",
        "Bootcamp",
        "Undergraduate Degree",
        "Graduate Degree",
      ];
    case "Career":
      return [
        "Full-time",
        "Part-time",
        "Freelance/consulting",
        "Entrepreneur",
        "Unemployed",
      ];
  }
};

export const Employment = ({ form }) => {
  const { register, watch, setValue } = form;
  const status = watch("employment");
  // Reset the dependent `subregion` input whenever `region` changes
  React.useEffect(() => {
    setValue("employment-type", undefined);
  }, [status, setValue]);

  const statusType = watch("employment-type");
  React.useEffect(() => {
    setValue("unemployed-time", undefined);
  }, [statusType, setValue]);

  return (
    <CensusItem>
      <Question>What is your current educational/employment status?</Question>
      {["Hobbyist", "Pre-career", "Career"].map((r) => (
        <>
          <div key={r}>
            <label>
              <input {...register("employment")} type="radio" value={r} /> {r}
            </label>
          </div>

          {status === r && (
            <CensusSubItem>
              {getExperience(status).map((s) => (
                <>
                  <div key={s}>
                    <label>
                      <input
                        {...register("employment-type")}
                        type="radio"
                        value={s}
                      />{" "}
                      {s}
                    </label>
                  </div>
                </>
              ))}

              {statusType === "Unemployed" && (
                <CensusSubItem>
                  {[
                    "1 month",
                    "1-3 months",
                    "3-6 months",
                    "6-12 months",
                    "> 12 months",
                  ].map((r) => (
                    <div key={r}>
                      <label>
                        <input
                          {...register("unemployed-time")}
                          type="radio"
                          value={r}
                        />{" "}
                        {r}
                      </label>
                    </div>
                  ))}
                </CensusSubItem>
              )}
            </CensusSubItem>
          )}
        </>
      ))}
    </CensusItem>
  );
};
