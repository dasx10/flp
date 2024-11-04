import type { RightExecuteble } from "../Monad/right";


type AvgFunction = (y: number) => (x: number) => number;

/**
  * @example
  * ```javascript
  * avg(1)(2) // 1.5
  * avg(1)(-2) // -0.5
  * avg(0)(-0) // 0
  * avg(1)(1) // 1
  * ```
  * @description Get the average of two numbers
  * @function
  * @name avg
  * @alias average
  * @param {number} y
  * @return {function}
  */
declare const avg: AvgFunction & {
  readonly toAsync: RightExecuteble<(x: number) => number, number>;
};

export default avg;
export var then: (resolve: (module: typeof avg) => any) => any;
