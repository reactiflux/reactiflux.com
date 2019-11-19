export const encode = (data) =>
  Object.entries(data)
    .map(([key, value]) => {
      if (!isPrimitive(value)) {
        throw new Error('can only encode primitive values');
      }
      return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    })
    .join('&');

const isPrimitive = (value) => value !== Object(value);
