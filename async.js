import https       from "node:https";

import pipe        from "./Function/pipe/index.js";
import x           from "./Function/x/index.js";
import first       from "./Array/first/index.js";
import prop        from "./Object/prop/index.js";
import concatRight from "./String/concatRight/index.js";
import flow        from "./Function/flow/index.js";
import maybe       from "./Monads/Maybe/index.js";
import ap from "./Function/ap/index.js";
import xFirst from "./Array/x/first/index.js";

var baseUrl = concatRight("https://dummyjson.com/");

var getRequest = then => path => https.get(baseUrl(path), (response) => {
  var value = "";
  return response
    .on('data', (next) => value += next)
    .on("end", () => then(JSON.parse(value)));
});

var xGetRequest          = x(getRequest);
var toProdCatPath        = concatRight("products/category/");
var toFirstCatPath       = xFirst(toProdCatPath);
var flowFirstCatPath     = flow(toFirstCatPath);
var propProducts         = prop("products");
var propId               = prop("id");
var firstProductId       = pipe([propProducts, first, propId]);
var xFirstProductId      = x(firstProductId);
var toProductsPath       = concatRight("products/");
var toPathFirstProdId    = xFirstProductId(toProductsPath);
var flowProductFirstPath = flow(toPathFirstProdId);
var doLog = flow(first);

doLog(maybe([1, 2]))(console.log);

// USE PIPE
pipe([
  xGetRequest,
  flowFirstCatPath,
  xGetRequest,
  flowProductFirstPath,
  xGetRequest
])
// (maybe(null))
(maybe("products/categories"))
// (console.log);

// USE VARIABLE STEP
// var theCategoriesPath     = ap("products/categories");
// var theCategories         = xGetRequest(theCategoriesPath);
// var theZeroCategoryPath   = flowFirstCatPath(theCategories);
// var theListOfZeroCategory = xGetRequest(theZeroCategoryPath);
// var theOneProductPath     = flowProductFirstPath(theListOfZeroCategory);
// var theOneProduct         = xGetRequest(theOneProductPath);
// theOneProduct(console.log);

// USE LINE
// xGetRequest(
  //   flowProductFirstPath(
    //     xGetRequest(
      //       flowFirstCatPath(
        //         xGetRequest(
          //           ap("products/categories")
          //         )
        //       )
      //     )
    //   )
  // )(console.log)


// INTO BROWSER USE XHR

// var use    = exec => call => then => value => call(exec(then)(value));
// var toExec = exec => call => then => call(value => exec(then(value)));
// var toExec = exec => call => then => call(x(exec)(then));
// var xGetRequest = _theReq => {
  //   return doThen => {
    //     _theReq(theReq => {
      //       var xhr = new XMLHttpRequest();
      //       xhr.open("GET", baseUrl + theReq);
      //       xhr.responseType = "json";
      //       xhr.send();
      //       xhr.onload = () => doThen(xhr.response)
      //     })
    //   };
  // }
//
