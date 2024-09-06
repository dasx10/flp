var keys=(x)=>({[Symbol.iterator]:function*(){var i;for(i in x)yield i}});export default keys;export var then=(resolve)=>resolve(keys);
