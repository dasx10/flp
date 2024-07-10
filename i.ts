import _ from "./index.js";

import inc from "./Math/inc.js";
import map from "./Array/map.js";
import {Right} from "./Monad/either.js";


const one = _(1);

const log  = (x) => (console.log(x), x);
const _log = _(log);

const _map = _.import("Record/where");

const arr = [1, 2];

const incs = _map(_.import("Math/inc"));

const a =  incs<number[], number[]>(arr)
;

a(x => x)

const b = map(inc)([1, 2])

