import curry2 from "../../../Function/curry2/index.js";
import _mutationConcat from "../internal/concat/index.js";

var mutationConcat = curry2(_mutationConcat);
export default mutationConcat;

