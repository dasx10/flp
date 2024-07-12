export default(k)=>(y)=>(x)=>({...x,[k]:y(x[k])});
