import type ArrayFillAll from "../Types/ArrayFillAll";

type Map<Values extends readonly any[], Value> = Values extends readonly []
  ? readonly []
  : Values extends readonly [any, ...infer Tail]
    ? readonly [Value, ...Map<Tail, Value>]
    : Values extends readonly any[]
      ? readonly Value[] | readonly []
      : unknown
;

type Maping<Return, Value> = <Values extends readonly Value[]>(values: Values) => Map<Values, Return>;

/**
  * @example
  * ```javascript
  * map(x => x + 1)([1, 2, 3]); // [2, 3, 4]
  * map(x => x + 1)([]); // []
  * map(String)([1, 2, 3]); // ["1", "2", "3"]
  * ```
  * @description Map an array
  * @param {function call
  * @returns {function}
  * @name map
  */
export default function map<Return, Value>(call: (value: Value) => Return): Maping<Return, Value>;
export var then : (resolve: (module: typeof map) => any) => any;

import { Ap, Either } from "../Monad/either";

export interface EitherMap {
  <Return, Value>(call: (Ap<(value: Value) => Return> | ((value: Value) => Return))) : (
    (<Values extends readonly Value[]>(values: Ap<Values> | Values) => Either<Map<Values, Return>, Error>) &
    (Either<Maping<Return, Value>, Error>)
  );
};
