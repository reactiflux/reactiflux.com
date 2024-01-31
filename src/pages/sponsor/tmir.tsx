import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { Button, Layout } from "@components";
import { Input, InputEl, Textarea } from "@components/Form/Input";
import { CensusItem } from "@components/Census/2023/Styles";
import { CheckboxLabel } from "@components/Form/Checkbox";
import { SalesRadio } from "@components/Form/SalesRadio";

import demographics from "@assets/subs-demo.png";
import countries from "@assets/subs-countries.png";
import Image from "@components/Image";
import { formatISO } from "date-fns";

const AIRTABLE_BASE = "appvFRWYvAVl3LCN8";
const AIRTABLE_TABLE = "Sponsor interest";

const generateUniqueId = () => {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  const uniqueId = timestamp + randomString;
  return uniqueId;
};

const Ul = styled.ul`
  margin: 0;
  &:last-of-type {
    margin-bottom: 1rem;
  }

  & ul:last-of-type {
    margin-bottom: 0;
  }

  ul li {
    list-style: none;
    margin: 0;
  }
`;
const Li = styled.li`
  margin: 0;
`;

const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled(Image)`
  flex: 1;
  object-fit: contain;
  height: auto;
  max-width: 50%;
`;

export const TmirSponsor = () => {
  const form = useForm({
    defaultValues: {
      id: generateUniqueId(),
      email: "",
      url: "",
      "company-size": "",
      fit: "",
      business: "",
      placements: [] as string[],
    },
  });
  const { handleSubmit, register, watch, formState } = form;
  const { isSubmitting, submitCount } = formState;

  const title = "This Month in React sponsor interest";
  return (
    <Layout
      title={title}
      description="This Month in React is a once-a-month news roundup of the React and web ecosystem, a show by Reactiflux. We have 3 sponsorship tiers available."
      sidebar={false}
      as={undefined}
    >
      <h1>{title}</h1>
      <main>
        <article>
          <p>
            Thanks for your interest in sponsoring This Month in React, how the
            professional web developers of Reactiflux stay up-to-date on the
            ever-evolving React and web ecosytem.
          </p>
          <p>
            We’re still developing an audience, and will be offering discounted
            rates until we have a larger subscribership. As of January 2024, our
            stats show 328 subscribers. Live attendance ranges from 120-250,
            with recordings typically listened to by 150-300 people. Early
            sponsorship dollars will be used to develop our subscriber base.
          </p>
          <p>
            Subscriber demographics:
            <ImgWrapper>
              <Img {...demographics} />
              <Img {...countries} />
            </ImgWrapper>
          </p>
          <p>
            We’ll reach out as inventory is available. The show follows this
            format:
          </p>
          <Ul>
            <Li>Introductions</Li>
            <Ul>
              <Li>Headliner live shoutout + 45s ad read</Li>
            </Ul>
            <Li>Quick hits</Li>
            <Ul>
              <Li>Sustainer 30s ad read</Li>
            </Ul>
            <Li>News discussion (3-6 links discussed)</Li>
            <Ul>
              <Li>Supporter 15s ad read (2x max)</Li>
            </Ul>
            <Li>Lightning round (3-6 links without discussion)</Li>
            <Ul>
              <Li>Headliner lightning link</Li>
            </Ul>
            <Li>Outro</Li>
          </Ul>
        </article>
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              await fetch("/.netlify/functions/airtable", {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify({
                  meta: { base: AIRTABLE_BASE, table: AIRTABLE_TABLE },
                  data: {
                    ...data,
                    placements: data.placements.join(","),
                  },
                }),
              });
            } catch (error) {
              console.error("Error posting data:", error);
            }
          })}
        >
          <Input
            label="Email"
            {...register("email")}
            required
            hidden={false}
            type="text"
          />

          <Input
            label="Company website"
            {...register("url")}
            required
            hidden={false}
            type="text"
          />

          <CensusItem>
            <CheckboxLabel>
              What placements are you interested in?
            </CheckboxLabel>
            <SalesRadio
              input={{
                type: "checkbox",
                ...register("placements"),
                value: "supporter",
              }}
            >
              <h4>Supporter</h4>
              <p>$150/episode before 500 subscribers.</p>
              <Ul>
                <Li>15s ad read.</Li>
              </Ul>
              <p>Discounts for 6+ episodes.</p>
            </SalesRadio>
            <SalesRadio
              input={{
                type: "checkbox",
                value: "sustainer",
                ...register("placements"),
              }}
            >
              <h4>Sustainer</h4>
              <p>$250/episode before 500 subscribers.</p>
              <Ul>
                <Li>30s ad read.</Li>
              </Ul>
              <p>Discounts for 6+ episodes.</p>
            </SalesRadio>
            <SalesRadio
              highlight
              input={{
                type: "checkbox",
                value: "headliner",
                ...register("placements"),
              }}
            >
              <h4>Headliner</h4>
              <p>$750/episode before 500 subscribers.</p>
              <Ul>
                <Li>45s ad read.</Li>
                <Li>Live shoutout during recording.</Li>
                <Li>Your name and logo on the transcript page.</Li>
              </Ul>
              <p>Discounts for 3+ episodes.</p>
            </SalesRadio>
          </CensusItem>
          <CensusItem>
            <CheckboxLabel>
              How many people work at your organization, including you?
            </CheckboxLabel>
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
                  <input {...register("company-size")} type="radio" value={r} />{" "}
                  {r}
                </label>
              </div>
            ))}
          </CensusItem>

          <Textarea
            {...register("business")}
            label="Please briefly describe your service or product"
            hidden={false}
          />
          <Textarea
            {...register("fit")}
            label="Why are you a good fit with Reactiflux?"
            hidden={false}
          />
          <Button
            disabled={isSubmitting}
            as="input"
            type="Submit"
            value={isSubmitting ? "Submitting…" : "Submit"}
          />
          {submitCount > 0 && <p>Thank you for submitting!</p>}
        </form>
      </main>
    </Layout>
  );
};

export default TmirSponsor;
