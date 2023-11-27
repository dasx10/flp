var filterWith = call => value => {
  var is, key, create = Object.create(null);
  for (key in value) (call(is = value[key])(key)) && (create[key] = is);
  return create;
}

export default filterWith;
