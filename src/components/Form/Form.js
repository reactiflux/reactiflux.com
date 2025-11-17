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
    allowSubmit = true,
    error,
    fields: origFields,
    form = renderForm,
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
    origFields.reduce((acc, { defaultValue, value, name }) => {
      acc[name] =
        typeof defaultValue !== "undefined" ? defaultValue : value || "";
      return acc;
    }, {}),
  );

  const fields = origFields.map((field) => ({
    ...field,
    onChange: (e) => {
      // have to pull the value from the synthetic event here, because react throws it away
      const value = e.target.value;
      if (value !== fieldState[field.name]) {
        setFieldState((prev) => {
          const newState = {
            ...prev,
            [field.name]: value,
          };
          onChange?.(newState);
          return newState;
        });
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
    onSubmit(JSON.stringify(fieldState))
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
              <p>
                If this error keeps on happening, please either{" "}
                <a href="https://github.com/reactiflux/reactiflux.com/issues">
                  open an issue
                </a>{" "}
                or report it{" "}
                <a href="https://discord.gg/BkSU7Ju">in the server!</a>
              </p>
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
          onSubmit={onSubmitCallback}
          ref={ref}
          {...props}
        >
          {form(fields, allowSubmit)}
        </form>
      );
  }
});

const renderForm = (fieldData, allowSubmit) => (
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
