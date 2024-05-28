import type Lambda from "../Types/Lambda";

/**
  * Get the nth power of a number
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * pow(2)(4) // 16
  * pow(3)(9) // 729
  * pow(3)(3) // 27
  * pow(2)(3) // 9
  * ```
  */
export default function pow<Y extends number>(y: Y): Lambda<number, number>
