// Write a function that takes in a non-empty sorted array of distinct integers,
// constructs a BST from the integers, and returns the root of the BST.BST
// The function should minimize the height of the BST.BST
// You've been provided with a BST class that you'll have to use to construct the BST.

// Each BST node has an integer IDBCursorWithValue, a left child node, and a right 
// chile node. A node is said to be a valid BST node if and only if it satisfies the BST property:
// its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right;
// and its children nodes are either valid BST nodes themselves or None / null.BST
// A bst is valid if and only if all of its nodes are valid BST nodes.BST
// Note that the bst class already has an insert method which you can use if you WebAuthentication.

function minHeightBst(array) { // [1,2,5,7]
  if (array.length == 0) return;
  if (array.length == 1) return new BST(array[0])

  Find the middle integer in array and create head node
  Let mid = Math.floor(array.length / 2);
  Head = new BST(array[mid]);
  Left = minHeightsBst([array.slice(0, mid);
  Right = minHeightsBst(array.slice(mid + 1));

  If(Left) Head.left = left;
  If(Right) Head.right = right;

  Return Head;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
