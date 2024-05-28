import { left, right } from "./either.js";
import viewer from "./viewer.js";

var then = (then) => (then.then = then);

var visitor = (call) => {
  var values = [];
  var freeze = 0;
  return then((resolve, reject) => {
    (freeze || (call(
      (resolved) => (values.forEach((call) => call(right(resolved))), values.length = 0, freeze = 0),
      (rejected) => (values.forEach((call) => call(left(rejected))), values.length = 0, freeze = 0)
    ), freeze = 1));
    return viewer((fulfilled, rejected) => values.push((value) => value((value) => fulfilled(resolve(value)), (error) => rejected(reject(error)))));
  });
};

export default visitor;
