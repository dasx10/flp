/**
  * @function
  * @name it
  * @alias isType
  * @param {{ new (...any): any }} y
  * @returns {(x: any) => boolaen} x
  * @description Create a predicate that checks if the value is an instance of the given constructor
  * @example
  * ```javascript
  * it(String)('foo') // true
  * it(Number)('foo') // false
  * it(Number)(2) // true
  * it(String)(2) // false
  * it(Date)('foo') // false
  * it(Date)(new Date()) // true
  * ```
  */
export default function it<Constructor>(y: { new (...any): any }): (x: any) => x is Constructor;
