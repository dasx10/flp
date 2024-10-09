var key = Symbol.for("config");

var defineProperty = Object.defineProperty;

var config = globalThis[key] || (globalThis[key] = {
  _strict : false,
  _save   : false,
});

defineProperty(config, "strict", {
  get() {
    return this._strict;
  },
  set(strict) {
    this._strict = Boolean(strict);
  }
});

defineProperty(config, "save", {
  get() {
    return this._save;
  },
  set(save) {
    this._save = Boolean(save);
  }
});

export default config;
