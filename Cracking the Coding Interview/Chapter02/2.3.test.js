const deleteMiddleNode = require('./2.3');



test('expect to delete node', () => {
  let linkedList = {
    value: 1, next: {
      value: 2, next: {
        value: 3, next: {
          value: 4, next: {
            value: 5, next: null
          }
        }
      }
    }
  };
  
  const node1 = linkedList.next.next; // value 3

  const alteredList = {
    value: 1, next: {
      value: 2, next: {
        value: 4, next: {
          value: 5, next: null
        }
      }
    }
  }
  deleteMiddleNode(node1);
  expect(linkedList).toEqual(alteredList)
});