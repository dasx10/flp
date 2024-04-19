import type Lambda from "../Types/Lambda";
export default function on<Return, Value>(call: Lambda<Return, Value>): <Next>(next: Lambda<Next, Return>) => Next;
