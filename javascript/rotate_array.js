let rotate = function(nums, k) {
    const n = nums.length;
    k = k % n;

    // reverse array
    reverse(nums, 0, n - 1)

    // Reverse the first k elements
    reverse(nums, 0, k - 1)

    reverse(nums, k, n - 1)
};

function reverse(nums, start, end) {
    while (start < end) {
        const tmp = nums[start]
        nums[start] = nums[end]
        nums[end] = tmp
        start++
        end--
    }
}


