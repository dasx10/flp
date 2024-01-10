import type Lambda   from "../../types/Lambda";
import type { Lift } from "../lift";

declare var chain: <Call extends Lambda<Lambda<any, any>, any>>(call: Call) => <Value extends Lambda<Lift<Call>, any>>(value: Value) => ReturnType<Value>;
export default chain;
