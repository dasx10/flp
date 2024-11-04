import right from "../Monad/right.js";

var range = (start) => function*(end) {
  var index = start;
  if(index < end){
    yield index;
    while((index+=1)<end) yield index;
    yield index
  }
  return end
};

export default range;

var then = right(range);
range.fromAsync = then;
