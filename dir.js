var o=(x)=>()=>x,y=o('['+'"'),z=o('"'+']'),r=o("return"+" "+"x");
var dir=(x)=>new Function("x",r()+y()+x.join(z()+y())+z());
export default dir;export var then=(resolve)=>resolve(dir);
