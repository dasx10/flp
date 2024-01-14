import type ArrayValue from "../Array/Value";

type DeepRecord<Keys extends readonly PropertyKey[], Value> = Keys extends readonly [infer Key, ...infer Next]
  ? Record<Key, DeepRecord<Next, Value>>
  : Keys extends readonly []
    ? Value
    : Record<ArrayValue<Keys>, Value> | Value;

export default DeepRecord;
