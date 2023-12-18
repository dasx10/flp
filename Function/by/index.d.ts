import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function by<Return, Value>(exec: (value: Value) => Return)
  : <ReturnCall>(call: (next: Return) => (value: Return) => ReturnCall)
 => (next: Return)
 => (value: Value)
 => Return
;
