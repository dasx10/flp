/**
  * @template {(value: any) => any} Call
  * @param {Call} call
  */
var forEachRight = call =>
  /**
    * @template {readonly Parameters<Call>[0][]} Values
    * @param {Values} values
    */
  values => values.reduceRight((values, value) => (call(value), values), values);

export default forEachRight;
