import type Await from "../Types/Await";
export default function trap<Return, Value>(call: (value: Value) => Promise<Return>): (value: Value) => Await<Return>;
