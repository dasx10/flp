import type MustUInt from "../Types/MustUInt";
export default function paginate<Limit extends number>(limit: MustUInt<Limit>): <Page extends number>(page: MustUInt<Page>) => <Values extends readonly any[]>(values: Values) => readonly Values[number][];
