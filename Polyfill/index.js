Reflect.setPrototypeOf(Promise.prototype, Object.assign({
  apply: function (call) {
    return Promise.all([this, call]).then((values) => values[1](values[0]));
  },
  call: function (next) {
    return Promise.all([this, next]).then((values) => values[0](values[1]));
  },
}, Reflect.getPrototypeOf(Promise.prototype)));
