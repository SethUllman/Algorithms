const URLify = require('./1.3');

test('Expect "Mr John Smith      ", 13 to output "Mr%20John%20Smith', () => {
  expect(URLify('Mr John Smith      ', 13)).toBe('Mr%20John%20Smith')
});

test('Expect "a b c d e f g", 13 to return a%20b%20c%20d%20e%20f%20g', () => {
  expect(URLify('a b c d e f g', 13)).toBe('a%20b%20c%20d%20e%20f%20g')
})

test('Expect "abcdefg", 7 to return abcdefg', () => {
  expect(URLify('abcdefg', 13)).toBe('abcdefg')
})