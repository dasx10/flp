type ParamNumber<Call> = Call extends (value: infer Value) => infer Return
  ? Value extends number
    ? Call
    : (value: number) => Return
  : (value: number) => unknown
;

export default function paramNumber<Call>(call: ParamNumber<Call>): ParamNumber<Call>;
