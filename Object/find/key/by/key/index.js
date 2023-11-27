var findKeyByKey = call => value => {
  for (var key in value) if (call(key)) return key;
}

export default findKeyByKey;
