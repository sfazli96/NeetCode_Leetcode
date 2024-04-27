/*
347. Top K Frequent Elements
Medium
14.5K
513
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function(nums, k) {
//     for (let i = 0; i < nums.length; i++) {
//         let num = nums[i]
//         console.log(num)
//         if (num == k) {
//             return num[i, i + 1]
//         }
//     }
// };

let topKFrequent = function(nums, k) {
    const frequencyCount = nums.reduce((count, num) => {
        count[num] = (count[num] || 0) + 1;
        return count;
    }, {});

    const distinctNums = Object.keys(frequencyCount);
    distinctNums.sort((a, b) => frequencyCount[b] - frequencyCount[a]);

    return distinctNums.slice(0, k);
};

