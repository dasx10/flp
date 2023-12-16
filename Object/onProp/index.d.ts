export default function onProp<Property, Return>(call: (value: Property) => Return)
   : <Key extends PropertyKey>(key: Key)
  => (value: Record<Key, Property>)
  => Return;
