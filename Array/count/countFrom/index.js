import inc from "../../Number/inc/index.js";

var countFrom = size => test => values => values.reduce((size, value) => test(value) ? inc(size) : size, size);
export default countFrom;
