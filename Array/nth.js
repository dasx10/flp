import right from "../Monad/right.js";
var nth = (index) => (array) => ((index < array.length) ? (array[index]) : (void 0));
export default nth;
export var then = right(nth);
nth.toAsync = then;
