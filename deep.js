var deep=(k)=>(x)=>k.reduceRight((x,k)=>({[k]:x}),x);export default deep;export var then=(resolve)=>resolve(deep);
