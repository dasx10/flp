export default function*keys<Key>(value: { [key in Key]: any }): Generator<Key, void, void>;
