import React from 'react';

import { Layout, Link, Form } from '@components';

const fields = [
  {
    label: 'Your Message',
    name: 'message',
    placeholder: 'Enter your message here...',
    type: 'textarea',
  },
];

const onSubmit = (fieldState) =>
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'form-name': 'newsletter',
      ...Object.fromEntries(fieldState),
    }),
  });

const Index = () => {
  return (
    <Layout
      title="Contact Us"
      description="Anonymously contact a Reactiflux administrator"
    >
      <h1>Message the staff</h1>
      <div>
        <p>
          When you have any questions or concerns which you would like to
          discuss with Reactiflux staff, you can reach out via:
        </p>
        <ul>
          <li>direct message to any staff member in Discord</li>
          <li>
            mention or message{' '}
            <Link to="https://twitter.com/reactiflux">@reactiflux</Link> on
            Twitter
          </li>
          <li>our anonymous contact form below</li>
        </ul>
        <p>
          If you message us directly, we can talk things through with you and
          make sure you're kept updated.
        </p>
        <p>
          If you choose to reach out anonymously, bear in mind that we may not
          reference your message publicly. However, we will read, discuss, and
          act on any message received through this form. If you'd prefer to be
          contacted on another platform, please include your information as part
          of your message.
        </p>
        <hr />
        <Form fields={fields} name="contact" onSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default Index;
