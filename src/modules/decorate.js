export const decorate = (array, style = '') => {
  switch (style) {
    case 'red':
      return `\x1b[31m${array.join('')}\x1b[0m`;
    case 'bold':
      return `\x1b[1m${array.join('')}\x1b[22m`;
    default:
      return array.join('');
  }
};

export const getDecoratedString = (params) => {
  if (!params) return '';
  const { string, wordsToDecorate } = params;
  if (!wordsToDecorate) return params;
  const mapping = (phrase) => {
    for (let i = 0; i < wordsToDecorate.length; i += 1) {
      if (phrase === wordsToDecorate[i].word) {
        return decorate([phrase], wordsToDecorate[i].style);
      }
    }
    return phrase;
  };
  return string.split(' ').map(mapping).join(' ');
};
