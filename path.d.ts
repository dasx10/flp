import type { Deep } from "./deep";

type PathMaybe<Keys extends PropertyKey, Value> = Value extends Record<Key & PropertyKey, infer Next>
  ? Next | PathMaybe<Keys, Next>
  : Value | undefined
;

export type Path<Keys extends readonly PropertyKey[], Value> = Keys extends readonly [infer Key, ...infer Tail]
  ? Path<Tail, Value[Key]>
  : Keys extends readonly []
    ? Value
    : Keys extends readonly (infer Key)[]
      ? PathMaybe<Key, Value>
      : never
;

export default function path<Keys extends readonly PropertyKey[]>(keys: Keys): <Value>(value: Deep<Value, Keys>) => Value;
export var then: (resolve: (resolve: (module: typeof path) => any) => any) => any;
