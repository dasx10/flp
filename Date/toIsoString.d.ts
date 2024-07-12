type ISOString = `${number}-${number}-${number}T${number}:${number}:${number}.${number}${string}`;
function toISOString(x: Date): ISOString;
function toISOString<X extends Date>(x: X): ISOString;
