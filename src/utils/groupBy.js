/**
 * groupBy takes an object key name or predicate function, and an array of data,
 * and creates an object of arrays with keyed by that name or predicate result.
 * @argument {string|function} inputKey If a string, an object key to get off
 * the current value to use as group name. If an object, a function that
 * returns the value to use as group name.
 * @argument {Array<any>} xs An array of arbitrary things to group.
 * @returns {object} An object with subsets of xs with the group names as keys.
 */
export const groupBy = (inputKey, xs) => {
  return xs.reduce((acc, x, ...rest) => {
    const key =
      typeof inputKey === "function" ? inputKey(x, ...rest) : x[inputKey];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(x);
    return acc;
  }, {});
};
