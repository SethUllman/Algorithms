// Write a method to replace all spaces in a string with '%20'. 
//You may assume that the string has sufficient space at the end to hold 
//the additional characters, and that you are given the "true" length of the string.

//EXAMPLE
//Input: 'Mr John Smith      ', 13
//Output: 'Mr%20John%20Smith'

function URLify(string, length) {
  let newString = [];

  for(let i = 0; i < length; i++){
    let current = string[i];
    if (current == ' '){
      newString.push('%20');
    } else {
      newString.push(current);
    }
  }

  return newString.join('');
}

module.exports = URLify;