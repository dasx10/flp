export default function at<Index extends number>(index: Index):<Values extends readonly any[]>(values: Values) => Values[Index] | null;
