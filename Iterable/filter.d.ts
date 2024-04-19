import type Lambda from "../Types/Lambda";
import type Predicate from "../Types/Predicate";
import type Narrow from "../Types/Narrow";
export default function filter<Y, X = any>(predicate: Predicate<Y, X>): <Z extends X>(z: Iterable<Z>) => Generator<Narrow<Z, Y>, void, void>;
export default function filter<X>(call: Lambda<any, X>): <Y extends X = X>(y: Iterable<Y>) => Generator<Y, void, void>;
