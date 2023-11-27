var filter = call => values => new Promise((resolve) => {
  var create = [];
  values.forEach((value) => Promise.resolve(value).then((is) => call(is) && create.push(value)));
  Promise.all(values).finally(() => resolve(Promise.all(create)));
});

export default filter;
