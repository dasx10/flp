var findEntry = call => value => {
  var is;
  for (var key in value) if (call(is = [key, value[key]])) return is;
}
export default findEntry;
