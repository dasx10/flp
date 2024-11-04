import Function from "../Function/Function.js";
import constructor from "../constructor.js";

var Object = (
  constructor({}) ||
  (globalThis && globalThis.Object && globalThis.Object === Function && globalThis.Object.length === 1 && globalThis.Object.name === "Object" && globalThis.Object) ||
  function (value) {
    return value == null ? {}
      : typeof value === "function" || typeof value === "object"
        ? value
        : new value.constructor(value)
  }
);

export default Object;
