var anywhere=(y)=>(x)=>{var i;for(i in y)if(y[i](x[i]))return true;return false};export default anywhere;export var then=(resolve)=>(resolve(anywhere));
