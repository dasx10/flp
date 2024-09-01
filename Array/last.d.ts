type _LastBegin<Values extends readonly any[]> = Values extends readonly [infer Value, ...infer Tail]
  ? Tail extends readonly [infer Next, ...infer NextTail]
    ? _LastBegin<Tail>
    : Value | Tail[number]
  : Values extends readonly []
    ? never
    : Values[number]
;

export type Last<Values extends readonly any[]> = Values extends readonly [...any, infer Last]
  ? Last
  : Values extends readonly []
    ? never
    : _LastBegin<Values>
;

/**
  * @function
  * @name last
  * @param {Array} values
  * ```javascript
  * last([1, 2, 3]) // 3
  * last([]) // undefined
  * last([1]) // 1
  * last([1, 2, 3, 4]) // 4
  * last([1, 2, 3, 4, 5]) // 5
  * ```
  */
export default function last<Values extends readonly any[]>(values: Values): Last<Values>
