import type IterateCall from "../types/IterateCall";

/**
  * @description Return first executor falsy result
  * @function
  * @name any
  * @param {Function} call
  * @returns {Function}
  * @example
  * ```
  * var identity = (value) => value;
  * any(identity)([1, 2, 3, 4]); // 1;
  * any(identity)([0, 1, 2, 3]); // 1;
  * any(identity)([0, 0, 0]); // 0;
  * any(identity)([]); // undefined;
  * ```
  */
export default function any<Return, Value>(call: IterateCall<Return, Value>): (values: readonly Value[]) => Return;
