import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { Button } from "@components";
import { TextareaInner } from "@components/Form/Input";

import {
  CensusItem,
  Explanation,
  Question,
} from "@components/Census/2023/Styles";
import { Region } from "@components/Census/2023/Region";

const TextareaEl = styled(TextareaInner)`
  font-size: 0.8em;
`;

export const Demographics = ({ onSubmit }) => {
  const form = useForm();
  const { handleSubmit, register, watch, formState } = form;
  const { isSubmitting } = formState;
  const religion = watch("religion");
  const gender = watch("gender");
  const orientation = watch("sexual-orientation");

  const inclusionExplanation = (
    <Explanation summary="(why we ask)">
      <p>
        This is a survey of the members of our community, and we don’t make
        assumptions about who is here. We ask questions like this so that we can
        have a clearer sense of whether we’re achieving our goals.
      </p>
      <p>
        Reactiflux is an inclusive community that strives to be welcoming to
        all, regardless of level of experience, gender identity and expression,
        sexual orientation, disability, neurodivergence, personal appearance,
        body, race, ethnicity, age, religion, nationality, or other similar
        characteristic.
      </p>
    </Explanation>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CensusItem>
        <Question>Do you feel well represented within Reactiflux?</Question>
        {["Yes", "Somewhat", "No"].map((r) => (
          <div key={r}>
            <label>
              <input {...register("represented")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
      </CensusItem>

      <CensusItem>
        <Question>
          Have you felt marginalized or harassed by another member of
          Reactiflux?
        </Question>
        {["Yes", "Somewhat", "No"].map((r) => (
          <div key={r}>
            <label>
              <input {...register("marginalized")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
        <label>
          <TextareaEl
            {...register("marginalized-free-response")}
            type="text"
            placeholder="(free response)"
          />
        </label>
      </CensusItem>

      <CensusItem>
        <Question>How old are you?</Question>
        {["Under 18", "18–22", "23–27", "28–34", "35–44", "45–59", "60+"].map(
          (r) => (
            <div key={r}>
              <label>
                <input {...register("age")} type="radio" value={r} /> {r}
              </label>
            </div>
          ),
        )}
      </CensusItem>

      <Region form={form} />

      <CensusItem>
        <Question>Do you identify as a member of a religious group?</Question>
        {[
          "Agnostic",
          "Buddhism",
          "Catholocism",
          "Christianity",
          "Hinduism",
          "Islam",
          "Judaism",
          "Protestantism",
          "Sikhism",
          "No religion",
        ].map((r) => (
          <div key={r}>
            <label>
              <input {...register("religion")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input {...register("religion")} type="radio" value="Other" /> Other
            (please include)
          </label>
          {religion && religion.includes("Other") && (
            <>
              {" "}
              <label>
                <input {...register("other-religion")} type="text" />
              </label>
            </>
          )}
        </div>
        {inclusionExplanation}
        <Explanation summary="(how did we decide what to include?)">
          We reviewed several national census surveys and publicly available
          global demographic datasets, including any religions that were
          included by several sources and represent a portion of the global
          population greater than 0.2%. The religions are presented in
          alphabetical order.
        </Explanation>
      </CensusItem>

      <CensusItem>
        <Question>What is your gender identity?</Question>
        {[
          "Male",
          "Female",
          "Non-binary or genderfluid",
          "Agender",
          "Prefer not to say",
        ].map((r) => (
          <div key={r}>
            <label>
              <input {...register("gender")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input {...register("gender")} type="radio" value="Other" /> Other
            (please include)
          </label>
          {gender && gender.includes("Other") && (
            <>
              {" "}
              <label>
                <input {...register("other-gender")} type="text" />
              </label>
            </>
          )}
        </div>
        {inclusionExplanation}
      </CensusItem>

      <CensusItem>
        <Question>Do you identify as transgender?</Question>
        {["Yes", "No", "Prefer not to say"].map((r) => (
          <div key={r}>
            <label>
              <input {...register("trans")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
        {inclusionExplanation}
      </CensusItem>

      <CensusItem>
        <Question>Are you a person living with a disability?</Question>
        {["Yes", "No", "Prefer not to say"].map((r) => (
          <div key={r}>
            <label>
              <input {...register("disability")} type="radio" value={r} /> {r}
            </label>
          </div>
        ))}
        {inclusionExplanation}
      </CensusItem>

      <CensusItem>
        <Question>What is your sexual orientation?</Question>
        {[
          "Asexual",
          "Bisexual",
          "Heterosexual",
          "Homosexual",
          "Pansexual",
          "Queer",
          "Prefer not to say",
        ].map((r) => (
          <div key={r}>
            <label>
              <input
                {...register("sexual-orientation")}
                type="radio"
                value={r}
              />{" "}
              {r}
            </label>
          </div>
        ))}
        <div>
          <label>
            <input
              {...register("sexual-orientation")}
              type="radio"
              value="Other"
            />{" "}
            Other (please include)
          </label>
          {orientation && orientation.includes("Other") && (
            <>
              {" "}
              <label>
                <input {...register("other-sexual-orientation")} type="text" />
              </label>
            </>
          )}
        </div>
        {inclusionExplanation}
      </CensusItem>

      <CensusItem>
        <Question>
          Anything else you’d like to share with the Reactiflux staff?
        </Question>
        <label>
          <TextareaEl
            {...register("free-response")}
            placeholder="(free response)"
          />
        </label>
      </CensusItem>

      <Button disabled={isSubmitting} as="input" type="submit" value="Submit" />
    </form>
  );
};
