var throttle = next => {
  var key, is = 0;
  return (call) => {
    switch (is) {
      case 0  : return (call(), is++, key = setTimeout(function () { is = 0 }, next));
      case 1  : return (is++, clearTimeout(key), key = setTimeout((call) => (is = 0, call())));
      default : return key;
    };
  };
};

var throttle = next => {
  var value;
  var is;
  return (call) => {
    if (value && Date.now() < is) return value;
    value = call();
    is = Date.now() + next;
    return value;
  }
}

export default throttle;
