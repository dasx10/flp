import nth from "./nth.js";
var at = (index) => index < 0
  ? (values) => {
    var key = values.length + index;
    return key < 0 ? undefined : values[key];
  }
  : nth(index)
;
export default at;
export var then=(resolve)=>resolve(at);
