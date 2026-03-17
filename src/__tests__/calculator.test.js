import { calculator } from '../calculator';

test('adds 3 + 5 to equal 8', () => {
  expect(calculator.sum(3, 5)).toBe(8);
});

test('subtracts 10 - 6 to equal 4', () => {
  expect(calculator.subtract(10, 6)).toBe(4);
});

test('divides 84 / 6 to equal 14', () => {
  expect(calculator.divide(84, 6)).toBe(14);
});

test('multiples 9 * 4 to equal 36', () => {
  expect(calculator.multiply(9, 4)).toBe(36);
});
