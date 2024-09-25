import future from "../Monad/future.js";
import right from "../Monad/right.js"

var string = new Proxy((value) => right(String(value)), {
  get: (target, key) => key in target ? Reflect.get(target, key) : future((resolve) => import(`./${key}.js`).then(resolve)),
});

export default string;
