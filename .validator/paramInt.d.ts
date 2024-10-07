type ParamInt<Call extends (value: number) => any> = Call extends (value: infer Value) => infer Return
  ? Value extends number
    ? Call
    : (value: number) => Return
  : (value: number) => unknown
;

export default function paramInt<Call extends (value: number) => any>(call: Call): Call;
