const stringCompression = require('./1.6');

test('expect stringCompression("abc") to return "abc".', () => {
  expect(stringCompression('abc')).toMatch(/abc/);
});

test('expect stringCompression("abbcccdddd") to return "a1b2c3d4"', () => {
  expect(stringCompression('abbcccdddd')).toMatch(/a1b2c3d4/);
});

test('expect stringCompression("aabbcc") to return "aabbcc"', () => {
  expect(stringCompression('aabbcc')).toMatch(/aabbcc/);
});

