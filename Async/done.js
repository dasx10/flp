import { right, left } from "../Monad/either.js";
export default (call) => (promiseLike) => right(call)((call) => right(promiseLike)((x) => (call(), x), (x) => (call(), left(x))));
