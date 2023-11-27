/**
  * @function
  * @name sub
  * @alias subtract
  * @param {number} next number
  * @example
  * sub(1)(2); // -1
  * sub(2)(1); // 1
  * sub(1)(1); // 0
  * sub(2)(2); // 0
  * sub(0)(2); // -2
  * sub(2)(0); // 2
  * sub(2)(1); // 1
  */
export default function sub(next: 0): <Value extends number>(value: Value) => Value;
export default function sub<Next extends number>(next: Next): <Value extends number>(value: Value) => number;
