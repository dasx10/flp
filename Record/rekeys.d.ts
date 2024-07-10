export default function rekeys<Out extends PropertyKey, In extends PropertyKey>(call: (value: In) => Out): <Value extends Record<In, any>>(value: Value) => Record<Out, Value[In]>
