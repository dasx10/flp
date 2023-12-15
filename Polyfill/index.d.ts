import type Constanta     from "../types/Constanta";
import type Lambda        from "../types/Lambda";
import type MayPromise    from "../types/MayPromise";
import type Parameter     from "../types/Parameter";
import type PromiseResult from "../types/PromiseResult";

declare global {
  interface Promise<T> {
    public readonly apply<Return>(call: MayPromise<Lambda<Return, T>>) : PromiseResult<Return>;
  }

  interface Promise<T extends Lambda> {
    // public readonly call: T extends (value: infer Value) => infer Return
    //   ? <
    //     _Return extends Return = Return,
    //     _Value  extends Value = Value,
    //   >(value: MayPromise<Value | _Value>) => PromiseResult<_Return>
    //   : Promise<T>
    //
    public readonly call: T extends (value: infer Value) => infer Return
      ? <
        _Return extends MayPromise<Return> = MayPromise<Return>,
        _Value extends MayPromise<Value> = MayPromise<Value>,
      >(value: _Value) => PromiseResult<_Return>
      : never;
  }

}

export default global;
