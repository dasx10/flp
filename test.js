import _ from "./index.js";

var _value = _(3)
var _arr   = _.array(1, 2, 3, 4, 5, 6, 7, 8);
var _gt3   = _.logic.is(_value);
var _gts3  = _.array.filter(_gt3);
var _res   = _gts3(_arr);

_res(x => x.length)

const next = _.array.prepend(_value)(_res);
next(x => x[0])(x => x)


