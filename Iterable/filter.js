var filter=(y)=>(x)=>({[Symbol.iterator]:function*(){var i;for(i of x)if(y(i))yield i}});export default filter;export var then=(resolve)=>resolve(filter);
