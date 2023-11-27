var keysRename = call => value => {
  var key, created = {};
  for (key in value) created[call(key)] = value[key];
  return created;
};

export default keysRename;
