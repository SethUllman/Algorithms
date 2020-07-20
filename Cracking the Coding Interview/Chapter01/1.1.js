//Implement an algorithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures?

function isUnique(string) {
  let charHash = {};

  for(let i = 0; i < string.length; i++){
    const char = string[i];
    if (charHash[char] == undefined){
      charHash[char] = char;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = isUnique;