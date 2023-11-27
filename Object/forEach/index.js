var forEach = call => value => {
  for (var key in value) call(value[key]);
  return value;
};

export default forEach;
