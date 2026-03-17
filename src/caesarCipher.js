export function caesarCipher(string, shift) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  return string
    .split('')
    .map((char) => {
      const isUpperCase = char === char.toUpperCase();
      const index = alphabet.indexOf(char.toLowerCase());

      // not a letter (space, punctuation, etc.) return as-is
      if (index === -1) return char;

      const newIndex = (index + shift) % 26;
      const newChar = alphabet[newIndex];

      return isUpperCase ? newChar.toUpperCase() : newChar;
    })
    .join('');
}
