export type PromiseValue<MaybePromise> = MaybePromise extends Promise<infer Value>
  ? Value
  : MaybePromise;

export type PromiseValues<MaybePromises extends readonly any[]> = MaybePromise extends readonly [infer Value, ...infer Rest]
  ? [PromiseValue<Value>, ...PromiseValues<Rest>]
  : PromiseValue<MaybePromises[number]>;

export default function all<Values extends readonly any[]>(values): Promise<PromiseValues<Values>>
