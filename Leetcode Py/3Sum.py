# 3Sum

# Given an array nums of n integers, are there elements a, b, c in nums such 
# that a + b + c = 0? Find all unique triplets in the array which gives the sum 
# of zero.

# Notice that the solution set must not contain duplicate triplets.

# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Example 2:

# Input: nums = []
# Output: []
# Example 3:

# Input: nums = [0]
# Output: []
 

# Constraints:

# 0 <= nums.length <= 3000
# -105 <= nums[i] <= 105
from typing import List
def threeSum(self, nums: List[int]) -> List[List[int]]:
  if len(nums) < 3:
    return []

  nums.sort()

  valid_triples = set()

  for i in range(0, len(nums)):
    j = i+1
    k = len(nums)-1
    while j < k:
      current = nums[i] + nums[j] + nums[k]
      if current == 0:
        valid_triples.add((nums[i], nums[j], nums[k]))
        
      if current > 0:
        k-=1
      else:
        j+=1

  return list(valid_triples)

