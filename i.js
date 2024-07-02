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
import trap from "./Decorator/trap.js";

const log = (x) => (console.dir(x), x);
const _log = _(log);

var lt=(y)=>(x)=>x<y;
var gt=(y)=>(x)=>x>y;

var delay = (ms) => (x) => promise((resolve) => setTimeout(resolve, ms, x));
var inc = delay(1000)(x => x + 1)

var trapDelay = ms => trap(delay(ms));
var d10 = trapDelay(10);
var a = d10(12);

trap(x => x + 10)(10)(console.log)
a.then(console.log)
