// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0, 0, 1, 2, 2, 5, 6] might become[2, 5, 6, 0, 0, 1, 2]).

// You are given a target value to search.If found in the array return true, otherwise return false.

//   Example 1:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 0
// Output: true
// Example 2:

// Input: nums = [2, 5, 6, 0, 0, 1, 2], target = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return nums.includes(target);
};

// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k + 1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.



//   Example 1:

    //     1
    //   2   3
    // 4

// Input: root = [1, 2, 3, 4], x = 4, y = 3
// Output: false
// Example 2:

    //     1
    //   2   3
    // 4       5

// Input: root = [1, 2, 3, null, 4, null, 5], x = 5, y = 4
// Output: true
// Example 3:

   //      1
    //   2   3
    // 4


// Input: root = [1, 2, 3, null, 4], x = 2, y = 3
// Output: false


// Note:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// if root.left & root.right are x and y => false because they share a parent
// 

var isCousins = function (root, x, y) {
  if (!root ) return false;  //return false if no root

  if (root.left && root.right) {
    if ((root.left.val == x && root.right.val == y) || (root.right.val == x && root.left.val == y)) {
      return false; //return false if same parent
    } 
  }
  
  
  if (!root.left && !root.right) { // on the last node
    if (root.val === x || root.val === y) {
      // root has one of the values
      return true;
    } else {
      // root is not x or y
      return false;
    }
  }
  let left;
  if (root.left) left = isCousins(root.left, x, y);
  let right;
  if (root.right) right = isCousins(root.right, x, y);

  if ((left == true && right == false) || (left == false && right == true)) return false;
  if (left == true && right == true) return true;
};

// # Recursive function to find level of Node 'ptr' in
// # a binary tree
// def level(root, ptr, lev):

//   # Base Case
//   if root is None:
//   return 0
//   if root == ptr:
//     return lev

//   # Return level if Node is present in left subtree
//   l = level(root.left, ptr, lev + 1)
//   if l != 0:
//     return l

//   # Else search in right subtree
//   return level(root.right, ptr, lev + 1) 

const isCousins = (root, x, y) => {
  if (!root) return false;
  if (isSiblings(root, x, y)) return false;

  if (level(root, x, 1) == level(root, y, 1) && !isSiblings(root, x, y)) {
    return true;
  } else {
    return false
  }
}

const isSiblings = (root, x, y) => {
  if (!root) return false;
  if (!root.left && !root.right) return false;

  if (root.left && root.right) { // Sibling Case: 
    if ((root.left.val == x && root.right.val == y) || (root.right.val == x && root.left.val == y)) {
      return true;
    }
  }
  if (isSiblings(root.right, x, y) || isSiblings(root.left, x, y)){
    return true;
  }
  return false;
}

const level = (root, ptr, lvl) => {
  if (!root) return 0;
  // if the root is the target return level:
  if (root.val === ptr) return lvl;

  // search left side for target and return level if found:
  let leftRes = level(root.left, ptr, lvl + 1);
  if (leftRes !== 0) return leftRes;

  // else, return right search result 
  return level(root.right, ptr, lvl + 1);
}

// def level(root, ptr, lev):

//   # Base Case
//   if root is None:
//   return 0
//   if root == ptr:
//     return lev

//   # Return level if Node is present in left subtree
//   l = level(root.left, ptr, lev + 1)
//   if l != 0:
//     return l

//   # Else search in right subtree
//   return level(root.right, ptr, lev + 1) 

/*
       1
null      2
        3    5
*/


// def isSibling(root, a, b):

//   # Base Case
//   if root is None:
//   return 0

//   return ((root.left == a and root.right == b) or
//     (root.left == b and root.right == a)or
//   isSibling(root.left, a, b) or
//   isSibling(root.right, a, b)) 
