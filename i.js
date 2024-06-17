import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";

var one = _(1);
var two = _(2);
var _log = _(console.log);
var _add = _.lazy("Math/add");

Promise.resolve(1).then([1])

nothing.then([1])
void async function() {
  try {
    var c = await maybe(null)(x => x + 1);
    console.dir({ c }, { depth: 10 })
  } catch (e) {
    console.dir({ e }, { depth: 10 })
  }
}()

_log(_add(one)(two))
