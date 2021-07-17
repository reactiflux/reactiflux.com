export const toQueryString = (query) =>
  Object.entries(query)
    .filter(([_, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
