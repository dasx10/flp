import asSome from "./Async/asSome.js";
import promise from "./Monad/promise.js";
import right from "./Monad/right.js";

var delay = (ms) => (x) => promise((resolve) => setTimeout(resolve, ms, x));

var now = Date.now();

var a = asSome([
  right(0),
]);
a((x) => console.log(Date.now() - now, x), console.error)
