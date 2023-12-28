export default (name) => {
  var map  = new Map();
  var find = (map, key) => map.get(key) || (map.set(key, (map = import("." + "/" + name + "/" + key + "/" +"index.js").then((value) => value.default))), map);

  return new Proxy((keys) => Promise.all(keys.map((key) => find(map, key))), {
    get     : (target, key) => find(map, key),
    has     : (target, key) => map.has(key),
    ownKeys : (target) => Array.from(map.keys()),
  });
};
