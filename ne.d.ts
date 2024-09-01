/**
  * @function
  * @name ne
  * @alias notEqual
  * @param {*} y
  * @return {Function}
  * @example
  * ```javascript
  * ne(1)(1) // false
  * ne(1)(2) // true
  * ne(1)(NaN) // true
  * ne("")("") // false
  * ne("")("a") // true
  * ne(0)(-0) // false
  * ne([])([]) // true
  * ne({})({}) // true
  * var arr=[];
  * ne(arr)(arr) // false
  * ne(arr)([]) // true
  * var obj={};
  * ne(obj)(obj) // false
  * ne(obj)({}) // true
  * ne(obj)(arr) // true
  * ```
  */
export default function ne<Y>(y: Y): (x: any) => boolean;
export var then: (resolve: (value: typeof ne) => any) => any;
