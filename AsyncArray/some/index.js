export default (call) => (values) => new Promise((resolve, reject) => {
  values.forEach((value) => Promise.resolve(value).then((is) => call(is) && resolve(true)));
  Promise.all(values).catch(reject).finally(() => resolve(false));
});
