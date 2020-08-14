const stringRotation = require('./1.9.js');

test('expect stringRotation(cow, woc) to return true', () => {
  expect(stringRotation('cow', 'owc')).not.toBeNull();
  expect(stringRotation('cow', 'owc')).toBeTruthy();
});

test('expect stringRotation(image, iagem) to return false', () => {
  expect(stringRotation('image', 'iagem')).not.toBeNull();
  expect(stringRotation('image', 'iagem')).toBeFalsy();
});

test('expect stringRotation(string, str) to return false', () => {
  expect(stringRotation('string', 'str')).not.toBeNull();
  expect(stringRotation('string', 'str')).toBeFalsy();
});