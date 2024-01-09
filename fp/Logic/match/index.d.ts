declare var match: <Test extends Record<PropertyKey, any>>(test: Test) => <Key extends PropertyKey>(key: Key | keyof Test) => Test[Key];
export default match;
