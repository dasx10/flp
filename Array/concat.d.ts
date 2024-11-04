export type ArrayConcat<X extends readonly any[], Y extends readonly any[]> = X extends readonly any[]
  ? Y extends readonly any[]
    ? readonly [...X, ...Y]
    : never
  : never
;

type Concating<Y> = <X extends readonly any[]>(x: X) => Concat<X, Y>;
type ConcatFunction = <Y extends readonly any[]>(y: Y) => Concating<Y>;

/**
  * @example
  * ```javascript
  * concat([4, 5, 6])([1, 2, 3]); // [1, 2, 3, 4, 5, 6]
  * concat(["a", "b", "c"])(["d", "e", "f"]); // ["d", "e", "f", "a", "b", "c"]
  * concat([1, 2, 3])([4, 5, 6]); // [4, 5, 6, 1, 2, 3]
  * concat([])([1, 2, 3]) // [1, 2, 3];
  * concat([1, 2, 3])([]) // [1, 2, 3];
  * ```
  */
declare const concat: ConcatFunction;
export default concat;
export const then: (resolve: (concat: ConcatFunction) => any) => any;
