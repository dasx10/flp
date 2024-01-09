export default ((call) => (value) => {
  for (var key in value) call(value[key], key, value);
  return (value);
});
