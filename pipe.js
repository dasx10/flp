var pipe=(y)=>(x)=>y.reduce((x,r)=>r(x),x);export default pipe;export var then=(r)=>r(pipe);
