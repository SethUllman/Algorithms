const isUnique = require('./1.1');

test("expect 'abcdefghijklmnopqrstuvwxyz' to return true", () => {
  expect(isUnique('abcdefghijklmnopqrstuvwxyz')).toBe(true);
});

test("expect 'abc' to return true", () => {
  expect(isUnique('abc')).toBe(true);
});

test("expect 'aabbcc' to return false", () => {
  expect(isUnique('aabbcc')).toBe(false);
});