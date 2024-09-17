import memoize from "./Decorator/memoize.js";
var $ = memoize((constructor) => new Proxy(constructor, {
  get (target, property) {
    return target.prototype[property].constructor !== Function
      ? (instance) => instance[property]
      : (...args) => (instance) => target.prototype[property].call(instance, ...args)
  },
}));

export default $;
