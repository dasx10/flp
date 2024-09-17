import type { Deep } from "./deep";

/**
  * @example
  * ```javascript
  * dir(['a', 'b', 'c'])({ a: { b: { c: 1 } } }); // 1
  * dir(['a', 'b', 'c'])({ a: { b: { c: 2 } }, b: { c: 1 } }); // 2
  * dir([0, 1])([[0, 1], [0, 2], [0, 3]]); // 1
  * ```
  * @description Get the value at the specified path
  * @function
  * @name dir
  * @alias path
  * @param {string|number[]} keys
  * @returns {function}
  */
export default function dir<Keys extends readonly (string|number)[]>(keys: Keys): <Value>(value: Deep<Value, Keys>) => Value;
