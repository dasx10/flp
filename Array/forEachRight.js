export default(y)=>(x)=>x.reduceRight((x,z)=>(y(z),x),x);
