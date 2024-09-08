var every=(y)=>(x)=>{var i;for(i of x)if(y(i))continue;else return false;return true;};export default every;export var then=(resolve)=>resolve(every);
