import type IterateCall from "../types/IterateCall";
import type Lambda from "../../types/Lambda";

/**
  * @summary all elements pass the test
  * @description Returns true if all elements pass the test. Iterates from right to left (last to first).
  * @function
  * @name everyRight
  * @description Returns true if all elements pass the test.
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => boolean`
  * @example
  * ```
  * var is5 = (value) => value === 5;
  * everyRight(is5)([1, 2, 3, 4, 5]); // false;
  * everyRight(is5)([5, 5, 5, 5, 5]); // true;
  * everyRight(is5)([]); // true;
  * ```
  * @see {@link Array.prototype.every} native
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.every} ecma262
  */
export default function everyRight<Value>(call: IterateCall<any, Value>): (values: readonly Value[]) => boolean;
