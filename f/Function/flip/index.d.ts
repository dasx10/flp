import type Conveyor from "../../types/Conveyor";
import type Lambda from "../../types/Lambda";
import type Constanta from "../../types/Constanta";

export default function flip <Return, Value, Next>(call: Conveyor<Return, Value, Next>): Conveyor<Return, Next, Value>;
export default function flip <Return, Value>(call: Constanta<Lambda<Value, Return>>): Lambda<Value, Constanta<Return>>;
export default function flip <Return, Value>(call: Lambda<Value, Constanta<Return>>): Constanta<Lambda<Value, Return>>;
