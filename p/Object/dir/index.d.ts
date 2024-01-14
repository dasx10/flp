import type DeepPartialRecord from "../../../types/Object/DeepPartialRecord";
import type RecordDir         from "../../../types/Object/Dir";

export default function dir<
  Value,
  Keys extends readonly PropertyKey[],
>(value: Value | DeepPartialRecord<Keys, any>, keys : Keys | PropertyKeys<Value>): RecordDir<Value, Keys>;
