export default function dimensioning<Call extends (values: readonly any[]) => readonly Parameters<Call>[0][number][]>(call: Call): Call;
