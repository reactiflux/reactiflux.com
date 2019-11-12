import React from 'react';

import { Layout } from '@components';

const Index = () => {
  return (
    <Layout
      title="Contact Us"
      description="Anonymously contact a Reactiflux administrator"
    >
      <h1>Message the staff</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
        }}
      >
        <label>
          Your message
          <input type="textbox" />
        </label>

        <button primary>Send message</button>
      </form>
    </Layout>
  );
};

export default Index;
