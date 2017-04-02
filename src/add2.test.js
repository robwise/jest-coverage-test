import add2 from './add2';

test('it works', () => {
  const actual = add2(2);
  const expected = 4;

  expect(actual).toBe(expected);
});
