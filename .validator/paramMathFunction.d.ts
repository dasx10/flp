type ParamMathFunction<Call> = Call extends (value: infer Value) => infer Return
  ? Return extends number
    ? Call
    : (value: Value) => number
  : (value: unknown) => number
  ;
export default function paramMathFunction<Return, Call>(exec: (call: ParamMathFunction<Call>) => Return): (call: ParamMathFunction<Call>) => Return;
