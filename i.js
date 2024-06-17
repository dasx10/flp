import add from "./Math/add.js";
import maybe, {nothing} from "./Monad/maybe.js";
import _ from "./index.js";

var log = x => (console.log(x), x);
maybe(1).then(log).then(log);
// nothing.then(x => console.log(x));

