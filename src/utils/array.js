export const groupBy = function(key, xs) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const partition = (array, predicate) =>
  array.reduce(
    (acc, cur) => {
      acc[predicate(cur) ? 1 : 0].push(cur);
      return acc;
    },
    [[], []],
  );
