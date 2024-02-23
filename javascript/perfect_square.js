/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 1) return false; // Special case: 0 and negative numbers are not perfect squares
    if (num === 1) return true; // Special case: 1 is a perfect square

    let left = 1; // Start the search from 1
    let right = Math.floor(num / 2); // As perfect square will be at most num / 2

    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // Calculate the middle

        // Check if the middle value squared equals num
        let midSquared = mid * mid;
        if (midSquared === num) {
            return true; // Found perfect square
        } else if (midSquared < num) {
            left = mid + 1; // If mid^2 < num, increase left
        } else {
            right = mid - 1; // If mid^2 > num, decrease right
        }
    }

    return false; // If we reach here, num is not a perfect square
};
