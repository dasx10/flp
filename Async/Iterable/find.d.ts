import type { Just, Nothing } from "../Monad/maybe";
import type MayAsyncIterable  from "../Types/MayAsyncIterable";
import type MayPromiseLike    from "../Types/MayPromiseLike";

export default function find<X>(test: MayPromiseLike<(x: X) => any>): <Y extends X>(y: MayAsyncIterable<Y>) => Just<Y> | Nothing;
export var then:(resolve: (module: typeof find) => any) => any;
