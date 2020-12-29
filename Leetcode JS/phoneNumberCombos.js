var letterCombinations = function (digits) {

  if (!digits) return [];

  const letterHash = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }

  let currentVals = [""];

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i];
    let nextVals = [];
    for (let j = 0; j < currentVals.length; j++) {
      let val = currentVals[j];
      letterHash[digit].forEach((ch) => {
        nextVals.push(val + ch);
      })
    }
    currentVals = nextVals;
  }

  return currentVals;

};