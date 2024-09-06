var end=(y)=>(x)=>({[Symbol.iterator]: function*(){var o;for(o of x){if(y(o))return o;yield o}}});export default end;export var then=(resolve)=>resolve(end);
