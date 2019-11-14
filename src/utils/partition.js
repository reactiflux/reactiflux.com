export const partition = (array, predicate) =>
  array.reduce(
    (acc, cur) => {
      acc[predicate(cur) ? 1 : 0].push(cur);
      return acc;
    },
    [[], []],
  );
