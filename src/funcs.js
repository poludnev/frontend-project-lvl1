export const randNum = (first = 0, last = 100) => Math.floor(Math.random() * last + first);

export const decorateRed = (string) => `\x1b[31m${string}\x1b[0m`;
