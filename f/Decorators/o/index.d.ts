export default function o<Value, Return>(next: (value: Value) => Return): <CallValue>(call: (value: CallValue) => Value) => (value: CallValue) => Return;
