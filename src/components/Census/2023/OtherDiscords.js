import React from "react";
import { Controller } from "react-hook-form";

import { CensusItem, Question } from "./Styles";

export const OtherDiscords = ({ form }) => {
  const otherInputRef = React.useRef();
  const { register, watch } = form;
  const discords = watch("other-discords");

  return (
    <CensusItem>
      <Question>What other Discords do you participate in?</Question>
      {[
        "Scrimba",
        "Project Odin",
        "Frontend Horse",
        "BuilderGroop",
        "TypeScript",
        "Remix",
        "Gatsby",
        "Next.js",
        "Replay.io",
        "Tailwind CSS",
        "JWC Courses",
        "KCD",
      ].map((r) => (
        <div key={r}>
          <label>
            <input {...register("other-discords")} type="checkbox" value={r} />{" "}
            {r}
          </label>
        </div>
      ))}
      <div>
        <label>
          <input
            {...register("other-discords")}
            type="checkbox"
            value="Other"
          />{" "}
          Other (please include)
        </label>
        {discords && discords.includes("Other") && (
          <>
            {" "}
            <label>
              <input
                ref={otherInputRef}
                {...register("other-discords-custom")}
                type="text"
              />
            </label>
          </>
        )}
      </div>
    </CensusItem>
  );
};
