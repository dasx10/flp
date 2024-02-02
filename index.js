import memoize     from "./Decorators/memoize/index.js";
import prop from "./Object/prop/index.js";


var isFunction = (value) => typeof value === "function";
var exec       = (call, value) => isFunction(call) ? Array.isArray(value) ? Promise.all(value).then(call) : call(value) : value(call);

export var async = (call) => (
  Object.setPrototypeOf((value) => async(Promise.all([call, value]).then(([call, value]) => exec(call, value))), {
    then    : (resolve, reject) => async(Promise.resolve(call).then(resolve, reject)),
    catch   : (reject)          => async(Promise.reject(call).catch(reject)),
    finally : (resolve)         => async(Promise.resolve(call).finally(resolve)),
    ap      : (next)            => async(Promise.all([next, call]).then(([next, call]) => next(next, call))),
  })
);

var get  = (url)  => async(fetch(url).then((response) => response.text()));

var load = memoize((name) => async(import(`./${name}/index.js`).then(prop("default"))));

export default Object.setPrototypeOf(load, {
  async,
  get,
});
