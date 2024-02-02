import Lambda    from "./types/Lambda"
import Parameter from "./types/Parameter";

type MayPromise<Value> = Value extends Promise<infer Is>
  ? MayPromise<Is>
  : Value extends AsyncCall<any>
    ? Promise<Value> & ((value: AsyncParameter<Value>) => MayPromise<AwaitReturnType<Value>>)
    : Promise<Value> & (<Return>(call: (value: Value) => Return) => MayPromise<Return>)
;

type AsyncCall<Call extends Lambda> = Call | Promise<Call>;

type AwaitParameter<Call extends AsyncCall<Lambda>> = Call extends Promise<infer Exec>
  ? AsyncParameter<Exec>
  : Parameter<Call>
;

type AsyncParameter<Call extends AsyncCall<Lambda>> = Promise<AwaitParameter<Call>> | AwaitParameter<Call>;

type AwaitReturnType<Call extends AsyncCall<Lambda>> = Call extends Promise<infer Exec>
  ? AwaitReturnType<Exec>
  : ReturnType<Call>
;

type AwaitCall<Call extends Lambda> = (value: AsyncParameter<AsyncCall>) => Promise<AwaitReturnType<AsyncCall>>;

export declare function async<Value>(value: Promise<Value> | Value)       : MayPromise<Value>;
export declare function async<Call extends Lambda>(call: AsyncCall<Call>) : MayPromise<Call>;

type Namespace = "Number" | "String" | "Array" | "Function" | "Composition";
type Module    = `${Namespace}/${string}`;

declare const y: {
  (name : Module): MayPromise<Lambda<any, any>>;
  async : MayPromise<Lambda<any, any>>;
}

export default y;
