import right from"./right.js";var o=(x)=>(x.then=x),id=(x)=>x,bimap=(y)=>o((x)=>right(x.then?x.then(id,y):x(id,y)));
export var left=(x)=>{var y=o(x&&x.then?(_,e)=>right(x.then(e,e)):(_,e)=>right(e?e.constructor===Function?e(x):x(e):y));return y;}
export var alt=(y)=>o((x)=>right(x.then?x.then(id,()=>y):x(id,()=>right(y))));
export default Object.setPrototypeOf(bimap,{left,right,alt});export{default as right}from"./right.js";
