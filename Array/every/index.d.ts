import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

import type everyRight from "./right";

/**
  * @summary all elements pass the test
  * @description Returns true if all elements pass the test.
  * @function
  * @name every
  * @description Returns true if all elements pass the test.
  * @param {Function} call - Function to call for each element of the array.
  * @returns {Function} - `(Array<any>) => boolean`
  * @example
  * ```
  * var is5 = (value) => (value === 5);
  * var every5 = every(sub5);
  * every5([1, 2, 3, 4, 5]) // false
  * every5([1, 2, 3, 4, 6]) // false
  * every5([]) // true
  * every5([5]) // true
  * every5([5, 5, 5, 5, 5]) // true
  * ```
  * @see {@link Array.prototype.every} native
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.every} ecma262
  * @see {@link everyRight} similar
  */
export default function every<Value>(call: IterateCall<any, Value>): (values: readonly Value[]) => boolean;
