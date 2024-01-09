/**
  * @template {Value} Value
  * @template {readonly Value[]} Next
  * @param {Value[]} values
  * @param {Next} next
  * @returns {Value[]}
  */
var _mutationConcatRight = (values, next) => (values.unshift.apply(values, next), values);
export default _mutationConcatRight;
