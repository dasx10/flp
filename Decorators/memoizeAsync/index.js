import trap from "../trap/index.js";
export default (call) => {
  var map = new Map();
  return trap((key) => map.get(key) || call(key).then((value) => (map.set(key, Promise.resolve(value)), value)));
};
