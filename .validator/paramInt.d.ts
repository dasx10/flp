import Int from "../types/Number/Int";

type ParamInt<Call extends (value: number) => any> = Call extends (value: infer Value) => infer Return
  ? Value extends number
    ? Call
    : <Value extends number>(value: Int<Value>) => Return
  : <Value extends number>(value: Int<Value>) => unknown
;

export default function paramInt<Call extends (value: number) => any>(call: Call): Call;
