import _ from ".";
import {Right} from "./Monad/either";

import map from "./Array/map";
import inc from "./Math/inc";

const incs = map(inc);

const _map = _.import("Array/at");
const _inc = _.import("Math/inc");

const _incs = _map(_inc);

const b = _incs(_([1, 2, 3]));

