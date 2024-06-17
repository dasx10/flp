import _ from "./index.js";

var one = _(1);
var two = _(2);
var _log = _(console.log);
var _add = _.lazy("Math/add");

_log(_add(one)(two))
