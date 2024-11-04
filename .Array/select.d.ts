type Select<Indexes extends readonly (number|`${number}`)[], Values extends readonly any[]> = Indexes extends readonly [infer Index, ...infer Tail]
  ? readonly [Values[Index], ...Select<Tail, Values>]
  : Indexes extends readonly []
    ? readonly []
    : Indexes extends readonly [infer Index]
      ? readonly [Values[Index]]
      : Indexes extends readonly (infer Index)[]
        ? readonly Values[Index][] | []
        : never[]
;

/**
  * @description Get the value at the specified index
  * @function
  * @name select
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * select([0, 1])([1, 2, 3]) // [1, 2]
  * select([1, 2])([1, 2, 3]) // [2, 3]
  * select([0, 1, 2])([1, 2, 3]) // [1, 2, 3]
  * select([1, 2, 3])([1, 2, 3]) // [2, 3, undefined]
  * select([2, 1, 0])([1, 2, 3]) // [3, 2, 1]
  * select([])([1, 2, 3]) // []
  * select([3, 2, 1, 0])([1, 2, 3]) // [undefined, 3, 2, 1]
  * ```
  */
export default function select<Indexes extends readonly (number|`${number}`)[]>(indexes: Indexes): <Values extends readonly any[]>(values: Values) => Select<Indexes, Values>;
