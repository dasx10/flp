import type IterateCall from "../types/IterateCall";

export default function findMax<Value>(call: IterateCall<any, Value>): <Values extends readonly Value[]>(values: Values) => Values extends readonly [...infer Next]
  ? Next[number]
  : Values extends readonly []
    ? undefined
    : Values[number] | undefined;
