import type Constanta from "../types/Constanta";
import type Lambda    from "../types/Lambda";
import type Parameter from "../types/Parameter";

type ResultPromise<Value> = Value extends Promise<any> ? Value : Promise<Value>;

declare global {
  interface Promise<T> {
    public apply<Return>(call: Lambda<Return, T>) : ResultPromise<Return>;
    public apply<Return>(call: Promise<Lambda<Return, T>>): ResultPromise<Return>;

    public call: T extends Constanta<infer Return>
      ? Constanta<ResultPromise<Return>>
      : T extends Lambda<infer Return, infer Value>
        ? (value: Value | Promise<Value>) => ResultPromise<Return>
        : ResultPromise<T>;
  }
}

export default global;
