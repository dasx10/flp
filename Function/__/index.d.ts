import Conveyor from "../../../types/Conveyor";
import type Lambda from "../../../types/Lambda";
export default function __<X>(x: X): <Return, Z, Y>(call: (z: Z) => (y: Y) => (x: X) => Return) => Conveyor<Return, Y, Z>;
