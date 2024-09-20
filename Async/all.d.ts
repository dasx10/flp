import type { LeftValue, left, right } from "../Monad/either";
import type { Either, Right } from "../Monad/right";

type AwaitAll<Values extends readonly PromiseLike<any>[]> = Values extends readonly [infer First, ...infer Rest]
  ? readonly [Awaited<First>, ...AwaitAll<Rest>]
  : Values extends readonly []
    ? readonly []
    : Values extends readonly(infer Value)[]
      ? readonly Awaited<Value>[]
      : readonly unknown[] | []
;

export default function all(values: readonly []): Right<readonly []>;
export default function all<Values extends readonly Left<any>[]>(values: Values & readonly Left<any>[]): Left<LeftValue<Values[number]>>;

export default function all<Values extends readonly Right<any>[]>(values: Values & readonly Right<any>[]): Right<AwaitAll<Values>>;
export default function all<Values extends readonly Either<any, any>[]>(values: Values): Either<AwaitAll<Values>, LeftValue<Values[number]>>;
export default function all<Values extends readonly PromiseLike<any>[]>(values: Values): Either<AwaitAll<Values>, unknown>;
