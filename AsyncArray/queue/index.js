var queue = length => call => {
  const values = [];
  var index = 0;
  const exec = () => {
    if (values.length > 0) {
      values.shift()().finally(exec);
    } else {
      index--;
    }
  }

  return value => {
    if (index < length) {
      index++;
      return call(value).finally(exec);
    }

    return new Promise((resolve, reject) => {
      values.push(() => call(value).then(resolve).catch(reject));
    });
  }
}
