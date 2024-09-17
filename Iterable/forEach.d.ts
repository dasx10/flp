/**
  * @example
  * ```javascript
  * forEach(console.log)((function* values() { yield 1; yield 2; yield 3; })()) // -> log 1, 2, 3
  * forEach(console.log)([1, 2, 3, 4]) // -> log 1, 2, 3, 4
  * forEach(console.log)(new Set([1, 2, 3, 4])) // -> log 1, 2, 3, 4
  * forEach(console.log)("Test") // -> log "T", "e", "s", "t"
  * ```
  * @description executes a function on each value
  * @param {function} call
  * @return {function}
  * @function
  * @name forEach
  * @alias each
  */
export deafult function forEach<X>(call: (x: X) => any): <Values extends Iterable<X>>(values: Values) => Values;
