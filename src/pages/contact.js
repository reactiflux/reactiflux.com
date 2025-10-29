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
            Our in-Discord ticketing system in{" "}
            <a href="discord://discord.com/channels/102860784329052160/1041014610532249792">
              #moderation-reports
            </a>{" "}
            (
            <a href="https://discord.com/channels/102860784329052160/1041014610532249792">
              web link
            </a>
            ).
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
        <hr />
        <p>
          If you choose to reach out anonymously, bear in mind that we may not
          reference your message publicly. However, we will read, discuss, and
          act on any message received through this form. If you’d prefer to be
          contacted on another platform, please include your information as part
          of your message.
        </p>
        <p>
          This form is <em>anonymous</em> and gives{" "}
          <em>no identifying information or means to communicate back</em> to
          the staff members who receive it. Any inquiry that desires a response
          must include contact information.
        </p>
        <Form fields={fields} name="contact" onSubmit={onSubmit} />
        <p>
          Again,{" "}
          <strong>we can not answer questions submitted via this form.</strong>{" "}
          It is anonymous, intended for submission of sensitive information like
          harassment or other moderation problems.
        </p>
      </div>
    </Layout>
  );
};

export default Index;
