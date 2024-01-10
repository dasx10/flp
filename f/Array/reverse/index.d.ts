type TupleReverseRight<Values extends readonly any[]> = Values extends readonly [...infer Next, infer Value]
  ? [Value, ...TupleReverseRight<Next>]
  : Values;

export type ArrayReverse<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Next]
  ? [...ArrayReverse<Next>, Value]
  : Values extends readonly [...infer Next, infer Value]
    ? [Value, ...TupleReverseRight<Next>]
    : Values;

/**
  * @example
  * reverse([1, 2, 3]); // [3, 2, 1]
  */
export default function reverse<Values extends readonly any[]>(values: Values): ArrayReverse<Values>;
