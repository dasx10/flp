import type Lambda     from "../Types/Lambda";
import type Await      from "../Types/Await";
import type MayPromise from "../Types/MayPromise";
// export default function async<Return, Value>(call: MayPromise<Lambda<Return, Value>>): (value: MayPromise<Value>) => Await<Return>;

export default function async<Return, Value>(call: MayPromise<Lambda<Return, Value>>): (value: MayPromise<Value>) => Await<Return>;
