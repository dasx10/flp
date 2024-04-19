import type Await from "../Types/Await";
import type Lambda from "../Types/Lambda"
export default function fail<Return>(call: Lambda<Return, unknown>): <Value extends Promise<any>>(value: Value) => Value | Await<Return>;
