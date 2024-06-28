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

const log = (x) => (console.dir(x), x);
const _log = _(log);

var lt=(y)=>(x)=>x<y;
var gt=(y)=>(x)=>x>y;

_log(
  whereOrAsync({
    x: _(lt(10)),
    y: _(lt(10)),
    z: _(Promise.reject(3)),
  })
  ({
    x: _(1),
    y: _(22),
    z: 0,
  })
)
