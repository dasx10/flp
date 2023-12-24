import type Conveyor from "../../types/Conveyor";
import type Lambda    from "../../types/Lambda";

/**
  * @param {Function} every
  * @returns {Function} Result executor
  * @name everyAdapterAll
  * @function
  * @example
  * ```
  * var all = ((call) => (values) => values.every(call));
  * var sub5    = (value) => (value - 5);
  * var allSub5 = all(sub5);
  * allSub5([]) // null
  * allSub5([1, 2, 3, 4, 5]) // 0
  * allSub5([1, 2, 3, 4, 5, 6, 7, 8]) // 0
  * allSub5([1, 2, 3, 4, 6]) // 1
  * allSub5([1, 2, 3, 4]) // -1
  * ```
  */
export default function everyAdapterAll<Value>(every: Conveyor<any, Value, readonly Value[]>)
   : <Return>(call: Lambda<Return, Value>)
  => (values: readonly Value[]) => Return | null;
