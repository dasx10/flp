import type DeepPartialRecord from "../../../types/Object/DeepPartialRecord";
import type Dir from "../../../types/Object/Dir";

/**
  * @function
  * @param {PropertyKey[]} keys
  * @example
  * ```
  * path(['a', 'b', 'c'])({ a: { b: { c: 1 } } }) // 1
  * path(['a', 'b'])({ a: { b: 1 } }) // 1
  * path(['a'])({ a: 1 }) // 1
  * path([])({}) // undefined
  * ```
  */
export default function dir<Keys extends readonly PropertyKey[]>(keys : Keys): <Value extends DeepPartialRecord<Keys, any>>(value : Value) => Dir<Value, Keys>;
