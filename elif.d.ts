/**
  * @function
  * @description If the test is true, return the resolve function, otherwise return the reject function
  * @name elif
  * @alias ifElse
  * @param {Function} test
  * @returns {Function}
  * @example
  * ```javascript
  * var saveInc = elif(isNaN)(() => 0)(x => x + 1);
  * saveInc("hello") // 0
  * saveInc(5) // 6
  * saveInc(NaN) // 0
  * saveInc(null) // 0
  * saveInc() // 0
  * ```
  */
export default function elif<Value>(test: (value: Value) => any)
   : <Rejected>(reject : (value: Value) => Rejected)
  => <Resolved>(resolve: (value: Value) => Resolved)
  => (value: Value)
  => Resolved | Rejected
;

export var then: (resolve: (value: typeof elif) => any) => any;
