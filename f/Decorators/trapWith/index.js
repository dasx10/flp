import second from "../../Array/second/index.js";
export default (test) => (call) => {
  var values = [];
  return (value) => {
    var is = values.find((is) => test(is[0])(value));
    return (is && second(is)) || ((is = call(value).finally(() => values.splice(values.findIndex((is) => test(is[0])(value)), 1))), values.push([value, is]), is);
  };
};
