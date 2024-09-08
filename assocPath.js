var assocPath=(z)=>(y)=>(x)=>({...x,...z.reduceRight((n,k,i,z)=>({...z.slice(0,i).reduce((x,k)=>((x!=null)&&(k in x))?x[k]:null,x),[k]:n}),y)});
export default assocPath;export var then=(resolve)=>resolve(assocPath);
