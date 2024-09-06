import right from"./Monad/right.js";
import future from "./Monad/future.js";

var modules = new Map();

var async = ((functor) => (value) => right(value)((value) => functor((exec) => right(value)(exec))));

var load = (path) => modules.get(path) || modules.set(path, async(future((resolve, reject) => import(path).then(resolve, reject)))).get(path);

var ArrayModules = new Proxy(right(Array.from), {
  get(_, key) {
    return load(`./Array/${key}.js`);
  }
});

var _ = new Proxy(right, {
  get(_, key) {
    switch (key) {
      case "Array" : return ArrayModules;
      default      : return load(`./${key}.js`);
    }
  }
});

export default _;
