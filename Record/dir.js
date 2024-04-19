var o=(x)=>()=>x,y=o('['+'"'),z=o('"'+']'),r=o("return"+" "+"x");export default(x)=>new Function("x",r()+y()+x.join(z()+y())+z());
