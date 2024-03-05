var sortEvenOdd = function(nums) {
    // Separate elements into two arrays based on index parity
    const evenIndices = [];
    const oddIndices = [];
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            evenIndices.push(nums[i]);
        } else {
            oddIndices.push(nums[i]);
        }
    }

    // Sort even indices array in non-decreasing order
    evenIndices.sort((a, b) => a - b);

    // Sort odd indices array in non-increasing order
    oddIndices.sort((a, b) => b - a);

    // Merge the sorted arrays back into the original array
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = evenIndices.shift();
        } else {
            nums[i] = oddIndices.shift();
        }
    }

    return nums;
};

// Test cases
console.log(sortEvenOdd([4,1,2,3])); // Output: [2,3,4,1]
console.log(sortEvenOdd([2,1]));      // Output: [2,1]
