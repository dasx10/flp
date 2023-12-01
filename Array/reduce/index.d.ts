import type Lambda    from "../../types/Lambda";
import type Parameter from "../../types/Parameter";

type IterateExec<Next, Value> = (value: Value, index: number, values: readonly Value[]) => Next;
type ReduceExec<Next, Value> = Lambda<Next, IterateExec<Next, Value>>;
type InitReduce<Next, Value> = Lambda<Next, Lambda<readonly Value[], Next>>;

/**
  * @see {@link Array.reduce}
  */
export default function reduce<Next, Value>(call: ReduceExec<Next, Value>):InitReduce<Next, Value>;

/**
  * @see {@link Array.reduce}
  */
export interface AsyncReduce extends Promise<Lambda<ReduceExec<any, any>, InitReduce<any, any>>> {
  call: <Next, Value>(call: ReduceExec<Next, Value> | Promise<ReduceExec<Next, Value>>) => Promise<InitReduce<Next, Value>>
}
