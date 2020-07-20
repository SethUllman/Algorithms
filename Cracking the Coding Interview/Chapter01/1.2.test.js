const checkPermutation = require('./1.2');


test("expect 'ABC', 'BCA' to return true", () => {
  expect(checkPermutation('ABC', 'BCA')).toBe(true)
});

test("expect 'ABC', 'DEF' to return false", () => {
  expect(checkPermutation('ABC', 'DEF')).toBe(false)
});

test("expect 'ABC', 'BCD' to return false", () => {
  expect(checkPermutation('ABC', 'BCD')).toBe(false)
});

test("expect 'ABC', 'abc' to return false", () => {
  expect(checkPermutation('ABC', 'abc')).toBe(false)
});