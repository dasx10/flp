import right from"./Monad/right.js";
import future from "./Monad/future.js";

var modules = new Map();

var _ = new Proxy(right, {
  get(_, key) {
    return modules.get(key) || modules.set(key, future((resolve, reject) => import(`./${key}.js`).then(resolve, reject))).get(key);
  }
});

export default _;
