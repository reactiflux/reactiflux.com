import React from 'react';

import { Checkbox } from './Checkbox';
import { Input } from './Input';
import { Select } from './Select';

export const Form = React.forwardRef(function Form(
  { fields, onChange, ...props },
  ref,
) {
  const [fieldState, setFieldState] = React.useState(
    fields.reduce((acc, { defaultValue, name }) => {
      acc[name] = typeof defaultValue !== 'undefined' ? defaultValue : '';
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

  return (
    <form onSubmit={(event) => event.preventDefault()} {...props}>
      {fieldData.map((field) => {
        switch (field.type) {
          case 'checkbox':
            return <Checkbox key={field.name} {...field} />;

          case 'select':
            return <Select key={field.name} {...field} />;

          default:
            return <Input key={field.name} {...field} />;
        }
      })}
    </form>
  );
});

Form.Checkbox = Checkbox;
Form.Input = Input;
Form.Select = Select;
