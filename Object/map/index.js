var map = call => value => {
  var key, created = Object.create(null);
  for (key in value) created[key] = call(value[key], key, value);
  return created;
}

export default map;
