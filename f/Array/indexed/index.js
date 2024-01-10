import memoize from "../../Decorators/memoize/index.js";
import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
import findIndexed from "../internal/findIndexed/index.js";
export default memoize((key) => memoizeWeak((values) => {
  var map = new Map();
  return (value) => (map.get(value)) || (findIndexed(map, key, values, value));
}));
