var {iterator,asyncIterator}=Symbol;
var map=(y)=>(x)=>(
  (iterator in x)
    ?({
     [iterator]:function*(){var i;for(i of x)yield ("then" in Object(i))?i.then(y):y(i)},
     [asyncIterator]:async function*(){var i;for await(i of x)yield y(i)},
    })
  :
  (asyncIterator in x)
   ? ({ [asyncIterator]:async function*(){for await(var i of x)yield y(i)} })
   : ({ [asyncIterator]:async function*(){for await(var i of await x)yield y(i)} })
)
;

export default map;
export var then=(resolve)=>resolve(map);
