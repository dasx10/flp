import memo     from "../../../Decorators/memo/index.js"
import memoWeak from "../../../Decorators/memo/weak/index.js"
var propMemo = memo(key => memoWeak(value => value[key]));
export default propMemo;
