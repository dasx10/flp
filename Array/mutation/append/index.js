/**
  * @template {Value} Value
  * @param {Value} value
  * @returns {(values: Value[]) => Value[]}
  */
var mutationAppend = value => values => (values.push(value), values);
export default mutationAppend;
