export type Append<Values extends readonly any[], X> = readonly [...Values, X];

type Appending<Y> = <Values extends readonly any[]>(values: Values) => Append<Values, Y>;


/**
  * @example
  * ```javascript
  * append(1)([1, 2, 3]); // [1, 2, 3, 1]
  * append(1)([]); // [1]
  * append([1])([1, 2, 3]); // [1, 2, 3, [1]]
  * ```
  * @description Append a value to an array
  * @param {*} y
  * @returns {function}
  */
export default function append<Y>(y: Y): Appending<Y>;
export var then: (resolve: (value: typeof append) => any) => any;

import type { Ap, Either } from "../Monad/either";

export interface EitherAppend extends Either<typeof append> {
  <Y>(y: Ap<Y>): (<Values extends readonly any[]>(x: Ap<Values>) => (
    (Either<Append<Values, Y>, Error>)) &
    (Either<Appending<Y>, Error>)
 );
};
