export default(y)=>(z)=>(x)=>x.reduce((o,i)=>z(o)(i),y);
