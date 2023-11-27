import match from "../../../Logic/match/index.js";
var propAny = keys => value => keys.find(match(value));
export default propAny;
