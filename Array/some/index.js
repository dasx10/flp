/**
  * @template {Parameters<Array["some"]>} Call
  * @param {Call} call
  */
var some = call =>
  /**
    * @template {readonly Parameters<Call>[0][]} Values
    * @param {Values} values
    * @returns {boolean}
    */
  values => values.some(call);

export default some;
