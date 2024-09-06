/**
  * @function
  * @name nowhere
  * @alias whereNot
  * @param {Record<PropertyKey, Function>} test
  * @returns {Function}
  * @example
  * ```javascript
  * var anyNotPosPoint = whereNot({
  *   x: x => x > 0,
  *   y: y => y > 0
  * });
  *
  * anyNotPosPoint({ x: 0, y: 0 }) // true
  * anyNotPosPoint({ x: 1, y: 0 }) // false
  * ```
  */
export default function nowhere<Test extends { [key in PropertyKey]: (x: any) => any }>(test : Test)
  : (value : { [key in keyof Test]: Test[key] extends (x: infer X) => any ? X : any }) => boolean;

export var then: (resolve: (module: typeof nowhere) => any) => any;
