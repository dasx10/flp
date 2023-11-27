var find = (includes, key, values, value) => {
  var length = values.length;
  var index  = includes.size;
  if (index < length) {
    var set = values[index];
    var is  = set[key];
    includes.set(is, set);
    if (is === value) return set;
    while (++index < length) {
      set = values[index];
      is  = set[key];
      includes.set(is, set);
      if (is === value) return set;
    }
  }
}

export default key => values => {
  var includes = new Map();
  return value => includes.get(value) || find(includes, key, values, value);
};
