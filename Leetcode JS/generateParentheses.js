// 22. Generate Parentheses
// Medium

// 6950

// 311

// Add to List

// Share
// Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.



//   Example 1:

// Input: n = 3
// Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]


// Constraints:

// 1 <= n <= 8

var generateParenthesis = function (n) {

  let pars = "";
  for (let i = 0; i < n; i++) {
    pars += "()";
  }

  let combos = findPermutations(pars);

  let valid = [];
  combos.forEach(combo => {
    if (isValidPar(combo)) valid.push(combo);
  })

  return valid;

};

var findPermutations = (string) => {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i)
      continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}

const isValidPar = string => {
  let stack = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "(") {
      stack.push(string[i]);
      continue;
    }
    if (string[i] == ")" && stack[stack.length - 1] == "(") {
      stack = stack.slice(0, stack.length - 1);
    } else {
      return false;
    }
  }
  return true;
}