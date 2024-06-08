import all from "./Async/all.js";
import right from "./Monad/right.js";
all([
  right(1),
  right(2),
  right(3),
  right(4),
  right(5),
  right(6),
  right(7),
  right(8),
  right(9),
  right(10),
])(console.log)
