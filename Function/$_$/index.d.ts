import type Conveyor from "../../types/Conveyor";
import type Lambda from "../../types/Lambda";
export default function $_$<X, Z>(x: X, z: Z): <O, Y>(call: Conveyor<Lambda<O, X>, Y, Z>) => Lambda<O, Y>;
