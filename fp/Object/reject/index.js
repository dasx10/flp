var reject = call => value => {
  var create = Object.create(null);
  for (var key in value) (call(value[key])) || (create[key] = value[key]);
  return create;
}

export default reject;
