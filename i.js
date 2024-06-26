import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";

var log = x => (console.log(x), x);
var _log = _(log);
var one = _(1);

var _pipe = _.lazy("Compose/pipe");

var c = _pipe(_([
  (x => x + 1),
  (x => x + 1),
]))(_(2))

_log(c);
_log(maybe(1))

// nothing.then(x => console.log(x));

