import type { RightExecuteble, RightFunction } from "../Monad/right";

type Abs<Value extends number> = number extends Value
  ? Value
  : `${Value}` extends `-${number}`
    ? number
    : Value extends number
      ? Value
      : never
;

type AbsFunction = <Value extends number>(value: Value) => Abs<Value>;

/**
  * @example
* ```javascript
* abs(1) // 1
* abs(-1) // 1
* abs(0) // 0
* abs(NaN) // NaN
* abs({}) // NaN
* abs([]) // 0
* abs([1, 2, 3]) // 1
* ```
*/
declare const abs: AbsFunction & {
  readonly toAsync: RightExecuteble<number, number>;
};
export default abs;
export const then: RightFunction<AbsFunction>;
