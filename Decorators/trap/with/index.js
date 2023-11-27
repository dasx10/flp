import firstX from "../../../Array/first/x/index.js";
import second from "../../../Array/second/index.js";

var trapWith = test => call => {
  var values = [];
  return value => {
    var exec = firstX(test(value));
    var is = values.find(exec);
    return (is && second(is)) || ((is = call(value).finally(() => values.splice(values.findIndex(exec), 1))), values.push([value, is]), is);
  };
};

export default trapWith;
