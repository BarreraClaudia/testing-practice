import { caesarCipher } from '../caesarCipher';

test('takes string "hi" with a shift of 2 and returns string "jk" ', () => {
  expect(caesarCipher('hi', 2)).toBe('jk');
});

test('takes string "xyz" with a shift of 3 and returns "abc" ', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('has case preservation. takes string "HeLLo" with a shift of 3 and returns "KhOOr" ', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('punctuation, spaces, and other non-alphabetical characters should remain unchanged.', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
