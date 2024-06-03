import maybe, {nothing} from "./Monad/maybe.js"
import promise from "./Monad/promise.js"
import right from "./Monad/right.js";

console.log(JSON.stringify({ a: nothing }));

//var inc = x => x + 1;
//var i = 0;
//// var iter = 1524;
//var iter = 10000000;

//var cases = 0;

//// var timerA = (x) => right(x);
//var timerA = (x) => promise((resolve) => setTimeout(resolve, x, x))
//// var timerA = (x) => promise(right(x));
//var timerB = (x) => new Promise((resolve) => setTimeout(resolve, x, x))

//// timerA(11)(inc)(inc)(inc)(console.log);
////
  //var a = timerA(0);
//var b = timerB(0);

//(() => {
  //  var time = performance.now();
  //  var check = (x) => console.log(performance.now() - time, x);
  //  switch (cases) {
    //    case 0: {
      //      for (i = 0; i < iter; i++) a = a(inc);
      //      a(check);
      //      break;
      //    }
    //    case 1: {
      //      for (i = 0; i < iter; i++) b = b.then(inc);
      //      b.then(check);
      //      break;
      //    }
    //  }
  //})();
