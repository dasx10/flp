/**
  * @function
  * @name anywhere
  * @alias whereOr
  * @example
  * ```javascript
  * var anyPosPoint = whereOr({
  *   x: x => x > 0,
  *   y: y => y > 0
  * });
  *
  * anyPosPoint({ x: 0, y: 0}) // false
  * anyPosPoint({ x: 1, y: 0}) // true
  * anyPosPoint({ x: 0, y: 1}) // true
  * anyPosPoint({ x: 0, y: -1}) // false
  * anyPosPoint({ x: -1, y: -1}) // false
  * anyPosPoint({ x: -1, y: 0 }) // false
  * anyPosPoint({ x: 1 }) // true
  * anyPosPoint({ x: 2 }) // true
  * anyPosPoint({ y: 3 }) // true
  * anyPosPoint({ y: 4 }) // true
  * ```
  */
export default function anywhere<Test extends { [key in PropertyKey]: (x: any) => any }>(test : Test)
  : (record : { [key in keyof Test]: Test[key] extends (x: infer X) => any ? X : any }) => boolean;

export var then: (resolve: (module: typeof anywhere) => any) => any;
