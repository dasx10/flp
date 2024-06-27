import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";
import whereAsync from "./Async/whereAsync.js";
import anyTrust from "./Async/anyTrust.js";
import collector from "./Async/collector.js";
import all from "./Async/all.js";

// nothing.then(x => console.log(x))

const log = (x) => (console.dir(x), x);
const _log = _(log);
const _pipe = _.lazy("Compose/pipe");

const _add = _.lazy("Math/add");

const test = whereAsync(({
  x : _.lazy("Logic/gt")(3),
  y : _.lazy("Logic/gt")(2),
  z : _(x => x === 22)
}));

test(({
  x : 11,
  y : 12,
  z : 22,
}))(console.log)

// (async () => {

  //   const a = await Promise.any([
    //     // Promise.resolve(4),
    //     nothing,
    //     maybe(2),
    //     _(3),
    //   ]);

  //   console.dir({ a }, { depth: 10 })
  // })()
