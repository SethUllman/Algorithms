//Given two strings, write a method to decide if one is a permutation of the other.

function checkPermutation(string1, string2) {
  if (string1.length != string2.length) return false;

  let charHash1 = {};
  let charHash2 = {};

  for(let i = 0; i < string1.length; i++){
    const char1 = string1[i];
    const char2 = string2[i];

    if(charHash1[char1] == undefined) charHash1[char1] = 0;
    if(charHash2[char2] == undefined) charHash2[char2] = 0;

    charHash1[char1]++;
    charHash2[char2]++;
  }

  for(let j = 0; j < string1.length; j++){
    const currentChar = string1[j];
    if(charHash1[currentChar] != charHash2[currentChar]) return false;
  }

  return true;
}

module.exports = checkPermutation;