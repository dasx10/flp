import type Await from "./Await";

type MayPromise<Value> = Value extends PromiseLike<infer Value>
  ? Promise<Await<Value>> | Value
  : Value | Promise<Value>
;

export default MayPromise;
