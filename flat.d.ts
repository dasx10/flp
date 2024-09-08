import type { Dec } from "../dec";

export type FlatIterable<Depth extends number, Values extends Iterable<any>> = Depth extends 0
  ? Values
  : number extends Depth
    ? Values extends Iterable<infer T>
      ? T | Values
      : Values
    : Values extends Iterable<infer T>
      ? FlatIterable<Dec<Depth>, T>
      : Values
;

export default function flat<Depth extends number>(depth: Depth): <Values extends Iterable<any>>(values: Values) => ({
  [Symbol.iterator](): Generator<FlatIterable<Depth, Values>, void, void>;
});
