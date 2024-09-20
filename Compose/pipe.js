var pipe=(y)=>(x)=>y.reduce((x,y)=>y(x),x);export default pipe;export var then=(resolve)=>resolve(pipe);
