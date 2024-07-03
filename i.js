import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";
import whereAsync from "./Async/whereAsync.js";
import anyTrust from "./Async/anyTrust.js";
import collector from "./Async/collector.js";
import all from "./Async/all.js";
import promise from "./Monad/promise.js";
import whereNot from "./Record/whereNot.js";
import whereOrAsync from "./Async/whereOrAsync.js"
import trap from "./Async/trap.js";

const log = (x) => (console.dir(x), x);
const _log = _(log);

const _add = _.lazy("Math/add");
const _pipe = _.lazy("Compose/pipe");
const one = _(1);

/**
  * @param {number} x
  */
const inc = x => x + 1
const _inc = _add(one);

_log(
  _pipe([
    _inc,
    _inc,
  ])(one)
);
