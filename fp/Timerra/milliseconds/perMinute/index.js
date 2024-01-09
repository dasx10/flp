import secondsToMilliseconds from "../../seconds/toMilliseconds/index.js";
import xSecondsPerMinute     from "../../seconds/xPerMinute/index.js";

var millisecondsPerMinute = xSecondsPerMinute(secondsToMilliseconds);
export default millisecondsPerMinute;
