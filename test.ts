import {CreateDeep} from "./createDeep";
import path from "./Record/path";

const ab = path(["a", "b"] as const)
const c = ab({ a: { b: 1 }})
