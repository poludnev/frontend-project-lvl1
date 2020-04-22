export const randNum = (first = 0, last = 100) => Math.floor(Math.random() * last + first);

export const decorate = (string, color = 'red') => {
  switch (color) {
    case 'red':
      return `\x1b[31m${string}\x1b[0m`;
    case 'blue':
      return `\x1b[34m${string}\x1b[0m`;
    case 'yellow':
      return `\x1b[33m${string}\x1b[0m`;
    default:
      return null;
  }
};
