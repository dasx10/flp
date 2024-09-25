import type ArrayIndex        from "../Types/ArrayIndex";
import type ArrayMaybePrepend from "../Types/ArrayMaybePrepend";
import type MayPromiseLike    from "../Types/MayPromiseLike";

type ArrayValue<Values extends readonly any[]> = Values extends readonly [] ? never : Values extends readonly (infer Value)[] ? Value : never;

type Stop = readonly [any, any, any, any, any, any, any, any, ...any[]];

export type Filter<Values extends readonly any[], Is = ArrayValue<Values>> = Values extends readonly []
  ? readonly []
  : Values extends readonly [infer First, ...infer Tail]
    ? Tail extends Stop
    ? (readonly (Is & ArrayValue<Values>)[])
    : readonly [First & Is, ...Filter<Tail, Is>] | Filter<Tail, Is>
    : Values extends readonly (infer Value)[]
      ? readonly (Is & Value)[] | readonly []
      : never
;

type Filtering<X, Is = X> = <Values extends readonly X[]>(value: Values) => Filter<Values, Is>;

/**
  * @example
  * ```
  * var is5 = (value) => value === 5;
  * filter(is5)([1, 2, 3, 4, 5]); // [5];
  * filter(is5)([1, 2, 5, 4, 5]); // [5, 5];
  * filter(is5)([1, 2, 3, 4, 6]); // [];
  *
  * var gt2 = (value) => value > 2;
  * filter(gt2)([1, 2, 3, 4, 5]); // [3, 4, 5];
  * filter(gt2)([]); // [];
  * filter(gt2)([1, 2]); // [];
  * ```
  * @description Creates an array of values that satisfy the condition.
  * @function
  * @name filter
  * @param {Function} call
  * @returns {Function}
  * @see {@link Array.prototype.filter}
  */
export default function filter<Is, Value>(call: (x: Value) => x is Is): Filtering<Value, Is>;
export default function filter<Value>(call: (value: Value) => any): Filtering<Value>;

export var then: (resolve: (value: typeof filter) => any) => any;

import { Ap, Right } from "../Monad/right";

export interface RightFilter extends Right<typeof filter> {
  <Is, X>(call: Ap<(x: X) => x is Is>) : (
    (<Values extends readonly X[]>(values: Ap<Values>) => Right<Filter<Values, Is>>) &
      (Right<Filtering<X, Is>>)
  );
  <X>(call: Ap<(x: X) => any>) : (
    (<Values extends readonly X[]>(values: Ap<Values>) => Right<Filter<Values>>) &
      (Right<Filtering<X>>)
  );
};
