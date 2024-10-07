/**
  * @example
  * ```javascript
  * abs(1) // 1
  * abs(-1) // 1
  * abs(0) // 0
  * abs(NaN) // NaN
  * abs({}) // NaN
  * abs([]) // 0
  * abs([1, 2, 3]) // 1
  * ```
  */
export default function abs(value: *): number;
