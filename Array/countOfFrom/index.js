import inc from "../../Number/inc/index.js";
export default (create) => (value) => (values) => values.reduce((create, next) => next === value ? inc(create) : create, create);
