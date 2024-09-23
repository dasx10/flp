import right from "../Monad/right.js";
var {iterator}=Symbol;
var _fromAsync = Array.fromAsync || async function (asyncItearble) {
  var values = [];
  var value;
  for await (value of asyncItearble) values.push(value);
  return values;
}

var fromAsync = (values) => right("then" in values
  ? values.then(fromAsync)
  : (iterator in values)
    ?Promise.all(values)
    :_fromAsync(values)
);

export default fromAsync
