export type Prepend<Values extends readonly any[], X> = readonly [X, ...Values];

type Prepending<X> = <Values extends readonly any[]>(values: Values) => Prepend<Values, X>;

/**
  * @example
  * ```javascript
  * prepend(1)([1, 2, 3]); // [1, 1, 2, 3]
  * prepend(1)([]); // [1]
  * prepend([1])([1, 2, 3]); // [[1], 1, 2, 3]
  * ```
  * @description Prepend a value to an array
  * @param {*} x
  * @returns {function}
  * @name prepend
  */
export default function prepend<X>(x: X): Prepending<X>;

export var then: (resolve: (value: typeof prepend) => any) => any;

import type { Right } from "../Monad/right";

export interface RightPrepend extends Right<typeof prepend> {
  <X>(call: Right<X>) : (
    (<Values extends readonly any[]>(values: Right<Values>) => Right<Prepend<Values, X>>) &
    (Right<Prepending<X>>)
  );
};
