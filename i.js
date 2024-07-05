import _ from "./index.js";

const one = _(1);
const two = _(2);

const log  = (x) => (console.log(x), x);
const _log = _(log);
const _add = _.import("Math/add");

const _inc = _add(one);

  _log(_inc(one))
