export type TupleReverse<
  Tuple     extends readonly any[],
  Recursive extends readonly any[] = []
> = Tuple extends readonly [infer F, ...infer L]
  ? TupleReverse<L, [F, ...Recursive]>
  : Recursive;

export type ArrayReverse<Tuple extends readonly any[]> = Tuple extends readonly [infer F, ...infer L]
  ? TupleReverse<L, [F]>
  : Tuple;


/**
  * @example
  * reverse([1, 2, 3]); // [3, 2, 1]
  */
declare var reverse: <Values extends readonly any[]>(values: Values) => ArrayReverse<Values>;

export default reverse;
