const isUnique = require('./1.1');

test("expect 'abcdefghijklmnopqrstuvwxyz' to return true", () => {
  expect(isUnique('abcdefghijklmnopqrstuvwxyz')).toBe(true);
});