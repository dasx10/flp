var filterByKey = call => value => {
  var key, created = Object.create(null);
  for (key in value) (call(key)) && (created[key] = value[key]);
  return created;
};

export default filterByKey;
