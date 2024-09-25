import future from "../Monad/future.js";
import right from "../Monad/right.js";

var array = new Proxy((...values) => right(values), {
  get: (target, key) => key in target ? Reflect.get(target, key) : future((resolve) => import(`./${key}.js`).then(resolve)),
});

export default array;
