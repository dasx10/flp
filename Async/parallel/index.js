var parallel = values => then => {
  var size = values.length, key = 0;
  values.reduce((created, call, index) => (call((is) => (created[index] = is, ++key === size && then(created))), created), new Array(size));
  return values;
}

export default parallel;
