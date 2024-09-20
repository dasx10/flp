var fromAsync = Array.fromAsync || async function (iterable) {
  var values = [];
  var i;
  for await (i of iterable) values.push(i);
  return values;
}

function toArray(resolve, reject) {
  return fromAsync(this).then(resolve, reject);
}
export default toArray;
export var then = (resolve) => resolve(toArray);
