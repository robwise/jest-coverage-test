import curriedSum from './curry';

test('it works', () => {
  const actual = curriedSum(2, 2);
  const expected = 4;

  expect(actual).toBe(expected);
})
