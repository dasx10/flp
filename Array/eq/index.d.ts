import type eqUnSort from "../eqUnSort";
import type eq from "../../Object/eq";

/**
  * @summary Check equality arrays
  * @description Check equality two arrays, if arrays are equal return true, else return false.
  * @function
  * @name eq
  * @alias eqArray
  * @alias eqs
  * @alias equal
  * @alias equals
  * @alias equalsArray
  * @param {Array} next
  * @returns {Function}
  * @example
  * ```
  * eq([])([]); // true;
  *
  * eq([1, 2, 3])([1, 2, 3]); // true;
  * eq([1, 2, 3])([1, 2, 3, 4]); // false;
  * eq([1, 2, 3, 4])([1, 2, 3]); // false;
  * eq([1, 2, 3, 4])([1, 2, 3, 4]); // true;
  * eq([1, 2, 3, 5, 4])([1, 2, 3, 4, 5]); // false;
  *
  * eq([{}])([{}]); // true;
  * eq([{a:1}])([{a:1}]); // true;
  * eq([{a:1}])([{a:2}]); // false;
  * eq([{a:1}])([{a:1}, {a:2}]); // false;
  * eq([{a:1}, {a:2}])([{a:1}, {a:2}]); // true;
  * eq([{a:1}, {a:2}])([{a:1}, {a:3}]); // false;
  * eq([{a:3}, {a:2}, {a:1}])([{a:1}, {a:2}, {a:3}]); // false;
  * ```
  *
  * @see {@link eqUnSort}
  * @see {@link eq}
  */
export default function eq<Next extends readonly any[]>(next: Next): {
  <Value>(values: readonly Exclude<Value, Next[number]>): false;
  (values: Next): boolean;
  <Values extends readonly Next[number][]>(values: Values): values is Next;
  <Values extends readonly any[]>(values: Values): values is Next;
};
