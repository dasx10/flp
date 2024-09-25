import _ from "./index.js";
import map from "./Array/map.js";

import { Either, Left, left } from "./Monad/either.js";


const oncing = map((): 1 => 1);
const a = oncing([1, 2, 3]);

const add3 = _.math.add((3));
const adds = _.array.map(add3);
const arrs = _.array(1, 2, 3)

var x: Left<1>

var aaaa: Either<PromiseLike<1>, 2>

const res = adds(arrs);
(async () => {
  const bb = _.array.map(_.math.add(3))([1, 2, 3]);
  const aa = await bb
});
