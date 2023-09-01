class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        memo = {}  # Memoization dictionary

        def canSegment(s):
            if s in memo:
                return memo[s]

            if not s:
                return True

            for i in range(1, len(s) + 1):
                prefix = s[:i]

                if prefix in wordDict and canSegment(s[i:]):
                    memo[s] = True
                    return True

            memo[s] = False
            return False
        
        return canSegment(s)
