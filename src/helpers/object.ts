export const pick = <T extends Record<string, any>, K extends keyof T>(
  keys: K[],
  data: T,
) => {
  const out = {} as any;
  for (let key of keys) {
    out[key] = typeof data[key] === "undefined" ? null : data[key];
  }
  return out as Pick<T, K>;
};
