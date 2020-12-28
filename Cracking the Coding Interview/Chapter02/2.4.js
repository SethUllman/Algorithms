//Write code to partition a linked list around a value x, such that all nodes 
//less than x come before all nodes greater than or equal to x(IMPORTANT: The 
//partition element x can appear anywhere in the "right partition"; it does not 
//need to appear between the left and right partitions. The additional spacing 
//the example below indicates the partition.)

//EXAMPLE

//Input: 3 => 5 => 8 => 5 => 10 => 2 => 1 [partition = 5]
//Output: 3 => 1 => 2     =>       5 => 5 => 10 => 8

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

module.exports = partition = (node, x) => {
  let head = node;
  let tail = node;

  while(node != null){
    let next = node.next;
    if(node.value < x){
      let newNode = new Node(node.value);
      newNode.next = head;
      head = newNode;
    } else {
      let newNode = new Node(node.value);
      tail.next = newNode;
      tail = newNode
    }
    node = next;
  }
  tail.next = null;
  
  return head;

}