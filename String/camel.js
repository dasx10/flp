export default(x)=>x.replace(/[^a-z\d]+(.)/g,(_,c)=>c.toUpperCase());
