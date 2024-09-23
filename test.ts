import concat from "./AsyncIterable/concat";
import $ from "./$";

const array = $(Array);
const dd = array.map((x: number) => x * 2);

concat([1, 2])("dsa").then((x) => console.log(x));
