/**
  * @function
  * @param {Function} replace
  * @returns {Function}
  * @example
  * ```javascript
  * var byX = by(poin => poin.x);
  * var add = (y) => (x) => x + y;
  * addByX = byX(add);
  * addByX({ x: 4, y: 3 })({ x: 1, y: 2 }) // 5
  * addByX({ x: 3 })({ x: 1, y: 2 }) // 4
  * addByX({ x: 3, y: 2 })({ x: 1, y: 2 }) // 4
  * ```
  */
export default function by<Y, X>(replace: (x: X) => Y)
  : <Return>(call: (y: Y) => (x: Y) => Return)
  => (y: X) => (x: X) => Return
;

export var then: (resolve: (module: typeof any) => any) => any;
