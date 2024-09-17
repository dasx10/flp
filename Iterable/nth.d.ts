import type ArgumentUInt from "./Types/ArgumentUInt";

type Nth<Index extends number, Values extends Iterable<any>> = number extends Index
  ? Values extends Iterable<infer Value>
    ? Value | undefined
    : unknown
  : `${Index}` extends `-${number}`
    ? undefined
    : Values extends readonly any[]
      ? number extends Values["length"] ? Values[Index] | undefined : Values[Index]
      : Values extends Iterable<infer Value>
        ? Value | undefined
        : unknown
  ;


/**
  * @function
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * nth(1)(test()) // 2
  * nth(2)(test()) // 3
  * nth(3)(test()) // undefined
  * nth(1)([1, 2, 3]) // 2
  * nth(1)(new Set([1, 2, 3])) // 2
  * ```
  */
export default function nth<Index extends number>(index: ArgumentUInt<Index>): <Values extends Iterable<Value>>(values: Values) => Nth<Index, Values>;
