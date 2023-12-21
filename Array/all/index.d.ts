import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

/**
  * @summary Return first executor falsy result
  * @description Check if all values are true and return first result executor is executor result is falsy or return last executor result.
  * But if all values are falsy then return null.
  * @param {Function} call Executor
  * @param {Array} values Array
  * @returns {ReturnType<call>} Result executor
  * @name all
  * @function
  * @example
  *
  * ```
  * var sub5    = (value) => (value - 5);
  * var allSub5 = all(sub5);
  * allSub5([]) // null
  * allSub5([1, 2, 3, 4, 5]) // 0
  * allSub5([1, 2, 3, 4, 5, 6, 7, 8]) // 0
  * allSub5([1, 2, 3, 4, 6]) // 1
  * allSub5([1, 2, 3, 4]) // -1
  * ```
  */
export default function all <Return, Value>(call: IterateCall<Return, Value>): {
  (values: readonly []): null;
  (values: readonly [Value, ...Value[]]): Return;
  (values: readonly Value[]): Return | null;
}
