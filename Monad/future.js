import { left, right } from "./either.js";
import promise from "./promise.js";

var then = (then) => (then.then = then);

var future = (call) => {
  var values = [];
  var value = then((resolve, reject) => {
    var next = promise((fulfilled, rejected) => values.push((value) => value((value) => fulfilled(resolve(value)), (error) => rejected(reject(error)))));
    call && (call(
      (then) => ((value = right(then)), values.forEach((call) => call(value)), values = null),
      (then) => ((value = left(then)),  values.forEach((call) => call(value)), values = null)
    ), call = null);
    return next;
  });

  return value;
};

export default future;
