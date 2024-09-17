var first=(x)=>x[Symbol.iterator]().next().value;export default first;export var then=(resolve)=>resolve(first);
