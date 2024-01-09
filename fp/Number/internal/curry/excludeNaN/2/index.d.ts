export default function curry2<Call extends (value: number, next: number) => any>(call)
   : <Next extends Parameters<Call>[0]>(Next: Next)
  => <Value extends Parameters<Call>[1]>(value: Value) => ReturnType<Call>;
