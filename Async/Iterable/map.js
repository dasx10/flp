import toArray from "./.toArray.js";

var map=(y)=>(x)=>(
  (Symbol.iterator in x)?({
    [Symbol.iterator]:function*(){var i;for(i of x)yield ("then" in Object(i))?i.then(y):y(i)},
    [Symbol.asyncIterator]:async function*(){var i;for await(i of x)yield y(i)},
    then: toArray,
  })
  :
  (Symbol.asyncIterator in x)?({
    [Symbol.asyncIterator]:async function*(){for await(var i of x)yield y(i)},
    then: toArray,
  })
  :
  ({
    [Symbol.asyncIterator]:async function*(){for await(var i of await x)yield y(i)},
    then: toArray,
  })
)
;

export default map;
export var then=(resolve)=>resolve(map);
