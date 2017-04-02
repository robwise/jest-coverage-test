// @flow
import add1 from './add1';

test('it works', () => {
  const actual = add1(1);
  const expected = 2;

  expect(actual).toBe(expected);
});
