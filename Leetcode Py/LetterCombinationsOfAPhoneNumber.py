# Letter Combinations of a Phone Number

# Given a string containing digits from 2-9 inclusive, return all possible 
# letter combinations that the number could represent. Return the answer in any 
# order.

# A mapping of digit to letters (just like on the telephone buttons) is given 
# below. Note that 1 does not map to any letters.

# Example 1:

# Input: digits = "23"
# Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
# Example 2:

# Input: digits = ""
# Output: []
# Example 3:

# Input: digits = "2"
# Output: ["a","b","c"]
 

# Constraints:

# 0 <= digits.length <= 4
# digits[i] is a digit in the range ['2', '9'].
from typing import List
def letterCombinations(self, digits: str):
  combos: List[str] = []

  #set a hash containing each integers assigned letters
  self.combos = []

  chars = {
    "2": ["a", "b", "c"], 
    "3": ["d", "e", "f"], 
    "4": ["g", "h", "i"], 
    "5": ["j", "k", "l"], 
    "6": ["m", "n", "o"], 
    "7": ["p", "q", "r", "s"], 
    "8": ["t", "u", "v"], 
    "9": ["w", "x", "y", "z"]
  }

  used_chars: List[List[str]] = []

  #iterate through digits, adding possible letters to used_chars

  for num in digits:
    used_chars.append(chars[num])

  #use permutation helper function to find permutations of used_chars
  permutations(self, used_chars)

  return combos

def permutations(self, lists):



  
