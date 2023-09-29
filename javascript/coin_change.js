var coinChange = function(coins, amount) {
    coins.sort((a, b) => a - b) // sort the coins array

    // dynamic programming array
    const newArr = new Array(amount + 1).fill(amount + 1)
    newArr[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i >= coins[j]) {
                newArr[i] = Math.min(newArr[i], newArr[i - coins[j]] + 1);
            }
        }
    }
    return newArr[amount] > amount ? -1 : newArr[amount]
};



// Time Complexity: O(amount * n * log(n)), amount is target amount and n is the # of coins

