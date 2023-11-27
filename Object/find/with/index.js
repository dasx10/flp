var findWith = call => value => {
  var is;
  for (var key in value) if (call(is = value[key])(key)) return is;
}

export default findWith;
