import _ from "./index";

const _add = _.import("Math/add");

const log  = <X>(x: X): X => (console.log(x), x);
const _log = _(log);
const one = _(1);
const two = _(2);

const _inc = _add(one);


const b = _log(_inc(one));
