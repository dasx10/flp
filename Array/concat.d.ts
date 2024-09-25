export type Concat<X extends readonly any[], Y> = Y extends readonly any[]
  ? readonly [...X, ...Y]
  : readonly [...X, Y]
;

type Concating<Y> = <X extends readonly any[]>(x: X) => Concat<X, Y>;

export function concat<Y>(y: Y): Concating<Y>;
export var then: (resolve: (module: typeof concat) => any) => any;

import type { At, Right } from "../Monad/right.js";

export interface RightConcat extends Right<typeof concat> {
  <Y>(y: At<Y>) : (
    (<X extends readonly any[]>(x: X) => Right<Concat<X, Y>>) &
    (Right<Concating<Y>>)
  );
}
