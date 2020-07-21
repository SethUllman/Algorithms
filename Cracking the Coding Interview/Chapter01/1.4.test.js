const PalindromePermutation = require('./1.4');

test('expect "Tact Coa" to return true', () => {
  expect(PalindromePermutation("Tact Coa")).toBe(true)
});

test('expect "abcde" to return false', () => {
  expect(PalindromePermutation("abcde")).toBe(false)
});

test('expect "a" to return true', () => {
  expect(PalindromePermutation("a")).toBe(true)
});

test('expect "$Tact *&Coa" to return true', () => {
  expect(PalindromePermutation("$Tact *&Coa")).toBe(true)
});