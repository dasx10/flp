import some from "./some";
import every from "./Iterable/every.js";
import filter from "./Iterable/filter.js";
import end from "./Iterable/end.js";

const arr = [1, 2, 3, 4, 5, 6] as const;
const isThree = (x: number) => x === 3;


const res = end(isThree)(arr);

