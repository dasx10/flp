export default (name) => new Proxy(new Map, {
  get     : (target, key) => target.get(key) || (target.set(key, (target = import("." + "/" + name + "/" + key + "/" +"index.js").then((value) => value.default))), target),
  has     : (target, key) => target.has(key),
  ownKeys : (target) => Array.from(target.keys()),
});
