import nth from "./Iterable/nth.js";
import flatMap from "./Iterable/flatMap.js";
console.log(
  Array.from(
    flatMap((x) => x)([1, 2, [3, 4], new Set([5, 5, 6])])
  )
)
