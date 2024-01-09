import type IterateCall from "../types/IterateCall";
import type { ArrayFillAll } from "../fillAll";

export default function map<Return, Value>(call: IterateCall<Return, Value>): {
  (values: readonly []): [];
  <Values extends readonly Value[]>(values: Values): ArrayFillAll<Values, Return>;
}

export default function map<Return, Value, Values extends readonly Value[]>(call: IterateCall<Return, Value, Values>)
  : (values: Values)
  => ArrayFillAll<Values, Return>;

