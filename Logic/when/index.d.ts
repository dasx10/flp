import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

export default function when<Value>(test: Lambda<any, Value>)
   : <Return>(call: Lambda<Return, Value>)
  => (value: Value)
  => Return | Value
;
