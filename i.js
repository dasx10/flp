import _ from "./index.js";

const log = (x) => (console.log(x), x);
const _log = _(log);

const _ifElse = _.lazy("Logic/ifElse");
const _gt     = _.lazy("Logic/gt");
const _dec    = _.lazy("Math/dec");
const _inc    = _.lazy("Math/inc");

const _take = _.lazy("Iterable/take");

_take(_(3))([1, 2, 3, 4])(Array.from)(log)
