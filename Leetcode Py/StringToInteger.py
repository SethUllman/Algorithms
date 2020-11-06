# 8. String to Integer (atoi)

# Implement atoi which converts a string to an integer.

# The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

# The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

# If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

# If no valid conversion could be performed, a zero value is returned.

# Note:

# Only the space character ' ' is considered a whitespace character.
# Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.
 

# Example 1:

# Input: str = "42"
# Output: 42
# Example 2:

# Input: str = "   -42"
# Output: -42
# Explanation: The first non-whitespace character is '-', which is the minus sign. Then take as many numerical digits as possible, which gets 42.
# Example 3:

# Input: str = "4193 with words"
# Output: 4193
# Explanation: Conversion stops at digit '3' as the next character is not a numerical digit.
# Example 4:

# Input: str = "words and 987"
# Output: 0
# Explanation: The first non-whitespace character is 'w', which is not a numerical digit or a +/- sign. Therefore no valid conversion could be performed.
# Example 5:

# Input: str = "-91283472332"
# Output: -2147483648
# Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer. Thefore INT_MIN (−231) is returned.
 

# Constraints:

# 0 <= s.length <= 200
# s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-' and '.'.
import string
import math
def myAtoi(self, s: str) -> int:
      
  no_white = []
  alph = string.ascii_letters
  num_found = False
  operators = ["+", "-"]
  op_found = False
  is_float = False
  #remove whitespace

  for char in s:
    
    if num_found and (char.isspace() or char in alph or char in operators):
      print(7)
      break

    if char == ".":
      print(1)
      is_float = True
      
    if char.isspace() and (num_found == True or op_found == True):
      print(1.5)
      break
      
    #filter whitespace
    if char.isspace():
      print(2)
      continue
      
    #return 0 if first character is not a number or operator
    if num_found == False and char in alph:
      print(3)
      return 0

    #change op_found if the char is an operator and append to no_white
    if char in operators and op_found == False and num_found == False:
      print(4)
      op_found = True
      no_white.append(char)
      continue

    #return 0 if second operator found
    if char in operators and op_found == True:
      print(5)
      return 0

    if not char.isspace() and char not in alph:
      print(6)
      num_found = True
      no_white.append(char)
      
  print(no_white)

  if len(no_white) == 0 or num_found == False:
    return 0

  if is_float == True:
    new_num = math.floor(float("".join(no_white)))
  else:
    new_num = int("".join(no_white))
    
  print(new_num)
  
  if new_num > (2**31 - 1):
    return (2**31 - 1)
  elif new_num < (-2**31):
    return (-2**31)
  else:
    return new_num
  

  



