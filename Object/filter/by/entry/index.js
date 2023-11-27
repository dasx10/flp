var filterByEntry = call => value => {
  var key, is, create = Object.create(null);
  for (key in value) (call([key, is = value[key]])) && (create[key] = is);
  return create;
};

export default filterByEntry;
