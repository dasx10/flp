import Function from "../Function/Function.js";
import Object   from "./Object.js";

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;

if (!(
  getOwnPropertyDescriptors                          &&
  getOwnPropertyDescriptors.constructor === Function &&
  getOwnPropertyDescriptors.length      === 1        &&
  getOwnPropertyDescriptors.name        === "getOwnPropertyDescriptors"
)) getOwnPropertyDescriptors = null;

export default getOwnPropertyDescriptors;

