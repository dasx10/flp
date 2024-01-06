export default (map, key, values, value) => {
  var length = values.length;
  var index  = map.size;
  if (index < length) {
    var set = values[index];
    var is  = set[key];
    map.set(is, set);
    if (is === value) return set;
    while (++index < length) {
      set = values[index];
      is  = set[key];
      map.set(is, set);
      if (is === value) return set;
    }
  }
}
