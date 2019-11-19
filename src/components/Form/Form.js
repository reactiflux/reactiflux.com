import React from 'react';

import { Button } from '@components';

import { Input, Textarea } from './Input';

const NONE = 'NONE';
const SUBMITTING = 'SUBMITTING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

export const Form = ({
  error,
  fields,
  form,
  onSubmit,
  submitting,
  success,
  ...props
}) => {
  const [status, setStatus] = React.useState(NONE);
  const [fieldState, setFieldState] = React.useState([]);

  const fieldData = fields.map((field, index) => ({
    ...field,
    onChange: (e) => {
      // have to pull the value from the synthetic event here, because react throws it away
      const value = e.target.value;
      setFieldState((prev) => Object.assign([], prev, { [index]: value }));
    },
    value: fieldState[index] || field.defaultValue || '',
  }));

  const onSubmitCallback = () => {
    setStatus(SUBMITTING);
    onSubmit(fieldData.map((field) => [field.name, field.value]))
      .then(() => setStatus(SUCCESS))
      .catch(() => setStatus(ERROR));
  };

  switch (status) {
    case SUBMITTING:
      return submitting || <p>Submitting...</p>;

    case SUCCESS:
      return success || <p>Success!</p>;

    case ERROR:
      return (
        <>
          {error || (
            <>
              <h3>Something went wrong</h3>
              <p>If this error keeps on happening, please let me know!</p>
            </>
          )}
          <p>
            <Button onClick={() => setStatus(NONE)}>
              Click here to try again
            </Button>
          </p>
        </>
      );

    default:
      return (
        <form
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmitCallback}
          {...props}
        >
          <Input
            hidden
            label="If you're not a robot, leave this field blank!"
            name="bot-field"
          />
          {form(fieldData, onSubmitCallback)}
        </form>
      );
  }
};

const renderForm = (fieldData, onSubmit) => (
  <>
    {fieldData.map((field) =>
      field.type === 'textarea' ? (
        <Textarea key={field.name} {...field} />
      ) : (
        <Input key={field.name} {...field} />
      ),
    )}
    <p>
      <Button onClick={onSubmit}>Submit</Button>
    </p>
  </>
);

Form.defaultProps = {
  form: renderForm,
};

Form.Input = Input;
Form.Textarea = Textarea;
