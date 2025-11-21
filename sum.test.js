const sum = require('./sum');

test('adds 1 + 3 to equal 4', () => {
  expect(sum(1, 3)).toBe(4);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers correctly', () => {
  expect(sum(-1, -2)).toBe(-3);
});

