var findByEntry = call => value => {
  var is;
  for (var key in value) if (call([key, is = value[key]])) return is;
};

export default findByEntry;
