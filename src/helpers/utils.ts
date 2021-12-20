export const pick = <T extends Record<string, any>, K extends keyof T>(
  keys: K[],
  data: T,
) => {
  const out = {} as Pick<T, K>;
  for (let key of keys) {
    out[key] = data[key];
  }
  return out;
};
