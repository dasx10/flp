import async, { lazy, load, wget } from './index.js';

var log = async((value) => ((console.log(value)), value));

var pipeAsync = lazy("Composition/pipeAsync");
var pipe      = lazy("Composition/pipe");
var inc       = lazy("Number/inc");
var reduce    = lazy("Array/reduce");
var add       = load("Number/add");
var sub       = lazy("Number/sub");
var map       = lazy("Array/map");
var find      = lazy("Array/find");
var gt        = lazy("Number/gt");
var eq        = lazy("Number/eq");
var where     = lazy("Object/where");
var prop      = load("Object/prop");
var dir       = lazy("Object/dir");
var props     = lazy("Object/props");
var sum       = lazy("Array/sum");
var where     = lazy("Object/where");
var tap       = lazy("Decorators/tap");
var concat_   = lazy("String/concat_");

var startOfMonthNow = lazy("Date/startOfMonthNow");
var setHours        = lazy("Date/setHours");

pipe([
  startOfMonthNow,
  setHours(12),
  log,
])()

var _prop = async(key => value => value[key]);

// log(prop("a")({ a: 2 }))

(async () => {
  var userId     = prop("userId");

  {
    console.log("start async data")

    // START
    var jsonParse = async(JSON.parse);
    var url       = "https://jsonplaceholder.typicode.com/";
    var jsonGet   = pipe([concat_(url), wget, jsonParse]);
    var userById  = pipe([concat_("users/"), jsonGet]);

    console.time("get");
    var post     = jsonGet("posts/1");
    var user     = userById(userId(post));
    var comments = jsonGet("posts/1/comments");
    var photos   = jsonGet("photos");
    var todos    = jsonGet("todos");
    var albums   = jsonGet("albums");
    // END



    await Promise.all([post, user, comments, photos, albums, todos]).then(() => console.timeEnd("get"));
  }


  {
    console.log("start async function ")
    console.time("get2");

    // START
    const responsePosts    = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const jsonPosts        = await responsePosts.json();
    const responseUsers    = await fetch("https://jsonplaceholder.typicode.com/users/" + jsonPosts.userId);
    const jsonUsers        = await responseUsers.json();
    const responseComments = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const jsonComments     = await responseComments.json();
    const responsePhotos   = await fetch("https://jsonplaceholder.typicode.com/photos");
    const jsonPhotos       = await responsePhotos.json();
    const responseTodos    = await fetch("https://jsonplaceholder.typicode.com/todos");
    const jsonTodos        = await responseTodos.json();
    const responseAlbums   = await fetch("https://jsonplaceholder.typicode.com/albums");
    const jsonAlbums       = await responseAlbums.json();
    // END

    console.timeEnd("get2");
  }
})()

