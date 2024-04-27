let subsets = function(nums) {
    if (nums.length === 0) {
        return [[]]
    }

    let num = nums[0]

    let sliced = subsets(nums.slice(1))

    let newArr = []

    for (let subset of sliced) {
        newArr.push([num].concat(subset));
        newArr.push(subset);
    }

    return newArr;
}
