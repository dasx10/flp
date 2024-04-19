export default function prop<Key extends PropertyKey>(key: Key): {
  <Property>(value: { [key in Key]: Property }): Property;
  <Property>(value: { [key in Key]?: Property }): Property | undefined;
}
