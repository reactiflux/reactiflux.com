/**
 * Split an array of inputs into any number of outputs arrays.
 * @argument {Array<T>} xs An array of values to separate into smaller groups.
 * @argument {(T): bool)} inputKey If a string, an object key to get off
 * the current value to use as group name. If an object, a function that
 * returns the value to use as group name.
 * @returns {[Array<T>, Array<T>]>} Returns an tuple of each group
 */
export const partition = (predicate, xs) =>
  xs.reduce(
    (acc, cur) => {
      acc[predicate(cur) ? 1 : 0].push(cur);
      return acc;
    },
    [[], []],
  );
