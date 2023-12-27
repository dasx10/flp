export default function dimensioning<Call extends (values: readonly any[]) => readonly Parameters<Call>[number][]>(call: Call): Call;
