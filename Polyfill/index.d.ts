import type Constanta     from "../types/Constanta";
import type Lambda        from "../types/Lambda";
import type MayPromise    from "../types/MayPromise";
import type PromiseResult from "../types/PromiseResult";

declare global {
  interface Promise<T> {
    public readonly apply<Return>(call: MayPromise<Lambda<Return, T>>) : PromiseResult<Return>;
  }

  interface Promise<T extends Lambda<any, any>> {
    public readonly call: T extends Constanta<Promise<any>>
      ? T
      : T extends Lambda<Promise<any>, Promise<any>>
        ? T
        : T extends Lambda<infer Return, infer Value>
          ? Lambda<PromiseResult<Return>, MayPromise<Value>>
          : T extends Constanta<infer Return>
            ? Constanta<PromiseResult<Return>>
            : never;
  }


}

export default global;
