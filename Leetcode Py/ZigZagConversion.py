# 6. ZigZag Conversion
# Medium

# 1959

# 5117

# Add to List

# Share
# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"

# Write the code that will take a string and make this conversion given a number of rows:

# string convert(string s, int numRows);
 

# Example 1:

# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"
# Example 2:

# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I
# Example 3:

# Input: s = "A", numRows = 1
# Output: "A"
 

# Constraints:

# 1 <= s.length <= 1000
# s consists of English letters (lower-case and upper-case), ',' and '.'.
# 1 <= numRows <= 1000

def convert(self, s, numRows):
  """
  :type s: str
  :type numRows: int
  :rtype: str
  """
  
  if(numRows == 1):
    return s
  
  #create a matrix with length equal to numRows
  matrix = [[[] for column in range(0, len(s))] for row in range(0, numRows)]

  #we'll use [i][j] to access different indexes in the matrix; i=0, j=0
  i = 0
  j = 0
  current_index = 0

  #iterate through s, incrementing i until i equals the matrixes length.
  #from there, decrement i and increment j with every iteration until i reaches 0. Repeat.

  while(current_index < len(s)):
    while(i < len(matrix)-1 and current_index < len(s)):
      matrix[i][j] = s[current_index]
      i+=1
      current_index+=1

    while(i > 0 and current_index < len(s)):
      matrix[i][j] = s[current_index]
      i-=1
      j+=1
      current_index+=1

  #return the flattend matrix
  flat_list = []
  for sublist in matrix:
    for item in sublist:
      flat_list.append(item)

  flat_list = [x for x in flat_list if x != [] ]
  
  return "".join(flat_list)