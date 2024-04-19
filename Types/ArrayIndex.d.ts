import type TupleIndex from "./TupleIndex";

/**
  * @description get the index of the array
  * @example
  * ```
  * ArrayIndex<[1, 2, 3]> // 0 | 1 | 2
  * ArrayIndex<number[]> // number
  * ```
  */
type ArrayIndex<Values extends readonly any[]> = number extends Values["length"]
  ? number
  : TupleIndex<Values>
;

export default ArrayIndex;
