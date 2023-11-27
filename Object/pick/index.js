var pick = keys => value => keys
  .reduce((entries, key) => (entries[key] = value[key], entires), Object.create(null))

export default pick;
