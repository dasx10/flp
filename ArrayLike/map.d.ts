import type { RightContainer } from "../Monad/either.d.ts";
import type ArrayLikeValue     from "../types/ArrayLike/Value.js";
import type Parameter          from "../types/Parameter.d.ts";
import type Return             from "../types/Return.d.ts";

export type ArrayLikeMap<
  Values extends ArrayLike<any>,
  Call   extends (value: ArrayLikeValue<Values>) => any
> = Partial<ReadonlyArray<Return<Call>>>;

type Maping<Call extends (value: any) => unknown> = (<Values extends ArrayLike<Parameter<Call>>>(values: Values) => ArrayLikeMap<Values, Call>) & ({
  readonly length     : 1;
  readonly prototype? : void;
});

type MapFunction = <Call extends (value: any) => unknown>(call: Call) => Maping<Call>;

declare const map: MapFunction & {
  readonly toAsync   : RightContainer<MapFunction>;
  readonly length    : 1;
  readonly name      : "map" | "";
  readonly call      : <Call extends (value: any) => unknown>(this: Function, thisArg: unknown, call: Call) => Maping<Call>;
  readonly bind      : <Call extends (value: any) => unknown>(this: Function, thisArg: unknown, call: Call) => () => Maping<Call>;
  readonly apply     : <Call extends (value: any) => unknown>(this: Function, thisArg: unknown, call: readonly [Call]) => Maping<Call>;
  readonly prototype?: void;
};

export default map;
export const then: RightContainer<MapFunction>;
