/**
  * @template {Value} Value
  * @template {readonly Value[]} Next
  * @param {Value[]} values
  * @param {Next} next
  * @returns {Value[]}
  */
var _mutationConcat = (values, next) => (values.push.apply(values, next), values);
export default _mutationConcat;
