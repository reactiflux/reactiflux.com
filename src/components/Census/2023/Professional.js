import React from "react";
import { useForm } from "react-hook-form";

import { Button } from "@components";

import { CensusItem, Question } from "@components/Census/2023/Styles";
import { Employment } from "@components/Census/2023/Employment";

export const Professional = ({ onSubmit }) => {
  const form = useForm();
  const { handleSubmit, register, watch, formState } = form;
  const { isSubmitting } = formState;
  const discords = watch("other-discords");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Employment form={form} />

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
              <input
                {...register("other-discords")}
                type="checkbox"
                value={r}
              />{" "}
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
                <input {...register("other-discords-custom")} type="text" />
              </label>
            </>
          )}
        </div>
      </CensusItem>

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
              <input {...register("pro-experience")} type="radio" value={r} />{" "}
              {r}
            </label>
          </div>
        ))}
      </CensusItem>

      <CensusItem>
        <Question>
          How long have you been using React in your projects?
        </Question>
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

      <CensusItem>
        <Question>How often do you visit Reactiflux?</Question>
        {["Daily", "Weekly", "Monthly", "Rarely — only when I need help"].map(
          (r) => (
            <div key={r}>
              <label>
                <input
                  {...register("visit-frequency")}
                  type="radio"
                  value={r}
                />{" "}
                {r}
              </label>
            </div>
          ),
        )}
      </CensusItem>

      <Button
        disabled={isSubmitting}
        as="input"
        type="submit"
        value={isSubmitting ? "…" : "Submit, next page"}
      />
    </form>
  );
};
