let minCostClimbingStairs = function(cost) {
    let step = new Array(cost.length)
    step[cost.length - 1] = cost[cost.length - 1];
    step[cost.length - 2] = cost[cost.length - 2];

    for (let i = cost.length - 3; i >= 0; i--) {
        step[i] = cost[i] + Math.min(step[i + 1], step[i + 2]);
    }

    return Math.min(step[0], step[1]);
};


// In summary, the time complexity of the minCostClimbingStairs function is O(n), and the space complexity is also O(n), where n is the length of the cost array.




