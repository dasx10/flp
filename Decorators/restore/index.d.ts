import type Monoid from "../../types/Monoid";
export default function restore<Value>(test: Monoid<Value>): <Call extends (value: Value) => Next>(call: Call) => Call;
