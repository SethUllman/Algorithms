# Valid Parinthesis

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
 

# Example 1:

# Input: s = "()"
# Output: true
# Example 2:

# Input: s = "()[]{}"
# Output: true
# Example 3:

# Input: s = "(]"
# Output: false
# Example 4:

# Input: s = "([)]"
# Output: false
# Example 5:

# Input: s = "{[]}"
# Output: true
 

# Constraints:

# 1 <= s.length <= 104
# s consists of parentheses only '()[]{}'.

def isValid(self, s: str):

  #make use of a stack

  stack = []

  for char in s:
    if char == "(" or char == "[" or char == "{":
      stack.append(char)
    elif char == ")" or char == "]" or char == "}":
      last_char = s[-1]
      if (char == ")" and last_char != "(") or (char == "]" and last_char != "[") or (char == "}" and last_char != "{"):
        return False

  return True
