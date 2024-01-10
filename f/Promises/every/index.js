var every = call => values => new Promise((resolve, reject) => {
  values.forEach((value) => Promise.resolve(value).then((is) => call(is) || resolve(false)));
  Promise.all(values).catch(reject).finally(() => resolve(true));
});

export default every;
