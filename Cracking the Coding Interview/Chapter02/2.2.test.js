const returnKthLast = require('./2.2');

const LinkedList = {
  value: 1, next: {
    value: 2, next: {
      value: 3, next: null
    }
  }
}

test('expect to return last node', () => {
  expect(returnKthLast(LinkedList, 1)).toEqual({value: 3, next: null})
});

test('expect to return first node', () => {
  expect(returnKthLast(LinkedList, 3)).toEqual(LinkedList)
});