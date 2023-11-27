var reduce = call => value => values => new Promise((resolve, reject) => (
  values.reduce((create, next) => Promise.all([
    create,
    Promise.resolve(next),
  ])
    .then(values => call(values[1])(values[0])).catch(reject), Promise.resolve(value)
  ).then(resolve)
));

export default reduce;
