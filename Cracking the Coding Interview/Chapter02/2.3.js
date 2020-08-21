//Implement an algorithm to delete a node in the middle (i.e., any node but the 
//first and last node, not necessarily the exact middle) of a singly linked list, 
//given only access to that node.

//EXAMPLE
//input: the node c from the linked list a => b => c => d => e => f
//result: nothing is returned, but the new linked list looks like a => b => d => e => f

const deleteMiddleNode = (node) => {
  let currentNode = node;
  let nextNode = node.next;

  while(nextNode != null){
    currentNode.value = nextNode.value;
    currentNode.next = nextNode.next;
    currentNode = currentNode.next;
    if(nextNode.next == null){
      currentNode.next = null;
      break;
    }

    nextNode = currentNode.next;
  }
}

module.exports = deleteMiddleNode;