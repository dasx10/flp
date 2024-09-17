type Await<MaybePromise> = MaybePromise extends PromiseLike<infer Value>
  ? Await<Value>
  : MaybePromise
;

export default Await;
