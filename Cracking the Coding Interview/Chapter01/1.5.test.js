const oneAway = require('./1.5');

test('expect (pale, ple) to return true', () => {
  expect(oneAway('pale', 'ple')).toBeTruthy();
});

test('expect (pales, pale) to return true', () => {
  expect(oneAway('pales', 'pale')).toBeTruthy();
});

test('expect (pale, bale) to return true', () => {
  expect(oneAway('pale', 'bale')).toBeTruthy();
});

test('expect (pale, bake) to return false', () => {
  expect(oneAway('pale', 'bake')).toBeFalsy();
});