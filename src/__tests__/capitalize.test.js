import { capitalizeFirstChar } from '../capitalize';

test('returns a string with the first char capitalized', () => {
  expect(capitalizeFirstChar('howdy!')).toBe('Howdy!');
});

test('returns a longer string with the first char capitalized', () => {
  expect(capitalizeFirstChar('the fox jumped over a log.')).toBe(
    'The fox jumped over a log.'
  );
});
