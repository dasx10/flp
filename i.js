import allTrust from "./Async/allTrust.js";
import anyTrust from "./Async/anyTrust.js";
import raceTrust from "./Async/raceTrust.js";
import when from "./Logic/when.js";
import {left} from "./Monad/either.js";
import promise from "./Monad/promise.js";
import right from "./Monad/right.js";

var delay = (ms) => x => promise((resolve) => setTimeout(() => resolve(x), ms));


var _when = right(when);
var _bool = right(Boolean);
var _log  = right(console.log);


var whenTrue = when(Boolean);
var _whenTrue = right(whenTrue);

var is = allTrust([
  right(1),
  delay(100)(2),
]);

var log = right(console.log);

left(3)((x) => x, x => x)
_whenTrue(log)(allTrust([delay(1)(1)]))
