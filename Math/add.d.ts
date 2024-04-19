import type Identity from "../Types/Identity";
import type Lambda   from "../Types/Lambda";

/**
  * Add two numbers
  * @param {number} next
  * @return {function}
  * @example
  * ```javascript
  * add(1)(2) // 3
  * add(1)(-2) // -1
  * add(-1)(2) // 1
  * add(-1)(-2) // -3
  * add(0)(0) // 0
  * add(0)(-0) // 0
  * ```
  */
export default function add(y: 0): Identity<number>;
export default function add<Y extends number = number>(y: Y): {
  (x: 0): Y;
  <X extends number = number>(x: X): number;
  <Y extends number, X extends number>(x: X): Y;
}
