import right from"./right.js";
import redux from"./.redux.js";

var id = (x) => x;

var bimap = (y) => redux((resolve) => right(
  "then" in resolve ? resolve.then(id,y) : resolve(id,y))
);

export var left = (value) => redux(("then" in Object(value) && ("constructor" in Object(value.then) && value.then.constructor === Function))
  ? ((_, ...next) => ((next.length > 0) ? (right(value.then(next[0], next[0]))) : (left(value))))
  : ((typeof(value)) === "function")
    ? ((_, ...next) => ((next.length > 0) ? (right(((typeof(next[0])) === "function") ? (next[0](value)) : (value(next[0])))) : (left(value))))
    : ((_, ...next) => ((next.length > 0) ? (right(next[0](value))) : (left(value))))
);

export var alt = (y) => redux((resolve)=>right(
  ("then" in Object(resolve) && ("constructor" in Object(resolve.then)) && resolve.then.constructor === Function)
    ? (resolve.then(id, () => y))
    : (resolve(id, () => right(y))
  )
));

export default Object.setPrototypeOf(bimap,{
  left,
  right,
  alt,
});

export {
  right
};
