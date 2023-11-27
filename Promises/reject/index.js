export default call => values => new Promise((resolve) => {
  var create = [];
  return Promise.all(values.map((value) => Promise.resolve(value)
    .then((is) => call(is) || create.push(value))
  )).finally(() => resolve(Promise.all(create)));
});
