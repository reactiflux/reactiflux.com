import React from 'react';
import Helmet from 'react-helmet';
import { FrontPage, Text, Buttons, Button } from '../utils/components';

const Index = () => {
  return (
    <FrontPage>
      <Helmet
        title="Reactiflux"
        meta={[
          {
            name: 'description',
            content: 'Anonymously contact a Reactiflux administrator',
          },
        ]}
      />
      <Text>Message the staff</Text>
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
      <Buttons>
        <Button to="/schedule/" title="Q&A Schedule">
          Q&A Schedule
        </Button>
      </Buttons>
    </FrontPage>
  );
};

export default Index;
