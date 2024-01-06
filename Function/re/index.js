import memoizeWeak from "../../Decorators/memoizeWeak/index.js";
var map = (new Map);
export default memoizeWeak((call) => {
  var key = (call.toString());
  return ((map.get(key)) || ((map.set(key, call)), (call)));
});
