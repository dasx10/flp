import future from "./Monad/future.js";
import right from "./Monad/right.js";

var values = new Map();

const load = (key) => values.get(key) || values.set(key, right(import("./" + key + ".js").then(m => m.default))).get(key)
const lazy = (key) => values.get(key) || values.set(key, future((resolve) => import("./" + key + ".js").then(m => resolve(m.default)))).get(key)

var _ = new Proxy(right, {
  get(target, key) {
    switch (key) {
      case "load": return load;
      case "lazy": return lazy;
      default: return target[key];
    }
  }
});
export default _;
