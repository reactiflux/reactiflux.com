import React from "react";

import { Layout, Link, Form } from "@components";

const ENV = {
  prod: "https://formspree.io/f/mknygboe",
  test: "https://formspree.io/f/mwkypbaz",
};

const fields = [
  {
    label: "Your Message",
    name: "message",
    placeholder: "Enter your message here…",
    type: "textarea",
  },
];

const onSubmit = (body) =>
  fetch(ENV.test, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  }).then((res) => {
    console.log({ res });
    if (res.status >= 400) {
      throw res;
    }
    return res;
  });

const Index = () => {
  return (
    <Layout
      title="Contact Us"
      description="Anonymously contact a Reactiflux administrator"
    >
      <h1>Message the Staff</h1>
      <div>
        <p>Reactiflux staff can be reached several ways.</p>
        <ul>
          <li>
            The public{" "}
            <a href="https://discord.com/channels/102860784329052160/106168778013822976">
              #reactiflux-moderation
            </a>{" "}
            channel, if you’re a current member. This method is{" "}
            <strong>PUBLIC</strong> to the rest of the server.
          </li>
          <li>
            Our in-Discord ticketing system in{" "}
            <a href="https://discord.com/channels/102860784329052160/1041014610532249792">
              #moderation-reports
            </a>
            .
          </li>
          <li>
            direct message any staff member in Discord. The staff member will
            share the correspondence or a summary with other staff for issues
            requiring wider input.
          </li>
          <li>
            Email <a href="mailto:hello@reactiflux.com">hello@reactiflux.com</a>{" "}
            (if you’d like to propose a collaboration, business dealing, or be a
            guest for a live event, do this one).
          </li>
          <li>
            Our anonymous contact form below. All admins and moderators will
            receive this, with no identifying information provided.
          </li>
        </ul>
        <p>
          If you choose to reach out anonymously, bear in mind that we may not
          reference your message publicly. However, we will read, discuss, and
          act on any message received through this form. If you’d prefer to be
          contacted on another platform, please include your information as part
          of your message.
        </p>
        <hr />
        <p>If you submit a technical question, you will not get a response.</p>
        <Form fields={fields} name="contact" onSubmit={onSubmit} />
        <p>
          Please note:{" "}
          <strong>
            we can not answer technical questions submitted via this form.
          </strong>{" "}
          It is anonymous, intended for submission of sensitive information like
          harassment or other moderation problems.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
