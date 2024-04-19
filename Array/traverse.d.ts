import type Conveyer from "../../Types/Conveyer";

export default function traverse<Return, Property, Next>(call: Conveyer<Return | Property, Property, Next>): <Values extends readonly Next[]>(values: Values) => <Value extends Return | Property>(value: Value) => Return;
