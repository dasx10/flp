import memoize     from "./Decorators/memoize/index.js";
import memoizeWeak from "./Decorators/memoizeWeak/index.js";
import prop from "./Object/prop/index.js";


var isFunction = (value) => typeof value === "function";
var _all       = (values) => Promise.all(values.map(async));
var all        = memoizeWeak(_all);

var exec = (call, value) => isFunction(call)
  ? Array.isArray(value) ? all(value).then(call) : call(value)
  : value(call)
;

var list = memoizeWeak((values) => Object.setPrototypeOf((call) => async(all(values).then(call)), {
  then              : (resolve, reject) => list(all(values).then(resolve, reject)),
  catch             : (reject)          => list(all(values).catch(reject)),
  finally           : (resolve)         => list(all(values).finally(resolve)),
  constructor       : async,
  values            : () => values,
  valueOf           : () => values,
  toString          : () => `[${values.join(", ")}]`,
  [Symbol.iterator] : () => values[Symbol.iterator](),
}));

var awaitRecord = memoizeWeak((value) => _all(Object.values(value)).then((values) => Object.keys(value).reduce((create, key, index) => ((create[key] = values[index]), create), {})));

var record = memoizeWeak((entries) => Object.setPrototypeOf((call) => async(awaitRecord(entries).then(call)), {
  then        : (resolve, reject) => record(awaitRecord(entries).then(resolve, reject)),
  catch       : (reject)          => record(awaitRecord(entries).catch(reject)),
  finally     : (resolve)         => record(awaitRecord(entries).finally(resolve)),
  constructor : async,
}));

var def = memoizeWeak((call) => {
  var create = Object.setPrototypeOf((value) => async(value).then((value) => call(value)), {
    then        : (resolve) => async(resolve((value) => (value && [async, Promise].includes(value.constructor)) ? (value.then(call)) : (call(value)))),
    catch       : ()        => create,
    finally     : (resolve) => (resolve(), create),
    constructor : async,
  });

  return create;
});

var value = (is) => {
  var create = Object.setPrototypeOf((call) => async(call).then((call) => call(is)), {
    then                 : (resolve) => async(resolve(is)),
    catch                : (reject)  => create,
    finally              : (resolve) => (resolve(), create),
    constructor          : async,
    valueOf              : () => is,
    toString             : () => String(is),
    [Symbol.toPrimitive] : () => is
  });

  return create;
}

export var async = (call) => {
  if (call) switch (call.constructor) {
    case async    : return call;
    case Function : return def(call);
    case Array    : return list(call);
    case Object   : return record(call);
    case Number   :
    case String   :
    case Boolean  :
    case Date     :
    case RegExp   :
    case BigInt   :
      return value(call);
  }

  return Object.setPrototypeOf((value) => async(Promise.all([call, async(value)]).then(([call, value]) => exec(call, value))), {
    then        : (resolve, reject) => async(Promise.resolve(call).then(resolve, reject)),
    catch       : (reject)          => async(Promise.resolve(call).catch(reject)),
    finally     : (resolve)         => async(Promise.resolve(call).finally(resolve)),
    constructor : async,
  });
};

export var wget = async((url) => async(fetch(url).then((response) => response.text())));

var propDef = prop("default");

export var load = memoize((name) => async(import(`./${name}/index.js`).then(propDef)));

export var lazy = memoize((name) => {
  var done = [];

  var is = Object.setPrototypeOf((value) => load(name)(value), {
    then        : (resolve) => load(name).then(resolve),
    catch       : (reject)  => is,
    finally     : (resolve) => (done.push(resolve), is),
    constructor : async,
  });

  return is;
});

export default Object.setPrototypeOf(async, {
  load,
  lazy,
  wget,
});
