import type Index from "../types";
export default function indexes<Values extends readonly any[]>(values: Values): Index<Values>[];
