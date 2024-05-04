/*
46. Permutations
Medium
16.3K
263
Companies
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.



Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]
Example 3:

Input: nums = [1]
Output: [[1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function(nums) {
    if (!nums.length) { // base case
      return [nums];
    }

    let newArr = []; // empty new arr

    for (let i = 0; i < nums.length; i++) { // iterate through the integer array
      let num = nums[i]; // get the index of the array
      let copied = nums.slice(0, i).concat(nums.slice(i + 1)); // .slice look at all possible permutations and slice it then
      let recurs = permute(copied); // recursive case, recursively call it back to the function

      for (let j = 0; j < recurs.length; j++) { // iterate through the recursive array
        let re = recurs[j]; // find the index of it
        newArr.push([num].concat(re)); // then push it back into the newArr but also concat/add the index
      }
    }

    return newArr; // return the permutation
  };
