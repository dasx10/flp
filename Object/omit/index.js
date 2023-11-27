var omit = keys => value => {
  var is = false;
  var created = Object.create(null);
  for (var key in value) (keys.includes(key) ? (is = true) : (created[key] = value[key]));
  return (is === true) ? created : value;
}

export default omit;
