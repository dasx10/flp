Reflect.setPrototypeOf(Promise.prototype, Object.assign({
  apply: function (call) {
    return Promise.all([this, call]).then(([value, exec]) => exec(value));
  },
  call: function (next) {
    return Promise.all([this, next]).then(([exec, value]) => exec(value));
  },
}, Reflect.getPrototypeOf(Promise.prototype)));
