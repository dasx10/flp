import type { Just, Nothing } from "../Monad/maybe";
import type MayAsyncIterable  from "../Types/MayAsyncIterable";
import type MayPromiseLike    from "../Types/MayPromiseLike";

/**
  * @example
  * ```javascript
  * var test = function* values() { yield 1; yield 2; yield 3; }
  * var async_test = async function* values() { yield 1; yield 2; yield 3; }
  * find(x => x === 2)(test()) // Just(2)
  * find(x => x === 2)(async_test()) // Just(2)
  * find(x => x === 4)(test()) // Nothing
  * find(x => x === 4)(async_test()) // Nothing
  * find(x => x === 2)([1, 2, 3]) // Just(2)
  * find(x => x === 2)(new Set([1, 2, 3])) // Just(2)
  * find(x => x === 4)([1, 2, 3]) // Nothing
  * find(x => x === 4)(new Set([1, 2, 3])) // Nothing
  * find(x => x === 2)([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // Just(2)
  * find(x => Promise.resolve(x === 2))([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // Just(2)
  * find(x => Promise.resolve(x === 4))([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // Nothing
  * find(x => Promise.resolve(x === 2))([1, 2, 3]) // Just(2)
  * find(x => Promise.resolve(x === 2))(Promise.resolve([1, 2, 3])) // Just(2)
  * find(x => Promise.resolve(x === 4))([1, 2, 3]) // Nothing
  * ```
  * @description Find an element in an iterable. Returns a Just if found, Nothing if not.
  * @function
  * @name find
  * @param {function | PromiseLike<function>} test
  * @returns {function}
  */
export default function find<X>(test: MayPromiseLike<(x: X) => any>): <Y extends X>(y: MayAsyncIterable<Y>) => Just<Y> | Nothing;
export var then:(resolve: (module: typeof find) => any) => any;
