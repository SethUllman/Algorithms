const removeDups = require('./2.1');

class ListNode { 
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


test('expect ListNode to be a ListNode', () => {
  const node1 = {
    value: 6, next: null
  }
  expect(new ListNode(6)).toEqual(node1);
});

test('expect Node.next to return the next value', () => {
  let n = new ListNode(5);
  n.next = new ListNode(10);

  const node2 = {
    value: 5, next: {
      value: 10, next: null
    }
  }

  expect(n).toEqual(node2);
})

test('expect removeDups to remove duplicates from list', () => {
  const linkedList1 = {
    value: 1, next: {
      value: 2, next: {
        value: 1, next: {
          value: 3, next: {
            value: 2, next: {
              value: 3, next: null
            }
          }
        }
      }
    }
  };

  const linkedList2 = {
    value: 1, next: {
      value: 2, next: {
        value: 3, next: null
      }
    }
  }
  expect(removeDups(linkedList1)).toEqual(linkedList2)
});