import multiplyAndDivideBy1 from './multiplyAndDivide';

test('it works', () => {
  const actual = multiplyAndDivideBy1(1);
  const expected = 1;

  expect(actual).toBe(expected);
});
