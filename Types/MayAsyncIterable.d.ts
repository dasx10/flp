import type MayPromiseLike from "./MayPromiseLike";

type AnyIterable<X>      = AsyncIterable<X> | AsyncIterator<X> | Iterable<X>;
type MayAsyncIterable<X> = MayPromiseLike<AnyIterable<MayPromiseLike<X>>>;

export default MayAsyncIterable;
