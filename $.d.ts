export default function $<X extends { new (...args: any): any }>(x: X): ({
  [key in keyof X["prototype"]]: X["prototype"][key] extends (...args: infer A) => infer R
    ? <Y extends X["prototype"], Return extends ReturnType<Y[key]> & R>(...args: Parameters<Y[key]> & A) => (x: Y) => Return
    : <Instance extends X["prototype"]>(x: Instance) => Instance[key]
}) & X;
