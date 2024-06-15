import asSome from "./Async/asSome.js";
import {left} from "./Monad/either.js";
import promise from "./Monad/promise.js";
import right from "./Monad/right.js";

var delay = (ms) => (x) => promise((resolve) => setTimeout(resolve, ms, x));

var now = Date.now();

var a = asSome([
  right(0),
]);

// var bb = left(3)

var aa = async () => {
  const aw = await a;
  a.then(x => x, x => x)
  const wl = await left(3);
  left(3)(x => x, x => x)

  left(3).then(x => x, x => x)

  const c = await a;
  const cc = await right(10);
  // a(x => x)
  right(1).then(x => x)
  left(2).then(x => x)
  a.then(x => x)
  a(x => x)
  // // bb.then(y => y)
  // a.then(x => x)
}

a((x) => console.log(Date.now() - now, x), console.error)
