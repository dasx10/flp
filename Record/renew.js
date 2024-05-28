export default(y)=>{var z=Object.entries(y);return(x)=>Object.fromEntries(z.map(({0:i,1:o})=>[i,o(x)]))};
