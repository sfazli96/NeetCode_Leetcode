class Solution:
    def largestDivisibleSubset(self, nums):
        if not nums:
            return []

        nums.sort()
        dp = [[num] for num in nums]  # Initialize dp with each number forming a subset of size 1
        max_subset = []

        for i in range(len(nums)):
            for j in range(i):
                if nums[i] % nums[j] == 0 and len(dp[i]) < len(dp[j]) + 1:
                    dp[i] = dp[j] + [nums[i]]  # Extend the subset with current number
            if len(dp[i]) > len(max_subset):
                max_subset = dp[i]

        return max_subset

# Test cases
solution = Solution()
print(solution.largestDivisibleSubset([1, 2, 3]))  # Output: [1, 2] or [1, 3]
print(solution.largestDivisibleSubset([1, 2, 4, 8]))  # Output: [1, 2, 4, 8]
