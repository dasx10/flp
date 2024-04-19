import type Lambda from "../Types/Lambda";
/**
  * Get the nth root of a number
  * @function
  * @name root
  * @param {number} y
  * @return {function}
  * @example
  * ```javascript
  * root(2)(4) // 2
  * root(2)(9) // 3
  * root(3)(27) // 3
  * root(3)(-27) // -3
  */
export default function root <Y extends number>(y: Y): Lambda<number, number>;
