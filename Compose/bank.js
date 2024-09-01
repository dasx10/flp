var bank=(y)=>(x)=>y.map((y)=>y(x));export default bank;export var then=(x)=>x(bank);
