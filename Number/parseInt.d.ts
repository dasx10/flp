/**
  * @example
  * ```javascript
  * parseInt("10") // 10
  * parseInt("10", 10) // 10
  * parseInt("ff", 16) // 255
  * ```
  * @name parseInt
  * @param {*} value
  * @param {number} [radix]
  * @returns {number}
  */
export default function parseInt(value: any, radix?: number): number;
