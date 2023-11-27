var findKey = call => value => {
  var key;
  for (key in value) if (call(value[key])) return key;
};

export default findKey;
