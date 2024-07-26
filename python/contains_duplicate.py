## Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        freq = {}
        for num in nums:
            if num in freq: # if the num is in the dictionary that appears twice, return true
                return True
            freq[num] = 1
        return False 
