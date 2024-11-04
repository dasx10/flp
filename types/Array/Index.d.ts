import _ArrayMaxDepth from "../Array/MaxDepth.d.ts";
/**
  * @description get the index of the array
  * @example
  * ```
  * ArrayIndex<[1, 2, 3]> // 0 | 1 | 2
  * ArrayIndex<number[]> // number
  * ```
  */
type ArrayIndex<Values extends readonly any[]> = Values extends readonly []
  ? never
  : Values extends _ArrayMaxDepth
    ? number
    : Values extends readonly [any, ...infer Tail]
      ? Tail['length'] | ArrayIndex<Tail>
      : Values extends readonly [...infer Head, any]
        ? Head['length'] | ArrayIndex<Head>
        : 0 | Values['length']
  ;

export default ArrayIndex;