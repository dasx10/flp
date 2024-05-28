export default(y)=>{var i=(x)=>(y(),x),o=(x)=>(y(),Promise.reject(x));return(x)=>x.then(i,o);}
