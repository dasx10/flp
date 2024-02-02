import type IterateCall from "../../Array/types/IterateCall";
import type ArrayFillAll from "../../types/Array/FillAll";

/**
  * @function
  * @name reducePrototypeToMap
  * @param {Function} call Executor
  */
export default function (reduce: (call: <Return, Value>(create: Return, value: Value, index: number, values: readonly Value[]) => Return, value: Return) => Return)
  : <Return, Value>(call: IterateCall<Return, Value>)
  => <Values extends readonly any[]>(values: Values)
  => ArrayFillAll<Values, Return>;
