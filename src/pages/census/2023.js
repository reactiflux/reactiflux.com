import React from "react";
import styled from "styled-components";

import { Layout } from "@components";
import { TextareaInner } from "@components/Form/Input";

import { Professional } from "../../components/Census/2023/Professional";
import { Demographics } from "../../components/Census/2023/Demographics";

const TextareaEl = styled(TextareaInner)`
  font-size: 0.8em;
`;

const AIRTABLE_BASE = "apppkyY9esBtJgdM7";
const AIRTABLE_TABLE = "2023";

const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  const uniqueId = timestamp + randomString;
  return uniqueId;
};

export const Census2023 = () => {
  const id = React.useMemo(() => generateUniqueId(), []);
  const [submissionStep, setSubmissionStep] = React.useState(0);
  const next = () => setSubmissionStep((i) => i + 1);
  React.useEffect(() => {
    setSubmissionStep(Number(localStorage.getItem("2023-census-key")));
  }, []);
  React.useEffect(() => {
    localStorage.setItem("2023-census-key", submissionStep.toString());
  }, [submissionStep]);

  const onSubmit = async (data) => {
    // Snag all possible inputs, filter out false-y values, put it together.
    // This is a cheap way to make updates easier, we can just post everything we
    // get both times and trust that nothing will get overwritten.
    const finalData = Object.fromEntries(
      Object.entries({
        id,
        employment: data["employment"],
        "org-size": data["org-size"],
        "other-discords": data["other-discords"]?.join(","),
        "pro-experience": data["pro-experience"],
        "react-experience": data["react-experience"],
        "visit-frequency": data["visit-frequency"],
        "other-discords-custom": data["other-discords-custom"],
        age: data["age"],
        disability: data["disability"],
        "free-response": data["free-response"],
        gender: data["gender"],
        marginalized: data["marginalized"],
        "marginalized-free-response": data["marginalized-free-response"],
        region: data["region"],
        religion: data["religion"],
        represented: data["represented"],
        "sexual-orientation": data["sexual-orientation"],
        subregion: data["subregion"],
        trans: data["trans"],
      }).filter((pair) => pair[1]),
    );

    try {
      await fetch("/.netlify/functions/airtable", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          meta: { base: AIRTABLE_BASE, table: AIRTABLE_TABLE },
          data: finalData,
        }),
      });
      next();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

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
              return <Professional submissionId={id} onSubmit={onSubmit} />;
            case 1:
              return <Demographics submissionId={id} onSubmit={onSubmit} />;
            default:
              return "Thank you!";
          }
        })()}
      </main>
    </Layout>
  );
};

export default Census2023;
