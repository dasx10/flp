export default function sliceRight<Value extends number>(value: Value)
   : <Next extends number>(next: Next)
  => <Values extends readonly any[]>(values: Values[]) => Value[number][]
