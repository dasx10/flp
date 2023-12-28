import y from "./index.js";
import "./Polyfill/index.js";

const {
  find,
  filter,
  map,
} = y.Array;

Promise.all([
  find, filter, map
]).then(([find, filter, map]) => {
  var f = find(x => x > 6)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var ff = filter(x => x > 6)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  var fff = map(String)([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  console.dir({ f, ff, fff });
});
