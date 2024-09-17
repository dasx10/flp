var forEach=(y)=>(x)=>{var i;for(i of x)y(i);return x};export default forEach;export var then=(resolve)=>resolve(forEach);
