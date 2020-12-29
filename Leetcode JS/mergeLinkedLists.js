class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

var mergeTwoLists = function (l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let current1 = l1;
  let current2 = l2;

  let node = new ListNode();
  let head = node;
  if (current1.val > current2.val) {
    node.val = current2.val;
    current2 = current2.next;
  } else {
    node.val = current1.val;
    current1 = current1.next;
  }

  while (current1 || current2) {
    if (!current1) {
      node.next = new ListNode(current2.val);
      current2 = current2.next;
      node = node.next;
    } else if (!current2) {
      node.next = new ListNode(current1.val);
      current1 = current1.next;
      node = node.next;
    } else {
      if (current1.val < current2.val) {
        node.next = new ListNode(current1.val);
        current1 = current1.next;
        node = node.next;
      } else {
        node.next = new ListNode(current2.val);
        current2 = current2.next;
        node = node.next;
      }
    }

  }

  return head;

};