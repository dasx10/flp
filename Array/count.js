var count=(y)=>(x)=>x.reduce((i,x)=>y(x)?i+1:i,0);export default count;export var then=(resolve)=>resolve(count);
