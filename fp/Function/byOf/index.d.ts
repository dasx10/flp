import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function byOf
    <Return, Value>(call: (next: Value) => (value: Value) => Return)
  : <ExecValue>(exec: (value: ExecValue) => Value)
 => (next : ExecValue)
 => (value: ExecValue)
 => Return;
