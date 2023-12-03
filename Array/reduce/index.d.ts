import type Lambda      from "../../types/Lambda";
import type Parameter   from "../../types/Parameter";
import type IterateCall from "../types/IterateCall";

type ReduceExec<Next, Value> = Lambda<Next, IterateCall<Next, Value>>;
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
