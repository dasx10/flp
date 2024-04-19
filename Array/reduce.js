export default(z)=>(y)=>(x)=>x.reduce((o,i)=>z(o)(i),y);
