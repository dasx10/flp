type Await<MaybePromise> = MaybePromise extends PromiseLike<infer Value>
  ? Await<Value>
  : Promise<MaybePromise>
;

export default Await;
