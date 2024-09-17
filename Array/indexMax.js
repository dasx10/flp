var indexMax=(y)=>{var x=(y.length-1),i;if(x>0){i=x-1;while(i--)(y[x]<y[i])&&(x=i)}return x};export default indexMax;export var then=(resolve)=>resolve(indexMax);
