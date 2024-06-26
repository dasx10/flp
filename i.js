import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";

var log = x => (console.log(x), x);
var _log = _(log);
var one = _(1);

_log(one);
_log(maybe(1))

// nothing.then(x => console.log(x));

