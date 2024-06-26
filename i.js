import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";
import collector from "./Async/collector.js";
import all from "./Async/all.js";

// nothing.then(x => console.log(x))

const log = (x) => (console.dir(x), x);
const _log = _(log);
(async () => {
  const a = await collector([nothing, maybe(2)]);
  console.dir({ a }, { depth: 10 })
})()
