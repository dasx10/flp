import type IterateCall from "../types/IterateCall";

export default function find<
  Is,
  Value,
>(call: (value: Value, index: number, values: readonly Value[]) => value is Is): (values: readonly (Value | Is)[]) => Is | void;

export default function find<Value>(call: IterateCall<any, Value>): (values: readonly Value[]) => Value | void;

export default function find<
  Value,
  Values extends readonly Value[] = readonly Value[],
>(call: IterateCall<any, Value, Values>): (values: Values) => Value | void;
