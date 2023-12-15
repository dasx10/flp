import type Conveyor from "../../types/Conveyor";
import type Lambda      from "../../types/Lambda";
import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

type InitReduce<Next, Value> = Conveyor<Next, readonly Value[], Next>;
type ReduceExec<Next, Value> = Lambda<IterateCall<Next, Value>, Next>;
type ReduceParameter<Call extends ReduceExec> = Call extends ReduceExec<infer Next, any> ? Next : never;

/**
  * @see {@link Array.reduce}
  */
export default function reduce<Next, Value>(call: (next: Next) => (value: Value, index: number, values: readonly Value[]) => Next)
   : (next: Next)
  => (values: readonly Value[]) => Next;

export default function reduce<Call extends ReduceExec>(call: Call)
  : <Init extends Parameter<Call> & ReturnType<ReturnType<Call>>>(init: Init)
  => <Values extends readonly Parameter<ReturnType<Call>>[]>(values: Values)
  => ReturnType<ReturnType<Call>>;
