import type ArgumentUInt from "../Types/ArgumentUInt";
export default function paginate<Limit extends number>(limit: ArgumentUInt<Limit>): <Page extends number>(page: ArgumentUInt<Page>) => <Values extends readonly any[]>(values: Values) => readonly Values[number][];
