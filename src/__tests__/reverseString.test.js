import { reverseString } from '../reverseString';

test('takes in a string and returns it reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('takes in a longer string and returns it reversed', () => {
  expect(reverseString('I love drinking coffee.')).toBe(
    '.eeffoc gniknird evol I'
  );
});
