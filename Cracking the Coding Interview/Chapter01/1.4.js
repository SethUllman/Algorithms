//Given a string, write a function to check if it is a permutation of a palindrome. 
//A palindrome is a word or phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters. The palindrome does not need to 
//be limited to just dictionary words. you can ignore casing and non-letter characters.

//EXAMPLE
//Input:   Tact Coa
//Output:  True (permutations: "taco cat", "atco cta", etc)

function PalindromePermutation(string){

  let alph = 'abcdefghijklmnopqrstuvwxyz';

  let newString = [];

  for(let j = 0; j < string.length; j++){
    let current = string[j];
    if(alph.includes(current.toLowerCase())) newString.push(current.toLowerCase());
  }
  
  let permutationsArray = Permutations(newString.join(''));

  for(let i = 0; i < permutationsArray.length; i++){
    let perm = permutationsArray[i];
    if(perm == perm.split('').reverse().join('')) return true;
  }

  return false;
}

function Permutations(string) {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i)
      continue;

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of Permutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray;
}

module.exports = PalindromePermutation;