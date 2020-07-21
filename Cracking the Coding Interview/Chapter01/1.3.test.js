const URLify = require('./1.3');

test('Expect "Mr John Smith      ", 13 to output "Mr%20John%20Smith', () => {
  expect(URLify('Mr John Smith      ', 13)).toBe('Mr%20John%20Smith')
});