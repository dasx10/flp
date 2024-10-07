import len from "./len.js";

var last = (values) => {
  var length = len(values);
  return length > 0 ? values[length - 1] : void 0;
}

export default last;
export var then = (resolve) => resolve(last);
