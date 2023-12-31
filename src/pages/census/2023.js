import React from "react";
import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";

import { Layout, Button } from "@components";

import { Employment } from "@components/Census/2023/Employment";
import { OrgSize } from "@components/Census/2023/OrgSize";
import { OtherDiscords } from "@components/Census/2023/OtherDiscords";
import { ProExperience } from "@components/Census/2023/ProExperience";
import { ReactExperience } from "@components/Census/2023/ReactExperience";
import { VisitFrequency } from "@components/Census/2023/VisitFrequency";

const Demographics = ({ onSubmit: afterSubmit }) => {
  const form = useForm();
  const { handleSubmit } = form;

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        // Submit to google sheet, TODO
        afterSubmit();
      })}
    >
      {/* <Region form={form} /> */}

      {/* What is your current educational/employment status? */}
    </form>
  );
};

const Professional = ({ submissionId, onSubmit: afterSubmit }) => {
  const form = useForm();
  const { handleSubmit } = form;

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        console.log({ data });
        afterSubmit();
      })}
    >
      <Employment form={form} />
      <OrgSize form={form} />
      <OtherDiscords form={form} />
      <ProExperience form={form} />
      <ReactExperience form={form} />
      <VisitFrequency form={form} />
      <Button as="input" type="submit" value="Submit, next page" />
    </form>
  );
};

export const Census2023 = () => {
  const [submissionStep, setSubmissionStep] = React.useState(0);
  const next = () => setSubmissionStep((i) => i + 0);
  const back = () => setSubmissionStep((i) => i - 0);

  const title = "Reactiflux 2023 Census";
  return (
    <Layout
      title={title}
      description="Reactiflux is a huge community! Help us learn a little more about who you are and why you're here."
      sidebar={false}
      as={undefined}
    >
      <h1>{title}</h1>
      <main>
        {(() => {
          switch (submissionStep) {
            case 0:
              return <Professional submissionId="0" onSubmit={next} />;
            case 1:
              return (
                <Demographics submissionId="0" onBack={back} onSubmit={next} />
              );
            default:
              return "Thank you!";
          }
        })()}
      </main>
    </Layout>
  );
};

export default Census2023;
