var sort=(Array.prototype.toSorted?(e)=>(x)=>x.toSorted((x,y)=>e(y)(x)):(e)=>(x)=>Array.from(x).sort((x,y)=>e(y)(x)));export default sort;export var then=(x)=>x(sort);
