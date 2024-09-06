/**
  * @function
  * @name clump
  * @param {number} min
  * @return {function}
  * @example
  * ```javascript
  * clump(0)(3)(-1) // 0
  * clump(0)(3)(0) // 0
  * clump(0)(3)(1) // 1
  * clump(0)(3)(2) // 2
  * clump(0)(3)(3) // 3
  * clump(0)(3)(4) // 3
  * clump(1)(3)(0) // 1
  * clump(1)(2)(4) // 2
  * ```
  */
export default function clump(min: number): (max: number) => (x: number) => number;
export var then: (resolve: (module: typeof clump) => any) => any;
