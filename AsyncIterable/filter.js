import toArray from "./.toArray.js";
import right from "../Monad/right.js";

var filter=(y)=>(
  ("then" in y)
    ? (x) => (
      (Symbol.iterator in x)?({
        [Symbol.asyncIterator]:async function*(){
          var i,e=right(y);
          for(i of x)(await e(i))&&(yield i);
        },
        then: toArray,
      })
      :
      (Symbol.asyncIterator in x)?({
        [Symbol.asyncIterator]:async function*(){
          var i,e=right(y);
          for await(i of x)(await e(i))&&(yield i);
        },
        then: toArray,
      })
      :
      ({
        [Symbol.asyncIterator]:async function*(){
          var i,e=right(y),o=await x;
          if (Symbol.iterator in o) for(i of o)(await e(i))&&(yield i);
          else for await(i of o)(await e(i))&&(yield i);
        },
        then: toArray,
      })

    )
    : (x) => (
      (Symbol.iterator in x)?({
        [Symbol.asyncIterator]:async function*(){
          var i,r;
          for(i of x)("then" in Object(r="then" in Object(i)?i.then(y):y(i)))?(await r):(r)&&(yield i);
        },
        then: toArray,
      })
      :
      (Symbol.asyncIterator in x)?({
        [Symbol.asyncIterator]:async function*(){
          var i,r;
          for await(i of x)("then" in Object(r=y(i))?(await r):r)&&(yield i)
        },
        then: toArray,
      })
      :
      ({
        [Symbol.asyncIterator]:async function*(){
          var i,r,o=await x;
          if (Symbol.iterator in o) for(i of o)("then" in Object(r="then" in Object(i)?i.then(y):y(i)))?(await r):(r)&&(yield i);
          else for await(i of o(Symbol.asyncIterator))("then" in Object(r=y(i))?(await r):r)&&(yield i);
        },
        then: toArray,
      })
   )
);

export default filter;
export var then=(resolve)=>resolve(filter);
