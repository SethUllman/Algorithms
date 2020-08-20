//Implement an algorithm to find the kth to last element of a singly linked list.

const returnKthLast = (linkedList, k) => {
  let nodes = [linkedList];

  let nextNode = linkedList.next;

  while(nextNode != null){
    nodes.push(nextNode);
    nextNode = nextNode.next;
  }

  return nodes[nodes.length-k];
}

module.exports = returnKthLast;