export default(x)=>(y)=>x.reduce((i,x)=>y(x)?i+1:i,0);
