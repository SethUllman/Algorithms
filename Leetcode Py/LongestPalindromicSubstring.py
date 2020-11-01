# Given a string s, return the longest palindromic substring in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
# Example 3:

# Input: s = "a"
# Output: "a"
# Example 4:

# Input: s = "ac"
# Output: "a"
 

# Constraints:

# 1 <= s.length <= 1000
# s consist of only digits and English letters (lower-case and/or upper-case),

def longestPalindrome(self, s):
  """
  :type s: str
  :rtype: str
  """

  return (s if len(s) == 1)

  #variables to keep track of longest current palindromic substring

  longest_current = s[0]

  #nested for loop to find substrings

  for i in range(0, len(s)-1):
    for j in range(i, len(s)):
      current = s[i:j]

      #update longest current palindromic substring if current == reverse(current) and len(current) > longest current

      if(current[::-1] == current and len(current) > len(longest_current)):
        longest_current = current



  #return longest current

  return longest_current
        