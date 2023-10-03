/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let reverseWord = words.map(word => word.split("").reverse().join(""))
    // console.log(strSplit)
    for (let i = 0; i < reverseWord.length; i++) {
        let reversed = reverseWord[i]
        if (reversed === words[i]) {
            return words[i]
        }
    }
    return ""
};


// In summary, the time complexity of the firstPalindrome function is O(n * m), and the space complexity is O(n), where n is the number of words in the input array, and m is the average length of the words.
