import type Conveyor from "../../../types/Conveyor";
import type Lambda from "../../../types/Lambda";
export default function _<Value>(value: Value): <Return, Next>(call: Conveyor<Return, Value, Next>) => Lambda<Return, Next>;
