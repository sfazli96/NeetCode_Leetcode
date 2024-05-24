/*
49. Group Anagrams
Medium
15.5K
443
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let result = []

    // creates a map to store the groups
    let groups = new Map()

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
        let sorted = str.split('').sort().join('')

        // Check if the group already exists in the map
        if (groups.has(sorted)) {
            groups.get(sorted).push(str)
        } else {
            groups.set(sorted, [str])
        }
    }

    // convert the map values to an array of arrays
    groups.forEach((group) => {
        result.push(group)
    })
    return result
};
