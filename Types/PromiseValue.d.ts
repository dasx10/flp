type PromiseValue<MaybePromise extends PromiseLike<any>> = MaybePromise extends PromiseLike<infer Value>
  ? PromiseValue<Value>
  : MaybePromise
;

export default PromiseValue;
