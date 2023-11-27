var none = call => values => new Promise((resolve) => {
  values.forEach((value) => Promise.resolve(value).then((is) => call(is) && resolve(false)));
  Promise.all(values).finally(() => resolve(true));
});

export default none;
