var include = index => value => (values, length) => ((length = values.length) > 0)
  ? index < length
    ? values.slice(0, index).concat([value], values.slice(index, length))
    : values.concat(value)
  : [value];

export default include;
