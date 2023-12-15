Reflect.setPrototypeOf(Promise.prototype, Object.assign({
  then    : Promise.prototype.then,
  catch   : Promise.prototype.catch,
  finally : Promise.prototype.finally,
  apply   : function (call) {
    return Promise.all([this, call]).then((values) => values[1](values[0]));
  },
  call: function (next) {
    return Promise.all([this, next]).then((values) => values[0](values[1]));
  },
}, Reflect.getPrototypeOf(Promise.prototype)));
