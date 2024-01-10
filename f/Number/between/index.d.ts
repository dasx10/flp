/**
  * @summary `z = z < x = z > y`
  * @description Checks if a number is between two other numbers
  * `Logic`
  * @param {number} min
  * @function `z => y => x => z > x && z < y`
  * @name between
  * @example
  * var between0 = between(0);
  * var between0_10 = between0(10);
  * between0_10(5); // true
  * between0_10(15); // false
  * between0_10(0); // false
  * between0_10(10); // false
  */
export default function between<Min extends number>(min: Min)
   : <Max   extends number>(max: Max)
  => <Value extends number>(value: Value)
  => value is NumberExclude<Value, Min | Max>;
