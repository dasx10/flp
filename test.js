import some from "./some";
import size from "./Iterable/size.js";
import keys from "./keys.js";
import filter from "./Iterable/filter.js";
import map from "./Iterable/map.js";

var gt4 = x => x > 4;
var gts4 = filter(gt4);
var arr = Array.from({ length: 10 }, (_, i) => i);
var arr2 = keys(arr);
var arr3 = gts4(arr2);
var arr4 = gts4(arr2);

console.log(Array.from(map(Boolean)(filter(gt4)(arr))));
