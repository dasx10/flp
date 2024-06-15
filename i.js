import allTrust from "./Async/allTrust.js";
import anyTrust from "./Async/anyTrust.js";
import raceTrust from "./Async/raceTrust.js";
import {left} from "./Monad/either.js";
import promise from "./Monad/promise.js";
import right from "./Monad/right.js";

var delay = (ms) => x => promise((resolve) => setTimeout(() => resolve(x), ms));

allTrust([
  right(1),
  right(2),
  left(3),
  right(3),
  // delay(1000)(2),
  // delay(1000)(2),
  delay(200)(0),
  // delay(1000)(0),
  // right(1),
])(console.log, console.error)
