var findByKey = call => value => {
  for (var key in value) if (call(key)) return value[key];
}

export default findByKey;
