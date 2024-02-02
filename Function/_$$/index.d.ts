import type Conveyor from "../../types/Conveyor";
import type Lambda from "../../types/Lambda";
export default function _$$<X, Y>(x: X, y: Y): <O, Z>(call: Conveyor<Lambda<O, X>, Y, Z>) => (z: Z) => O;
