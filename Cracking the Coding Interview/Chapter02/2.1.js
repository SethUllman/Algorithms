//Write code to remove duplicates from an unsorted linked list

// input: 5 => 2 => 1 => 2 => 3 => 7 => 3 => 1
// output: 5 => 2 => 1 => 3 => 7

const removeDups = (linkedList) => {
  let set = {};
  let head = linkedList;
  let previous = null;

  while(linkedList != null){
    if (set[linkedList.value] == true) {
      previous.next = linkedList.next;
    } else {
      set[linkedList.value] = true;
      previous = linkedList;
    }
    linkedList = linkedList.next;
  }
  return head;
}

module.exports = removeDups;