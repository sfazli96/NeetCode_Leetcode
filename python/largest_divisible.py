class Solution:
    def largestDivisibleSubset(self, nums):
        if not nums:
            return []
        nums.sort()
        dp = [[num] for num in nums]  
        max_subset = []
        for i in range(len(nums)):
            for j in range(i):
                if nums[i] % nums[j] == 0 and len(dp[i]) < len(dp[j]) + 1:
                    dp[i] = dp[j] + [nums[i]]  # Extend the subset with current number
            if len(dp[i]) > len(max_subset):
                max_subset = dp[i]
        return max_subset
