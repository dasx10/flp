var keys=(x)=>(x&&x.keys)?x.keys():({[Symbol.iterator]:function*(){var i;for(i in x)yield i}});export default keys;export var then=(resolve)=>resolve(keys);
