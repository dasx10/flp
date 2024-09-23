import promise from "../../Monad/promise.js";
import right from "../../Monad/right.js";

var{iterator,asyncIterator}=Symbol;

var someIterator=(iterable,call)=>promise((resolve)=>{
  var value,is,done=0,index=0;
  for(value of iterable) {
    if (done) break;
    index++;
    is="then"in value?value.then(call):call(value);
    if(is){
      if("then"in is)is.then((is)=>(is?(done||((done=1),resolve(true))):--index===0&&resolve(false)));
      else {
        done=1;
        return resolve(true);
      }
    }
  }
  return done||(index===0&&resolve(false));
});

var someAsyncIterator=(iterable,call)=>promise(async(resolve)=>{
  var value,is,done=0,index=0;
  for await(value of iterable) {
    if (done) break;
    index++;
    is=call(value);
    if(is){
      if("then" in is)is.then((is)=>(is?(done||((done=1),resolve(true))):--index===0&&resolve(false)));
      else {
        done=1;
        return resolve(true);
      }
    }
  }
  return done||(index===0&&resolve(false));
});

var some=(call)=>(values)=>((iterator in values)
  ?someIterator(values,call)
  :(asyncIterator in values)
    ?someAsyncIterator(values,call)
    :right(values.then((values)=>((iterator in values)
      ?someIterator(values,call)
      :someAsyncIterator(values,call)
    )))
);

export default some;
export var then=(resolve)=>resolve(some);
