/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

//--how to complete in one pass?--
//store nodes in an array as you iterate through
//after completing the iteration you can access the node previous to the one being deleted and reroute it's next value to point towards the node following the delete node
//This would give 0(n) runtime but would give very bad memory due to the large array storing entire linked lists at each index
//Bypass this by using a window, only storing the amount of nodes equal to n+1 since we need the node previous to the one being removed
//As far as Big O is concerrned the window doesn't effect Space complexity. In most cases the window would reduce the amount of nodes being kept but in the worst case scenerio n could be removing the first node in the list which would require us to store all the nodes.
//So in the end out big O analysis give us the following:
//Time 0(n)
//Space 0(n^2)
//not the best but lets give it a try, I predict we will pass most test cases but will exceed our memory usage on a few

var removeNthFromEnd = function (head, n) {
  if (head.next == null) return head.next

  let nodes = []; //[1,2];
  let currentNode = head;

  while (currentNode) { //undefined
    if (nodes.length == n + 1) nodes.shift();

    nodes.push(currentNode);
    currentNode = currentNode.next;
  }

  if (nodes.length < n + 1) return head.next;
  nodes[0].next = nodes[1].next;

  return head;

};