export default function $<X extends { new (...args: any): any }>(x: X): ({
  [key in keyof X["prototype"]]: X["prototype"][key] extends Function
    ? <Instance extends X["prototype"]>(...args: Parameters<Instance[key]>) => <Y extends Instance>(x: Y) => ReturnType<Y[key]>
    : <Instance extends X["prototype"]>(x: Instance) => Instance[key]
})
