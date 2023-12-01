import namespace from ".";
import "./Polyfill";

namespace
  .Number
  .add
  .call(Promise.resolve(1))
  .call(2)
  .then(value => value)

namespace
  .Number
  .one
  .call()
  .apply(namespace.Number.add)
  .call(1)
  .apply(Promise.resolve((x) => "" + x))
  .then(value => value)

  // Promise.resolve(1).call(2)

var test = (next: string) => (value: number) => next + value;

Promise.resolve(test).apply(namespace.Array.reduce).call(1).call([1, 2, 3]).then(value => value)
namespace
  .Array
  .reduce
  .call(test)
  .call("dsa")
  .call([1, 2, 3])
  .then((value) => value)

import reduce from "./Array/reduce";

var c = reduce(test)("1")([1, 2, 3])
