import React from 'react';

import { Layout, Form } from '@components';
import { encode } from '@utils/encode';

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
    heaaders: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: encode({
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
          discuss with Reactiflux staff, we encourage you to send a direct
          message to a staff member in Discord. This will allow us to talk
          things through with you, and make sure you're kept updated.
        </p>
        <p>
          However, if you would prefer for your message to be anonymous, please
          fill in the form below. Depending on the situation we may not
          reference your message publicly, but we will read, discuss, and act on
          any message received through this form.
        </p>
        <hr />
        <Form fields={fields} name="contact" onSubmit={onSubmit} />
      </div>
    </Layout>
  );
};

export default Index;
