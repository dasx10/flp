type Parameter<Call> = Call extends (value: infer Value) => any
  ? Value
  : Call extends () => any
    ? never
    : unknown extends Call
      ? unknown
      : never
;

export default Parameter;
