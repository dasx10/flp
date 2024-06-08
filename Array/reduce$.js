export default(z)=>(x)=>(y)=>x.reduce((o,i)=>z(o)(i),y);
