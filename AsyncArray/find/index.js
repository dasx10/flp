var find = call => values => new Promise((resolve, reject) => Promise
  .all(values.map((value) => Promise
    .resolve(value)
    .then((is) => call(is) && resolve(value))))
      .finally(reject)
);

export default find;
