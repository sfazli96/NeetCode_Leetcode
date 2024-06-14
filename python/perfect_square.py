class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num < 1:
            return False  # Special case: 0 and negative numbers are not perfect squares
        if num == 1:
            return True   # Special case: 1 is a perfect square

        left = 1    # Start the search from 1
        right = num // 2   # As perfect square will be at most num / 2

        while left <= right:
            mid = left + (right - left) // 2   # Calculate the middle

            # Check if the middle value squared equals num
            mid_squared = mid * mid
            if mid_squared == num:
                return True   
            elif mid_squared < num:
                left = mid + 1   # If mid^2 < num, increase left
            else:
                right = mid - 1   # If mid^2 > num, decrease right

        return False   # If we reach here, num is not a perfect square

# Test cases
solution = Solution()
print(solution.isPerfectSquare(16))  
print(solution.isPerfectSquare(14))
