/**
  * greater than or equal 1
  * @param {number} value number
  * @returns {boolean} boolean
  * @example
  * ge1(0); // false
  * ge1(1); // true
  * ge1(2); // false
  * ge1(3); // false
  */
declare function ge1(value: 1): true;
declare function ge1(value: number): value is 1;
export default ge1;
