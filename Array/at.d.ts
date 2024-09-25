import type MustInt from "../Types/MustInt";

import type { Reverse } from "./reverse";

export type At<Values extends readonly any[], Index extends number> = number extends Index
  ? undefined | Values[Index]
  : `${Index}` extends `-${infer PositiveIndex}`
    ? [never, ...Reverse<Values>][PositiveIndex]
    : Values[Index]
;

type Ating<Index extends number> = <Values extends readonly any[]>(values: Values) => At<Values, Index>;

/**
  * @example
  * ```
  * at(0)([1, 2, 3]) // 1
  * at(1)([1, 2, 3]) // 2
  * at(2)([1, 2, 3]) // 3
  * at(3)([1, 2, 3]) // undefined
  * at(-1)([1, 2, 3]) // 3
  * at(-2)([1, 2, 3]) // 2
  * at(-3)([1, 2, 3]) // 1
  * at(-4)([1, 2, 3]) // undefined
  * ```
  * @description Get the value at the specified index
  * @function
  * @name at
  * @param {number} index
  * @return {function}
  * @see {@link Array.prototype.at}
  * @see {@link https://tc39.es/ecma262/#sec-array.prototype.at}
  */
export default function at<Index extends number>(index: MustInt<Index>): Ating<Index>;
declare export var then: (resolve: (value: typeof at) => any) => any;

import { Ap, Either } from "../Monad/either";

export interface EitherAt extends Either<typeof at> {
  <Index extends number>(index: At<MustInt<Index>, Error>) : (
    (<Values extends readonly any[]>(values: Ap<Values>) => Either<At<Values, Index>, Error>) &
    (Either<Ating<Index>, Error>)
  );
};
