import type RecordDeep from "../Types/RecordDeep";

type Path<Keys extends readonly PropertyKey[], Value> = Keys extends readonly [infer Key, ...infer Tail]
  ? Path<Tail, Value[Key]>
  : Value
;

export default function path<Keys extends readonly PropertyKey[]>(keys: Keys): <Value extends RecordDeep<Keys, any>>(value: Value) => Path<Value>;
export var then: (resolve: (resolve: (module: typeof path) => any) => any) => any;
