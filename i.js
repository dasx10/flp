import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";
import whereAsync from "./Async/whereAsync.js";
import anyTrust from "./Async/anyTrust.js";
import collector from "./Async/collector.js";
import all from "./Async/all.js";
import promise from "./Monad/promise.js";

// nothing.then(x => console.log(x))

const log = (x) => (console.dir(x), x);
const _log = _(log);
// const _pipe = _.lazy("Compose/pipe");

// const _add = _.lazy("Math/add");

const _gt = _.lazy("Logic/gt");
const _gt3 = _gt(_(3));

const test = whereAsync(({
  x : _gt3,
  y : _(Promise.reject("error")),
  z : _gt3,
  o : _gt3,
}));

// const _4 = _(4);

var delay = ms => x => promise(res => setTimeout(() => res(x), ms, x));
var delay1s = delay(1000);
var _gt2 = _(x => x < 2);

var s4 = delay1s(4);

test({
  x: 5,
  y: 5,
  z: delay1s(8),
  o: 30,
})(console.log, console.error);



// (async () => {

  //   const a = await Promise.any([
    //     // Promise.resolve(4),
    //     nothing,
    //     maybe(2),
    //     _(3),
    //   ]);

  //   console.dir({ a }, { depth: 10 })
  // })()
