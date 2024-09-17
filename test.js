import _ from "./index.js";
import filter from "./AsyncIterable/filter.js";
import concat from "./AsyncIterable/concat.js";


async function*range (n) {
  for (var i = 0; i < n; i++) yield Promise.resolve(i)
}

(async function () {
  Promise.all([
    import("./Array/filter.js"),
    import("./Array/filter.js")
  ]).then(([filter, filter2]) => {
    console.log(filter === filter2)
  })
})()
