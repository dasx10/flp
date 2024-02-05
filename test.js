import async, { lazy, load, wget } from './index.js';

var log    = async((value) => ((console.log(value)), value));


var pipeAsync = lazy("Composition/pipeAsync");
var pipe       = lazy("Composition/pipe");
var inc        = lazy("Number/inc");
var reduce     = lazy("Array/reduce");
var add        = load("Number/add");
var sub        = lazy("Number/sub");
var map        = lazy("Array/map");
var find       = lazy("Array/find");
var gt         = lazy("Number/gt");
var eq         = lazy("Number/eq");
var where      = lazy("Object/where");
var prop       = lazy("Object/prop");
var dir        = lazy("Object/dir");
var props      = lazy("Object/props");
var sum        = lazy("Array/sum");
var where      = lazy("Object/where");
var tap        = lazy("Decorators/tap");

var _prop = async(key => value => value[key]);

// log(prop("a")({ a: 2 }))

var userPost = pipe([
  (id) => wget("https://jsonplaceholder.typicode.com/posts" + "/" + id),
  JSON.parse,
  prop("userId"),
  (id) => wget("https://jsonplaceholder.typicode.com/users" + "/" + id),
  JSON.parse,
  log,
])(1)

