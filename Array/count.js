export default(y)=>(x)=>x.reduce((i,x)=>y(x)?i+1:i,0);
