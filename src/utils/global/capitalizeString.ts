export const capitalizeString = ([firstLetter, ...restOfWord]: string): string =>
  `${firstLetter.toUpperCase()}${restOfWord.join('').toLowerCase()}`;
