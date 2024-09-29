var mark = (value) => (values) => {
  var index = values.indexOf(value);
  return index < 0 ? values.concat([value]) : values.slice(0, index).concat(values.slice(index + 1));
};

export default mark;
export var then = (resolve) => resolve(mark);
