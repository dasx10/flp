var find=(y)=>(x)=>{var i;for(i of x)if(y(i))return i};export default find;export var then=(resolve)=>resolve(find);
