import React from "react";

import { Button } from "@components";

import { Checkbox } from "./Checkbox";
import { Input, Textarea } from "./Input";
import { Select } from "./Select";

const NONE = "NONE";
const SUBMITTING = "SUBMITTING";
const SUCCESS = "SUCCESS";
const ERROR = "ERROR";

export const Form = React.forwardRef(function Form(
  {
    allowSubmit,
    error,
    fields,
    form,
    name,
    onChange,
    onSubmit,
    submitting,
    success,
    ...props
  },
  ref,
) {
  const [status, setStatus] = React.useState(NONE);
  const [fieldState, setFieldState] = React.useState(
    fields.reduce((acc, { defaultValue, name }) => {
      acc[name] = typeof defaultValue !== "undefined" ? defaultValue : "";
      return acc;
    }, {}),
  );

  const fieldData = fields.map((field) => ({
    ...field,
    onChange: (e) => {
      // have to pull the value from the synthetic event here, because react throws it away
      const value = e.target.value;
      if (value !== fieldState[field.name]) {
        setFieldState((prev) => ({
          ...prev,
          [field.name]: value,
        }));
      }
    },
    value: fieldState[field.name],
  }));

  React.useEffect(() => {
    if (onChange) {
      onChange(fieldState);
    }
  }, [fieldState, onChange]);

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
          name={name}
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmitCallback}
          ref={ref}
          {...props}
        >
          <Input type="hidden" name="form-name" value={name} />
          <Input
            hidden
            label="If you're not a robot, leave this field blank!"
            name="bot-field"
          />
          {form(fieldData, onSubmitCallback, allowSubmit)}
        </form>
      );
  }
});

const renderForm = (fieldData, onSubmit, allowSubmit) => (
  <>
    {fieldData.map((field) => {
      switch (field.type) {
        case "checkbox":
          return <Checkbox key={field.name} {...field} />;

        case "select":
          return <Select key={field.name} {...field} />;

        case "textarea":
          return <Textarea key={field.name} {...field} />;

        default:
          return <Input key={field.name} {...field} />;
      }
    })}
    {allowSubmit ? (
      <p>
        <Button>Submit</Button>
      </p>
    ) : null}
  </>
);

Form.defaultProps = {
  allowSubmit: true,
  form: renderForm,
};

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Select = Select;
Form.Textarea = Textarea;
