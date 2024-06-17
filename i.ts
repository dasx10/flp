import {nothing} from "./Monad/maybe";
import _ from "./index";

const one = _(1);
const two = _(2);

const _log = _(console.log);
const _add = _.lazy("Math/add");

const c = _add(one)(two);

_log(c)
