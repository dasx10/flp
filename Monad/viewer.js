import { left, right } from "./either.js";

var then = (then) => (then.then = then);
var id = (x) => x;

var viewer = (call) => {
  var values = [];
  var freeze = 0;

  var value = then((right = id, left = id) => viewer((resolve = id, reject = id) => values.push((value) => value((value) => resolve(right(value)), (error) => reject(left(error)))))
  );

  call(
    (then) => ((value = right(then)), values.forEach((call) => call(value)), values = null),
    (then) => ((value = left(then)),  values.forEach((call) => call(value)), values = null)
  );

  return then((resolve = id, reject = id) => (freeze || (call(
    (done)  => (value = right(done), freeze = 0),
    (error) => (value = left(error), freeze = 0)
  ), freeze = 1), value(resolve, reject)));
};

export default viewer;
