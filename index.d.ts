import Constanta from "./types/Constanta";
import Lambda    from "./types/Lambda"
import Parameter from "./types/Parameter";

type MayPromise<Value> = Value extends Promise<infer Is>
  ? MayPromise<Is>
  : Value extends AsyncCall<any>
    ? Promise<Value> & ((value?: AsyncParameter<Value>) => MayPromise<AwaitReturnType<Value>>)
    : Promise<Value> & (<Return>(call: (value: Value) => Return) => MayPromise<Return>)
;

type AsyncCall<Call extends Lambda | Constanta> = Call | Promise<Call>;

type AwaitParameter<Call extends AsyncCall<Lambda>> = Call extends Promise<infer Exec>
  ? AsyncParameter<Exec>
  : Parameter<Call>
;

type AsyncParameter<Call extends AsyncCall<Lambda>> = Promise<AwaitParameter<Call>> | AwaitParameter<Call>;

type AwaitReturnType<Call extends AsyncCall<Lambda | Constanta>> = Call extends Promise<infer Exec>
  ? AwaitReturnType<Exec>
  : ReturnType<Call>
;

export declare function async<Value>(value: Promise<Value> | Value)       : MayPromise<Value>;
export declare function async<Call extends Lambda | Constanta>(call: AsyncCall<Call>) : MayPromise<Call>;

type Namespace = "Number" | "String" | "Array" | "Object" | "Function" | "Composition" | "Decorators" | "Date";
type Module    = `${Namespace}/${string}`;

export function lazy(name : Module) : MayPromise<Lambda<any, any>>;
export function load(name : Module) : MayPromise<Lambda<any, any>>;

declare const y: MayPromise<Lambda<any, any>> & {
  load: typeof load;
  lazy: typeof lazy;
}

export default y;
