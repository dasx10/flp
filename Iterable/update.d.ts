import type Lambda from "../Types/Lambda";
export default function update<X>(call: Lambda<any, X>): <Y>(y: Y) => <X1 extends X>(x: Iterable<X1>) => Generator<X1, Y, void> | Generator<X1 | Y, void, void>;;
