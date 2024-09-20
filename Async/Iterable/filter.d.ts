import type MayPromiseLike   from "../Types/MayPromiseLike";
import type MayAsyncIterable from "../Types/MayAsyncIterable";

export default function filter<X>(test: MayPromiseLike<(x: Awaited<X>) => any>): (values: MayAsyncIterable<X>) => ({
  [Symbol.asyncIterator]: () => AsyncGenerator<Awaited<X>, void, void>;
  then: <Resolve>(resolve: (values: readonly Awaited<X>[]) => Resolve, reject?: (reason: any) => any) => any
});
