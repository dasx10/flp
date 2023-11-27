var findKeyByEntry = call => value => {
  for (var key in value) if (call([key, value[key]])) return key;
}

export default findKeyByEntry;
