import _ from "./index.js";

const log = (x) => (console.log(x), x);
const _log = _(log);

const _ifElse = _.lazy("Logic/ifElse");
const _gt     = _.lazy("Logic/gt");
const _dec    = _.lazy("Math/dec");
const _inc    = _.lazy("Math/inc");

const _gt0       = _gt(0);
const _ifElseGt0 = _ifElse(_gt0);


const _balance = _ifElseGt0(_dec)(_inc);

_log(_balance(10))

