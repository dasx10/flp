var avgsBy=(call)=>(values)=>values.length?values.reduce((sum,value)=>sum+call(value))/values.length:NaN;
export default avgsBy;
export var then=(resolve)=>resolve(avgsBy);
