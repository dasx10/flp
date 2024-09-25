import right from "../Monad/right.js";
var {iterator}=Symbol;

var fromAsyncIterator = Array.fromAsync || async function (asyncItearble) {
  var values = [], value;
  for await (value of asyncItearble) values.push(value);
  return values;
};

var fromAsync = (values) => right("then" in values
  ? values.then(fromAsync)
  : (iterator in values)
    ?Promise.all(values)
    :fromAsyncIterator(values)
);

export default fromAsync
