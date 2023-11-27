import union2 from "../../../Function/union/2/index.js";
var reduceRight = call => (call = union2(call), value => values => values.reduceRight((value, next) => call(next)(value), value));
export default reduceRight;
