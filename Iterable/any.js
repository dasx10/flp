var any=(y)=>(x)=>{var z,i;for(i of x)if(z=y(i))return z;return z};export default any;export var then=(resolve)=>resolve(any);
