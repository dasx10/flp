var mutationAdd = index => value => values => {
  var created = values.splice(0, index);
  values.push(value);
  values.push.apply(values, created);
  return values;
}

export default mutationAdd;
