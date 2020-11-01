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

class Solution(object):
  def longestPalindrome(self, s):
  
    # self variables for longest length and it's starting point
    self.longestLength = 0
    self.startingPoint = 0

    # iterate through s
    for i in range(len(s)):

    #run helper method with each possible starting point in s
      self.expandFromMiddle(s, i, i)
      self.expandFromMiddle(s, i, i+1)

    #return substring of length longest length starting at starting point
    return s[self.startingPoint:self.startingPoint + self.longestLength]

  def expandFromMiddle(self, s, l, r):
    #check if s[l] == s[r] and if l and r are still in bounds
    while (l > -1 and r < len(s) and s[l] == s[r]):
    #if yes, l-=1 and r+=1 
      l -= 1
      r += 1

    #if palindrome is longer than current longest, adjust self variables
    if(r-l-1 > self.longestLength):
      self.longestLength = r-l-1
      self.startingPoint = l+1
    
    
        