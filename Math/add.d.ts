export type Add<X extends number, Y extends number> = number extends X
  ? number
  : number extends Y
    ? number
    : X extends 0
      ? Y
      : Y extends 0
        ? X
        : number
;

export type Adding<Y extends number> = <X extends number>(x: X) => Add<X, Y>;

/**
  * @function
  * @description Add two numbers
  * @name add
  * @alias addition
  * @alias plus
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
export default function add<Y extends number>(y: Y): Adding<Y>;
export var then: (x: (module: typeof add) => any) => any;
