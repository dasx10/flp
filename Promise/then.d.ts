import type Await  from "../Types/Await";
import type Lambda from "../Types/Lambda";

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
export default function then<Return, Value>(call: Lambda<Return, Value>): <Value>(value: PromiseLike<Value>) => Await<Return>;
