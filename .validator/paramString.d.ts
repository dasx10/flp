type ParamString<Call> = Call extends (value: infer Value) => infer Return
  ? Value extends string
    ? Call
    : (value: string) => Return
  : (value: string) => unknown
;

export default function paramString<Call>(call: ParamString<Call>): ParamString<Call>;
