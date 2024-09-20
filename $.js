import memoize from "./Decorator/memoize.js";

var prototype = memoize((target) => memoize((property) => (typeof target.prototype[property] === "function")
  ? (...args) => (instance) => (target.prototype[property]||instance[property]).apply(instance, args)
  : property in target.prototype
    ? (instance) => instance[property]
    : target[property]
));

var $ = memoize(function (constructor) { return new Proxy(constructor, {
  get (target, property) {
    return prototype(target)(property)
  },
})});

export default $;
