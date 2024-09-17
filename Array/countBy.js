var countBy=(y)=>(x)=>x.reduce((i,x,k)=>(i[k=y(x)]=(i[k]||0)+1,i),{});
export default countBy;export var then=(resolve)=>resolve(countBy);
