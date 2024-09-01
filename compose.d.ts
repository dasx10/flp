import type { First } from "./Array/first";
import type { Last }  from "./Array/last";

type ComposeFunctions<Values extends readonly any[]> = Values extends readonly [infer First, infer Next, ...infer Tail]
  ? readonly [...ComposeFunctions<[Next, ...Tail]>, (x: First) => Next]
  : Values extends readonly [infer First]
    ? readonly []
    : Values extends readonly []
      ? readonly []
      : readonly [] | ((x: Values[number]) => Values[number])[]
;

/**
  * @function
  * @name compose
  * @param {function[]} values
  * @return {function}
  * @example
  * ```javascript
  * var sub = (y) => (x) => x - y;
  * compose([
  *  sub(5),
  *  sub(10),
  * ])(100) // 85
  *
  * var add = (y) => (x) => x + y;
  * compose([
  *  add(5),
  *  add(10),
  * ])(100) // 115
  *
  *
  * compose([
  *  String,
  *  add(5),
  *  add(10),
  * ])(100) // '115'
  *
  * ```
  */
export default function compose<B, A>
(values: [(x: A) => B])
: (x: A) => B;

export default function compose<C, B, A>
(values: ComposeFunctions<[A, B, C]>)
: (x: A) => C;

export default function compose<D, C, B, A>
(values: ComposeFunctions<[A, B, C, D]>)
: (x: A) => D;

export default function compose<E, D, C, B, A>
(values: ComposeFunctions<[A, B, C, D, E]>)
: (x: A) => E;

export default function compose<F, E, D, C, B, A>
(values: ComposeFunctions<[A, B, C, D, E, F]>)
: (x: A) => F;

export default function compose<
  Values    extends readonly [any, ...any[], any],
  Functions extends ComposeFunctions<Values> = ComposeFunctions<Values>,
>(values: Functions & ComposeFunctions<Values>): (x: First<Parameters<Last<Functions>>>) => ReturnType<First<Functions>>;

declare export var then: (resolve: (module: typeof compose) => any) => any;
