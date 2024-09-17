var count=(y)=>(x)=>{var i=0,o;for(o of x)y(o)&&i++;return i};export default count;export var then=(resolve)=>resolve(count);
