type FirstFromLast<Values extends readonly any[], Value = undefined> = Values extends readonly [...infer Head, infer Last]
  ? FirstFromLast<Head, Last>
  : Value | Values[0]
;

export type First<Values extends Iterable<any>> = Values extends readonly []
  ? undefined
  : Values extends readonly [...infer First, ...any[]]
    ? First
    : Values extends readonly any[]
      ? FirstFromLast<Values>
      : Values extends Iterable<infer Value>
        ? Value | undefined
        : unknown
;

/**
  * @function
  * @template Value
  * @param {Iterable<Value>} values
  * @return {Value | undefined}
  * @example
  * ```javascript
  * first([1, 2, 3]) // 1
  * first(new Set([1, 2, 3])) // 1
  * first([]) // undefined
  * first(new Set()) // undefined
  * ```
  */
export default function first<Value>(values: Iterable<Value>): Value | undefined;
export var then: (resolve: (value: typeof first) => any) => any;
