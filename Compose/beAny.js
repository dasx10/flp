import paramArrayLikeFunctions from "../.validator/paramArrayLikeFunctions.js";

var beAny = paramArrayLikeFunctions((tests) => (value) => {
  var length = tests.length,
      index  = 0
  ;
  while (index < length) if (tests[index++](value)) return true;
  return false;
});

export default beAny;
export var beAny = beAny;
