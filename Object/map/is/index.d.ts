export default function mapIs<Values extends Record<PropertyKey, any>>(values: Values): {
  [key in keyof Values]: (value: Values[Key]) => boolean
};
