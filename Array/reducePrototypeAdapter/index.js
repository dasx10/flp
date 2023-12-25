export default ((prototype) => ((call) => ((value) => {
  switch (call(value).length) {
    case 0  :
    case 1  : return ((values) => (prototype.call(values, ((value, next)                => (call(value)(next))),                (value))));
    case 2  : return ((values) => (prototype.call(values, ((value, next, index)         => (call(value)(next, index))),         (value))));
    default : return ((values) => (prototype.call(values, ((value, next, index, values) => (call(value)(next, index, values))), (value))));
  };
})));
