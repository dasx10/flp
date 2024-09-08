var map=(y)=>(x)=>({[Symbol.iterator]:function*(){var i;for(i of x)yield y(i)}});export default map;export var then=(resolve)=>resolve(map);
