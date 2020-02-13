// 1. Two Sum

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length-1; i++){
    let int1 = nums[i];
    for (let j = i+1; j < nums.length; j++){
      let int2 = nums[j];
      if (int1 + int2 === target) return [i, j];
    }
  }
}

// 2. Add Two Numbers

// You are given two non - empty linked lists representing two non - negative integers.The digits are stored in reverse order and each of their nodes contain a single digit.Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//   Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const addTwoNumbers = (list1, list2) => {
  const newList = [];
  for (let i = 0; i < list1.length; i++){
    newList.push(list1[i] + list2[i]);
  }
  return newList;
}