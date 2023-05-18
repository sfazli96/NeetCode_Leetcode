## 217. Contains Duplicate
## Easy
## Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

## Example 1:

## Input: nums = [1,2,3,1]
## Output: true
## Example 2:

## Input: nums = [1,2,3,4]
## Output: false
## Example 3:

## Input: nums = [1,1,1,3,3,4,3,2,4,2]
## Output: true


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        freq = {} ## dictionary
        for num in nums:
            if num in freq: # if the num is in the dictionary that appears twice, return true
                return True
            freq[num] = 1
        return False ## else False
