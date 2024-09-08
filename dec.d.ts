export type Dec<X extends number> = number extends X ? number
  : X extends 1  ? 0  : X extends 2  ? 1  : X extends 3  ? 2  : X extends 4  ? 3
  : X extends 5  ? 4  : X extends 6  ? 5  : X extends 7  ? 6  : X extends 8  ? 7
  : X extends 9  ? 8  : X extends 10 ? 9  : X extends 11 ? 10 : X extends 12 ? 11
  : X extends 13 ? 12 : X extends 14 ? 13 : X extends 15 ? 14 : X extends 16 ? 15
  : X extends 17 ? 16 : X extends 18 ? 17 : X extends 19 ? 18 : X extends 20 ? 19
  : X extends 21 ? 20 : X extends 22 ? 21 : X extends 23 ? 22 : X extends 24 ? 23
  : X extends 25 ? 24 : X extends 26 ? 25 : X extends 27 ? 26 : X extends 28 ? 27
  : X extends 29 ? 28 : X extends 30 ? 29 : X extends 31 ? 30 : X extends 32 ? 31
  : X extends 33 ? 32 : X extends 34 ? 33 : X extends 35 ? 34 : X extends 36 ? 35
  : X extends 37 ? 36 : X extends 38 ? 37 : X extends 39 ? 38 : X extends 40 ? 39
  : X extends 41 ? 40 : X extends 42 ? 41 : X extends 43 ? 42 : X extends 44 ? 43
  : X extends 45 ? 44 : X extends 46 ? 45 : X extends 47 ? 46 : X extends 48 ? 47
  : X extends 49 ? 48 : X extends 50 ? 49 : X extends 51 ? 50 : X extends 52 ? 51
  : X extends 53 ? 52 : X extends 54 ? 53 : X extends 55 ? 54 : X extends 56 ? 55
  : X extends 57 ? 56 : X extends 58 ? 57 : X extends 59 ? 58 : X extends 60 ? 59
  : X extends 61 ? 60 : X extends 62 ? 61 : X extends 63 ? 62 : X extends 64 ? 63
  : number
;

/**
  * @function
  * @name dec
  * @alias decrement
  * @param {number} x
  * @return {number}
  * @example
  * ```javascript
  * dec(1) // 0
  * dec(0) // -1
  * dec(-1) // -2
  * dec(10) // 9
  * dec(-10) // -11
  * dec(0.1) // -0.9
  * dec(-0.1) // -1.1
  * dec(NaN) // NaN
  * ```
  */
export default function dec<X extends number>(x: X): Dec<X>;
export default function dec(x: number): number

export var then: (resolve: (module: typeof dec) => any) => any
