import type ArrayIndex from "../Types/ArrayIndex";
import type MustUInt   from "../Types/MustUInt";

export type Nth<Values extends readonly any[], Index extends ArrayIndex<Values>> = number extends Index
  ? Values[Index] | undefined
  : number extends ArrayIndex<Values>
    ? Values[number] | undefined
    : Values[Index]
;

/**
  * @function
  * @name nth
  * @memberof Array
  * @param {number} index
  * @return {function}
  * @example
  * ```javascript
  * nth(0)([1, 2, 3]) // 1
  * nth(1)([1, 2, 3]) // 2
  * nth(2)([1, 2, 3]) // 3
  * nth(3)([1, 2, 3]) // undefined
  * nth(-1)([1, 2, 3]) // undefined
  * nth(-2)([1, 2, 3]) // undefined
  * ```
  */
export default function nth<Index extends number>(index: MustUInt<Index>): <Values extends readonly any[]>(values: Values) => Nth<Values, Index>;
