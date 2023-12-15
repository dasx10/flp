import type { InitReduce, ReduceExec } from "../reduce";
export default function reduceWhileCreate(some: any): <Next, Value>(call: ReduceExec<Next, Value>) => InitReduce<Next, Value>;
