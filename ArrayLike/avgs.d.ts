import type { RightContainer } from "../Monad/either.d.ts";

type AvgsFunction = (values: ArrayLike<number>) => number;

declare const avgs: AvgsFunction & {
  readonly toAsync     : RightContainer<AvgsFunction>;
  readonly length      : 1;
  readonly name        : "avgs" | "";
  readonly prototype ? : void;
};

export const then: RightContainer<AvgsFunction>;
export default avgs;
