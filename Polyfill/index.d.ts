import Constanta from "../types/Constanta";
import type Lambda    from "../types/Lambda";
import type Parameter from "../types/Parameter";

type ResultPromise<Value> = Value extends Promise<any> ? Value : Promise<Value>;

declare global {
  interface Promise<T> {
    public apply<Return>(call: Lambda<T, Return>) : ResultPromise<Return>;
    public apply<Return>(call: Promise<Lambda<T, Return>>): ResultPromise<Return>;
  }

  // interface Promise<T extends (value: any) => any> {
  //   public call: T extends () => infer Return
  //    ? (...values?: readonly any[]) => Promise<Return>
  //    : T extends (value: infer Value) => infer Return
  //      ? (value: Value | Promise<Value>) => Promise<Return>
  //      : never
  // }


  interface Promise<T extends Lambda<any, any>> {
    public call: T extends Constanta<infer Return> ? Constanta<ResultPromise<Return>>
      : T extends Lambda<infer Value, infer Return>
        ? (value: Value | Promise<Value>) => ResultPromise<Return>
        : ResultPromise<T>;
  }
}

export default global;
