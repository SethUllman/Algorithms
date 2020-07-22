const PalindromePermutation = require('./1.4');

test('expect "Tact Coa" to return true', () => {
  expect(PalindromePermutation("Tact Coa")).toBe(true)
});

test('expect "abc" to return false', () => {
  expect(PalindromePermutation("abc")).toBe(false)
});

test('expect "a" to return true', () => {
  expect(PalindromePermutation("a")).toBe(true)
});

test('expect "$a &a" to return true', () => {
  expect(PalindromePermutation("$a &a")).toBe(true)
});