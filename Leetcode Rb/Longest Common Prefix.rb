# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

# Example 1:

# Input: ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.
# Note:

# All given inputs are in lowercase letters a-z.

# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
    prefix = ""
    return prefix if strs.length == 0
    strs[0].length.times do |i|
      matching = true;
      current_char = strs[0][i]
      strs.each do |string|
        if current_char != string[i] then
          matching = false
        end
      end
      if matching then
        prefix << current_char
      else 
        return prefix
      end
    end
    prefix
end