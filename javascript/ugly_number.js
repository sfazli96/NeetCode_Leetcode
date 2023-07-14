var isUgly = function(n) {
    if (n <= 0) {
        return false
    }

    if (n === 1) { // base case
        return true
    }

    if (n % 2 === 0) {
        return isUgly(n / 2) // recursive case
    }

    if (n % 3 === 0) {
        return isUgly(n / 3) // recursive case
    }

    if (n % 5 === 0) {
        return isUgly(n / 5) // recursive case
    }

    return false
};
