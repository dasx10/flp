import type ArrayValue    from "../Array/Value";
import type PartialRecord from "./PartialRecord";

type DeepPartialRecord<Keys extends readonly PropertyKey[], Value = unknown> = Keys extends readonly [infer Key, ...infer Next]
  ? PartialRecord<Key, DeepPartialRecord<Next, Value>>
  : Keys extends readonly []
    ? Value | undefined
    : PartialRecord<ArrayValue<Keys>, Value> | Value | undefined;

export default DeepPartialRecord;
