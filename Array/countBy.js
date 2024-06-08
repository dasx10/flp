export default(y)=>(x)=>x.reduce((i,x,k)=>(i[k=y(x)]=(i[k]||0)+1,i),{});
