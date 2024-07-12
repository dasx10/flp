import type ArrayFillAll from "../Types/ArrayFillAll";

export default function map<Return, Value>(call: (value: Value) => Return): {
  <Values extends readonly Value[]>(values: Values): ArrayFillAll<Values, Return>;
  (values: readonly [])      : readonly [];
  (values: readonly Value[]) : readonly Return[] | readonly [];
};

export default function map<Return>(call: () => Return): {
  <Values extends readonly any[]>(values: Values): ArrayFillAll<Values, Return>;
  (values: readonly [])    : readonly [];
  (values: readonly any[]) : readonly Return[] | readonly [];
};
