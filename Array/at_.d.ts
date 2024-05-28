import type ArrayIndex from "../Types/ArrayIndex";
import type ArrayNth   from "../Types/ArrayNth";

/**
  * @description Get the value at the specified index
  * @function
  * @name at_
  * @param {Array} values
  * @return {function}
  * @example
  * ```
  * at_([1, 2, 3])(0) // 1
  * at_([1, 2, 3])(1) // 2
  * at_([1, 2, 3])(2) // 3
  * at_([1, 2, 3])(3) // undefined
  * at_([1, 2, 3])(-1) // 3
  * at_([1, 2, 3])(-2) // 2
  * at_([1, 2, 3])(-3) // 1
  * at_([1, 2, 3])(-4) // undefined
  * ```
  * @see {@link Array.prototype.at}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.at}
  */
export default function at_<Values extends readonly any[]>(values: Values): {
  <Index extends ArrayIndex<Values>>(index: Index): ArrayNth<Values, Index>;
  (index: number): Values[number] | undefined;
};
