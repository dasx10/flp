import _ from "./index.js";

// import inc from "./Math/inc.js";


const one = _(1);

const log  = (x) => (console.log(x), x);
const _log = _(log);

// const _map = _.import("Array/map");
import map from "./Async/map.js";
var _map = _(map);

const arr = [11, 2];

var _inc   = _.import("Math/inc");
var _prop  = _.import("Record/prop");
var _userAge = _prop(_("age"));
var _userAges  = _map(_userAge);

var users = [{ name: "John", age: 22 }, {name: "Kate", age: 21 }];
var _users = _(users);

_log(_userAges(_users));


