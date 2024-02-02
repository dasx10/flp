type TupleReverseRight<Values extends readonly any[]> = Values extends readonly [...infer Next, infer Value]
  ? [Value, ...TupleReverseRight<Next>]
  : Values;

type ArrayReverse<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Next]
  ? [...ArrayReverse<Next>, Value]
  : Values extends readonly [...infer Next, infer Value]
    ? [Value, ...TupleReverseRight<Next>]
    : Values;

export default ArrayReverse;
