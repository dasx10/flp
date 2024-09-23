import fromAsync from "./Array/fromAsync.js";
import filter from "./Async/Iterable/filter.js";
import some from "./Async/Iterable/some.js";
import map from "./Async/Iterable/map.js";
import find from "./Async/Iterable/find.js";
import reject from "./Async/Iterable/reject.js";
import reduce from "./Async/Iterable/reduce.js";
import add from "./Math/add.js";
import {right} from "./Monad/either.js";


var delay = (y) => (x) => new Promise((resolve) => setTimeout(resolve, y, x));

var test = [
  delay(1000)(1),
  delay(2000)(2),
  delay(3000)(3),
  delay(4000)(4),
  delay(5000)(5),
  delay(100)(6)
];

const incs = map(x => x + 1)
const strs = map(String);
some(x => x === 7)(test)(console.log);

var ten = right(10)
var log = right(console.log);

var arr = fromAsync(right([1, 2, 3]));
arr.then(console.log);


// reduce((x) => (y) => (x + y))(0)(test).then(console.log);
// all(Promise.resolve(test(5)))(Promise.resolve(console.log));
