import type Await from "../Types/Await";
export default function trapBy<Value>(by: (value: Value) => any): <Return>(call: (value: Value) => Promise<Return>) => (value: Value) => Await<Return>;
