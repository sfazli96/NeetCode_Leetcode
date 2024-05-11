let missingNumber = function(nums) {
    let n = nums.length;
    let temp = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        temp[num] = 1;
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === 0) {
            return i;
        }
    }
};
