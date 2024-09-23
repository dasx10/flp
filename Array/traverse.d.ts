export type Traverse<Values extends readonly any[], Traverseble> = Values extends readonly []
 ? never
 : Values extends readonly [infer Value]
    ? Value
    : Values extends readonly [any, any, ...any[]]
      ? Traverseble
      : Values extends readonly [infer Value, ...any[]]
        ? Value | Traverseble
        : Values extends readonly(infer Value)[]
          ? unknown | Value | Traverseble
          : unknown
;

/**
  * @example
  * ```javascript
  * traverse((x) => (y) => x + y)([1, 2, 3]); // 6
  * traverse((x) => (y) => x + y)([]); // throw TypeError
  * ```
  * @description Traverse an array
  * @param {function} call
  * @returns {function}
  * @see {@link Array.prototype.reduce}
  */
export default function traverse<Return, Value>(call: (x:Value) => (y: Return) => Return)
  : <Values extends readonly [Value, ...Value[]]>(values: Values)
  => Traverse<Values, Return>
