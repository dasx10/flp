import type Lambda    from "../Types/Lambda";
import type Predicate from "../Types/Predicate";
import type Narrow    from "../Types/Narrow";
export default function reject<Y, X = any>(call: Predicate<Y, X>): <Z extends X = X>(z: Iterable<Z>) => Generator<Exclude<Z, Narrow<Z, Y>>, void, void>;
export default function reject<X>(call: Lambda<any, X>): <Y extends X = X>(y: Iterable<Y>) => Generator<Y, void, void>;
