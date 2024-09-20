// import $ from "./$.js";
import all from "./Async/all.js";
import race from "./Async/race.js";
// import pipe from "./Compose/pipe.js";
// import right from "./Monad/right.js";

async function*test(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

var delay = (y) => (x) => new Promise((resolve) => setTimeout(resolve, y, x));

console.time("all");
all([
  delay(1000)(1),
  delay(2000)(2),
  delay(3000)(3),
  delay(4000)(4),
  delay(5000)(5),
  delay(100)(6)
]).then(() => console.timeEnd("all"));
// all(Promise.resolve(test(5)))(Promise.resolve(console.log));
