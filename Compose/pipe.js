var pipe=(y)=>(y&&y.reduce&&y.reduce.constructor===Function)?(x)=>x.reduce((x,y)=>y(x),x):(x)=>{var i;for(i of y)i(x);return x};export default pipe;export var then=(resolve)=>resolve(pipe);
