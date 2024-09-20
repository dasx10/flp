import type MustUInt from "../Types/MustUInt";
export default function steps<Z extends number>(z: Z): <Y extends number>(y: Y) => <X extends number>(x: X) => Generator<number, void, void>;
