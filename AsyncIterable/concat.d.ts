import type MayAsyncIterable from "../Types/MayAsyncIterable";

export default function concat<Y>(y: MayAsyncIterable<Y>): <X>(x: MayAsyncIterable<X>) => ({
  [Symbol.asyncIterator](): AsyncGenerator<Awaited<X> | Awaited<Y>, void, void>;
  then: (resolve: (values: readonly [...Awaited<X>[], ...Awaited<Y>[]]) => any) => any;
});
