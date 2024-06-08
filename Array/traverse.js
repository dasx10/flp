export default(y)=>(x)=>x.reduce((o,i)=>y(o)(i));
