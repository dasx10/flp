import type Conveyor from "../../types/Conveyor";
import type Lambda    from "../../types/Lambda";

/**
  * @function
  * @name eachToResult
  * @param {Function} each
  * @returns {Function} Result executor
  * @name everyAdapterAll
  * @example
  * ```
  * var every   = (call) => (values) => values.every(call);
  * var all     = (every);
  * var sub5    = (value) => (value - 5);
  * var allSub5 = all(sub5);
  * allSub5([]) // undefined
  * allSub5([1, 2, 3, 4, 5]) // 0
  * allSub5([1, 2, 3, 4, 5, 6, 7, 8]) // 0
  * allSub5([1, 2, 3, 4, 6]) // 1
  * allSub5([1, 2, 3, 4]) // -1
  *
  * var some = (call) => (values) => values.some(call);
  * var any  = (some);
  * var sub5 = (value) => (value - 5);
  * var anySub5 = any(sub5);
  * anySub5([]) // undefined
  * anySub5([1, 2, 3, 4, 5]) // -4
  * anySub5([5, 6]) // 1
  * ```
  */
export default function <Value, Values>(each: Conveyor<any, Value, Values>)
   : <Return>(call: Lambda<Return, Value>) => (values: Values) => Return | undefined;
