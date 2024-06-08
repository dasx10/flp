export default(x)=>(z)=>(y)=>x.reduce((o,i)=>z(o)(i),y);
