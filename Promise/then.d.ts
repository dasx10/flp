import type Await  from "../Types/Await";
import type Lambda from "../Types/Lambda";
export default function then<Return, Value>(call: Lambda<Return, Value>): <Value>(value: PromiseLike<Value>) => Await<Return>;
