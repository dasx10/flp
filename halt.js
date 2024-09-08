var halt=(y)=>(x)=>{if(x==null)return false;var k;for(k in y)if(y[k](x[k]))return false;return true;};export default halt;export var then=(resolve)=>resolve(halt);
