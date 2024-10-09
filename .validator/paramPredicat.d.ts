type ParamPredicat<Call> = Call extends (value: infer Value) => infer Return
  ? Return extends boolean
    ? Call
    : (value: Value) => boolean
  : (value: unknown) => boolean
  ;
export default function paramPredicat<Return, Call>(exec: (call: ParamPredicat<Call>) => Return): (call: ParamPredicat<Call>) => Return;
