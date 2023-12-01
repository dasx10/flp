export default (some) => (test) => (call) => (value) => (values) => {
  var create = value;
  return (
    some(
      ((value, index, values) => test(value, index, values) || (create = call(create)(value, index, values), false))
      (values)
    ),
    create
  );
};
