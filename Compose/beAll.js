import paramArrayLikeFunctions from "../.validator/paramArrayLikeFunctions.js";

var beAll = paramArrayLikeFunctions((tests) => (value) => {
  var length = tests.length,
      index  = 0
  ;
  while (index < length) if (!tests[index++](value)) return false;
  return true;
});

export default beAll;
export var beAny = beAll;
