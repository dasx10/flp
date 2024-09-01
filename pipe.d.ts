import type { First } from "./Array/first";
import type { Last }  from "./Array/last";

type PipeFunctions<Values extends readonly any[]> = Values extends readonly [infer First, infer Next, ...infer Tail]
  ? readonly [(x: First) => Next, ...PipeFunctions<[Next, ...Tail]>]
  : Values extends readonly [infer First]
    ? readonly []
    : Values extends readonly []
      ? readonly []
      : readonly [] | ((x: Values[number]) => Values[number])[]
;


/**
  * @function
  * @name pipe
  * @param {function[]} values
  * @return {function}
  * @example
  * ```javascript
  * var sub = (y) => (x) => x - y;
  * pipe([
  *  sub(10),
  *  sub(5),
  * ])(100) // 85
  *
  * var add = (y) => (x) => x + y;
  * pipe([
  *  add(10),
  *  add(5),
  * ])(100) // 115
  *
  *
  * pipe([
  *  add(10),
  *  add(5),
  *  String,
  * ])(100) // '115'
  *
  * ```
  */
export default function pipe<B, A>
(values: [(x: A) => B])
: (x: A) => B;

export default function pipe<C, B, A>
(values: PipeFunctions<[A, B, C]>)
: (x: A) => C;

export default function pipe<D, C, B, A>
(values: PipeFunctions<[A, B, C, D]>)
: (x: A) => D;

export default function pipe<E, D, C, B, A>
(values: PipeFunctions<[A, B, C, D, E]>)
: (x: A) => E;

export default function pipe<F, E, D, C, B, A>
(values: PipeFunctions<[A, B, C, D, E, F]>)
: (x: A) => F;

export default function pipe<
  Values    extends readonly [any, ...any[], any],
  Functions extends PipeFunctions<Values> = PipeFunctions<Values>,
>(values: Functions & PipeFunctions<Values>): (x: First<Parameters<First<Functions>>>) => ReturnType<Last<Functions>>;

declare export var then: (resolve: (module: typeof pipe) => any) => any;
