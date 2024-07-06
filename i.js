import _ from "./index.js";

import inc from "./Math/inc.js";
import map from "./Array/map.js";


const one = _(1);

const log  = (x) => (console.log(x), x);
const _log = _(log);

const _map = _.import("Array/map");

const arr = [1, 2];

const a =   _map(
    _.import("Math/add")(1)
  )(
    arr
  )
;

a(x => x)

const b = map(inc)([1, 2])

