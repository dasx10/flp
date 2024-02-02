import type Conveyor from "../../types/Conveyor";
export default function $$<Value, Next>(value: Value, next: Next): <Return>(call: Conveyor<Return, Value, Next>) => Return;
