def isAnagram(s, t):
    if len(s) != len(t): # check if the strings are different
        return False

    s_count = {} # dictionaries
    t_count = {}

    for char in s:
        if char in s_count:
            s_count[char] += 1
        else:
            s_count[char] = 1

    for char in t:
        if char in t_count:
            t_count[char] += 1
        else:
            t_count[char] = 1

    return s_count == t_count

# Test cases
print(isAnagram("anagram", "nagaram"))  
print(isAnagram("rat", "car"))         
