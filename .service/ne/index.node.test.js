import create from "./.createUnitTest.js";
const testArray = Array.from({ length: 10 }, (_, index) => index);
create(ne(), testArray.flatMap((value) => [Boolean(value), value, String(value)]));
