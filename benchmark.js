import maybe from "./Monad/maybe.js"
import promise from "./Monad/promise.js"
import right from "./Monad/right.js";

var inc = x => x + 1;
var i = 0;
// var iter = 1524;
var iter = 10000000;

var cases = 1;

var timerA = (x) => promise((resolve) => setTimeout(resolve, x, x))
// var timerA = (x) => promise((resolve) => resolve(x));
var timerB = (x) => new Promise((resolve) => setTimeout(resolve, x, x))

// timerA(11)(inc)(inc)(inc)(console.log);
//
var a = timerA(0);
var b = timerB(0);

setTimeout(() => {
  var time = performance.now();
  var check = (x) => console.log(performance.now() - time, x);
  switch (cases) {
    case 0: {
      for (i = 0; i < iter; i++) a = a(inc);
      a(check);
      break;
    }
    case 1: {
      for (i = 0; i < iter; i++) b = b.then(inc);
      b.then(check);
      break;
    }
  }
}, 1000);
