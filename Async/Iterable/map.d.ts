import type MayAsyncIterable from "../Types/MayAsyncIterable";

type AsyncList<X> = ({
  [Symbol.asyncIterator](): AsyncIterator<Awaited<X>>;
  then: <Resolve>(resolve: (values: readonly Awaited<X>[]) => Resolve, reject?: (reason: any) => any) => any;
});

export default function map<Return, X>(call: (x: Awaited<X>) => Return): {
  (values: Iterable<X>): {
    [Symbol.iterator](): Generator<Return, void, void>;
  } & AsyncList<Return>
  (values: MayAsyncIterable<X>): AsyncList<X>
}
export default function map<Return, X>(call: PromiseLike<(x: Awaited<X>) => Return>): {
  (values: MayAsyncIterable<X>): AsyncList<X>
}
