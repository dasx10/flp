var concatMany = values => value => value.concat.apply(value, values);
export default concatMany;
