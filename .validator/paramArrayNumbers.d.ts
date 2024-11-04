type ParamArrayNumbers<Call extends (value: readonly number[]) => any> = Call extends (values: infer Values) => infer Return
  ? Values extends readonly number[]
    ? Call
    : (value: readonly number[]) => Return
  : (value: readonly number[]) => unknown
;

export default function paramArrayNumbers<Call>(call: ParamArrayNumbers<Call>) : ParamArrayNumbers<Call>;
