import type eq from "../eq";

/**
  * @summary Check equality arrays
  * @description Check equality two arrays, if arrays are equal return true, else return false. This function ignore order.
  * @function
  * @name eqUnSort
  * @alias equalIgnoreOrder
  * @param {Array} next
  * @returns {Function}
  * @example
  * ```
  * eqUnSort([])([]); // true;
  *
  * eqUnSort([1, 2, 3])([1, 2, 3]); // true;
  * eqUnSort([1, 2, 3])([1, 2, 3, 4]); // false;
  * eqUnSort([1, 2, 3, 4])([1, 2, 3]); // false;
  * eqUnSort([1, 2, 3, 4])([1, 2, 3, 4]); // true;
  * eqUnSort([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]); // true;
  *
  * eqUnSort([{}])([{}]); // true;
  * eqUnSort([{a:1}])([{a:1}]); // true;
  * eqUnSort([{a:1}])([{a:2}]); // false;
  * eqUnSort([{a:1}])([{a:1}, {a:2}]); // false;
  * eqUnSort([{a:1}, {a:2}])([{a:1}, {a:2}]); // true;
  * eqUnSort([{a:1}, {a:2}])([{a:1}, {a:3}]); // false;
  * eqUnSort([{a:3}, {a:2}, {a:1}])([{a:1}, {a:2}, {a:3}]); // false;
  * ```
  *
  * @see {@link eq}
  */
export default function eqUnSort<Next extends readonly any[]>(next: Next): {
  <Value>(values: readonly Exclude<Value, Next[number]>): false;
  (values: Next): boolean;
};
