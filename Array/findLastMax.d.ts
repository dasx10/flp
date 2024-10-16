import type ArrayValue from "../Types/ArrayValue";

export default function findLastMax<Value>(call: (value: Value) => number): {
  (values: readonly []): undefined;
  <Values extends readonly Value[]>(values: Values): ArrayValue<Values>;
}

export const then: (resolve: (module: typeof findLastMax) => any) => any;
