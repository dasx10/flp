import type MayPromiseLike from "../Types/MayPromiseLike";

/**
  * @description Promise.then method
  * @function
  * @name then
  * @param {function} call
  * @returns {Promise}
  * @example
  * ```javascript
  * var _ = (x) => (call) => call(x)
  * var addP = then((module) => module.default)(import("./Math/add.js"))
  * var incP = then(_(1))(addP) // Promise<(x) => x + 1>
  * var resP = then(_(2))(incP) // Promise<3>;
  * ```
  */
export default function then<Return, X>(call: (x: X) => Return): (value: MayPromiseLike<X>) => Promise<Await<Return>>;
