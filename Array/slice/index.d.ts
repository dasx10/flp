declare var slice
     : <Next   extends number>(next: Next)
    => <Value  extends number>(value: Value)
    => <Values extends readonly any[]>(values: Values[]) => Value[number][]

export default slice;
